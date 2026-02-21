import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="dashboard-container fade-in">
            <div className="dashboard-card">
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                    {user && <h2 className="greeting">Hi {user.email}</h2>}
                </header>

                {user && (
                    <div className="profile-section">
                        <div className="avatar-wrapper">
                            <img src={user.avatar} alt={user.first_name} className="dashboard-avatar" />
                        </div>
                        <div className="profile-details">
                            <div className="detail-item">
                                <label>First Name</label>
                                <p>{user.first_name || 'N/A'}</p>
                            </div>
                            <div className="detail-item">
                                <label>Last Name</label>
                                <p>{user.last_name || 'N/A'}</p>
                            </div>
                            <div className="detail-item">
                                <label>Account Type</label>
                                <p className="badge">{user.provider === 'google' ? 'Google Authenticated' : 'Standard Account'}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
