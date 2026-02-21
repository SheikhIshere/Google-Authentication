import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="logo">
                    <span>Google Auth</span> App
                </Link>
                <div className="nav-links">
                    {user ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <button onClick={logout} className="logout-btn">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
