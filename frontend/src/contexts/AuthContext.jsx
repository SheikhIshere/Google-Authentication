import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const tokens = JSON.parse(localStorage.getItem('tokens'));
            if (tokens && tokens.access) {
                try {
                    const userData = await authAPI.getProfile(tokens.access);
                    setUser(userData);
                } catch (error) {
                    console.error('Failed to restore session:', error);
                    localStorage.removeItem('tokens');
                }
            }
            setLoading(false);
        };
        initAuth();
    }, []);

    const login = async (token) => {
        const data = await authAPI.googleLogin(token);
        localStorage.setItem('tokens', JSON.stringify({
            access: data.access,
            refresh: data.refresh
        }));
        setUser(data.user);
    };

    const logout = async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if (tokens) {
            try {
                await authAPI.logout(tokens.refresh, tokens.access);
            } catch (error) {
                console.error('Logout failed:', error);
            } finally {
                localStorage.removeItem('tokens');
                setUser(null);
            }
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
