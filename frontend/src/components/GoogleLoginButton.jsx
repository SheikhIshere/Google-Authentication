import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const GoogleLoginButton = () => {
    const { login } = useAuth();

    useEffect(() => {
        /* global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'PENDING_CLIENT_ID',
                callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }
            );
        }
    }, []);

    const handleCredentialResponse = async (response) => {
        try {
            await login(response.credential);
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    return <div id="buttonDiv"></div>;
};

export default GoogleLoginButton;
