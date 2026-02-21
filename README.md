# 🔐 Google Authentication with Django & Docker

A modern Django project implementing Google OAuth authentication using Docker, Django REST Framework, and JWT tokens.

## 🚀 Features

- **🔐 Google OAuth Integration** - Secure authentication using Google's OAuth 2.0
- **🐳 Dockerized** - Complete containerized development environment
- **🔑 JWT Authentication** - JSON Web Token-based API security
- **📱 REST API** - Django REST Framework for modern API development
- **👤 Custom User Model** - Extensible user system with multiple providers
- **🛠️ SQLite Database** - Lightweight development database
- **📚 Comprehensive Documentation** - Complete command reference

## 📋 Project Structure

```
Google-Authentication/
├── backend/                    # Django application
│   ├── core/                 # Django project settings
│   │   ├── settings.py      # Project configuration
│   │   ├── urls.py          # URL routing
│   │   └── wsgi.py          # WSGI application
│   ├── accounts/             # Authentication app
│   │   ├── models.py         # Custom User model
│   │   ├── views.py          # Authentication views
│   │   └── migrations/       # Database migrations
│   └── manage.py            # Django management script
├── Dockerfile                 # Docker configuration
├── docker-compose.yml        # Docker Compose setup
├── requirements.txt           # Python dependencies
├── .env                     # Environment variables (gitignored)
└── docs/                    # Documentation
    └── commands.md          # Command reference
```

## 🛠️ Tech Stack

- **Backend**: Django 6.0.2
- **Authentication**: Django REST Framework + Simple JWT
- **Database**: SQLite (development)
- **Containerization**: Docker & Docker Compose
- **OAuth**: Google OAuth 2.0
- **API Documentation**: DRF Spectacular (OpenAPI/Swagger)

## 🔧 Quick Start

### Prerequisites
- Docker & Docker Compose installed
- Google Cloud Project with OAuth credentials
- Git with SSH access (for GitHub)

### 1. Clone & Setup
```bash
git clone git@github.com:SheikhIshere/Google-Authentication.git
cd Google-Authentication
```

### 2. Environment Configuration
Create `.env` file with your Google OAuth credentials:
```bash
SECRET_KEY=your-django-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Run Development Server
```bash
docker-compose up --build
```

Access your application at: http://localhost:8000

## 🔐 Google OAuth Setup

### 1. Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:8000/auth/callback/`

### 2. Environment Variables
Add these to your `.env` file:
```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/callback/
```

## 📚 Documentation

- **[Command Reference](docs/commands.md)** - Complete Docker and Django command guide
- **API Documentation** - Available at `/api/docs/` when running
- **Django Admin** - Available at `/admin/` when running

## 🐳 Docker Commands

### Development
```bash
# Start development server
docker-compose up --build

# Run in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Access container shell
docker-compose exec backend bash
```

### Database Management
```bash
# Create migrations
docker-compose exec backend python manage.py makemigrations

# Apply migrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser
```

## 🔑 Authentication Flow

1. **User Registration** - Email/password or Google OAuth
2. **Google Login** - Redirect to Google for authentication
3. **Token Exchange** - Exchange authorization code for access token
4. **JWT Generation** - Create JWT tokens for API access
5. **API Access** - Use JWT tokens for authenticated requests

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/google/` - Initiate Google OAuth
- `GET /api/auth/google/callback/` - Handle OAuth callback
- `POST /api/auth/refresh/` - Refresh JWT tokens
- `POST /api/auth/logout/` - Logout user

### User Management
- `GET /api/user/profile/` - Get user profile
- `PUT /api/user/profile/` - Update user profile
- `POST /api/user/change-password/` - Change password

## 🔒 Security Features

- **JWT Authentication** - Secure token-based API access
- **Google OAuth** - Enterprise-grade authentication
- **Custom User Model** - Isolated user data
- **Environment Variables** - Sensitive data protection
- **CORS Configuration** - Cross-origin request handling

## 🚀 Deployment

### Production Considerations
- Use PostgreSQL instead of SQLite
- Configure proper CORS settings
- Use environment-specific settings
- Set up proper logging
- Use HTTPS in production

## 📈 Development Workflow

1. **Local Development** - Use Docker Compose
2. **Feature Development** - Create feature branches
3. **Testing** - Write comprehensive tests
4. **Code Review** - Maintain code quality
5. **Documentation** - Keep docs updated

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make your changes
4. Submit pull request
5. Follow coding standards

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**🔐 Built with Django, Docker, and Google OAuth for modern web authentication.**