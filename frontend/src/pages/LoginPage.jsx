import GoogleLoginButton from '../components/GoogleLoginButton';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
    const { user } = useAuth();

    if (user) return <Navigate to="/dashboard" />;

    return (
        <div className="login-page fade-in">
            <div className="login-card">
                <h1>Welcome Back</h1>
                <p>Login to your account</p>
                <div className="auth-options">
                    <GoogleLoginButton />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
