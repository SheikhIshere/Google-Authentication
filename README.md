# 🔐 Google Authentication Full-Stack Application

A modern full-stack application featuring Google OAuth authentication with Django REST API backend and React frontend, all containerized with Docker.

## 🚀 **Live Demo & Screenshots**

### 🖥️ **Application Interface**
![App Screenshot](asset/Screenshot%20from%202026-02-21%2017-04-21.png)

### 📱 **Dashboard View**
![Dashboard](asset/Screenshot%20from%202026-02-21%2017-04-35-fotor-2026022117611.png)

### 🔐 **Authentication Flow**
![Auth Flow](asset/Screenshot%20from%202026-02-21%2017-04-35-fotor-2026022117816.png)

## ⭐ **Key Features**

- **🔐 Google OAuth 2.0** - Secure Google authentication
- **🐳 Docker Compose** - Multi-container development
- **🔑 JWT Tokens** - Secure API authentication
- **📱 React Frontend** - Modern SPA with Vite
- **🐍 Django Backend** - REST API with DRF
- **🛠️ SQLite Database** - Development-ready
- **🎨 Responsive Design** - Mobile-friendly UI
- **📚 API Documentation** - Auto-generated with DRF Spectacular

## 🏗️ **Architecture Overview**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React App     │    │   Django API    │    │   SQLite DB     │
│   (Port 3000)   │◄──►│   (Port 8000)   │◄──►│   (File-based)  │
│                 │    │                 │    │                 │
│ • Google OAuth  │    │ • JWT Auth      │    │ • User Data     │
│ • JWT Storage  │    │ • REST API      │    │ • Migrations    │
│ • Protected Routes│  │ • CORS Config   │    │ • Relations     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📁 **Project Structure**

```
Google-Authentication/
├── 🐳 docker-compose.yml          # Multi-container orchestration
├── 🐳 Dockerfile                  # Backend container
├── 🐳 Dockerfile.frontend         # Frontend container
├── 📋 requirements.txt             # Python dependencies
├── 🔐 .env                        # Environment variables (gitignored)
├── 📄 README.md                   # This file
├── 🖼️ asset/                      # Screenshots & assets
│   ├── Screenshot from 2026-02-21 17-04-21.png
│   ├── Screenshot from 2026-02-21 17-04-35-fotor-2026022117611.png
│   └── Screenshot from 2026-02-21 17-04-35-fotor-2026022117816.png
├── 📚 docs/                       # Documentation
│   └── commands.md               # Development commands
├── 📝 todo/                       # Development planning
│   ├── backend-analysis.md       # API specifications
│   ├── frontend-instructions.md   # Frontend development guide
│   └── testing-plan.md           # Testing strategy
├── 🐍 backend/                    # Django application
│   ├── 📁 core/                   # Project settings
│   │   ├── settings.py           # Django configuration
│   │   ├── urls.py               # URL routing
│   │   ├── utils/                # Utilities
│   │   │   └── google.py         # Google OAuth verification
│   │   └── wsgi.py               # WSGI application
│   ├── 📁 accounts/              # Authentication app
│   │   ├── models.py             # Custom User model
│   │   ├── views.py              # Google OAuth view
│   │   ├── serializers.py        # API serializers
│   │   ├── urls.py               # Auth endpoints
│   │   └── migrations/           # Database migrations
│   └── 🐧 manage.py              # Django management
└── ⚛️ frontend/                   # React application
    ├── 📁 src/                   # Source code
    │   ├── App.jsx               # Main component
    │   ├── main.jsx              # Entry point
    │   ├── index.css             # Global styles
    │   └── App.css               # Component styles
    ├── 📁 public/                # Static assets
    ├── 📄 package.json           # Dependencies & scripts
    ├── ⚙️ vite.config.js          # Vite configuration
    └── 📄 index.html              # HTML template
```

## 🛠️ **Tech Stack**

### **Backend**
- **🐍 Django 6.0.2** - Web framework
- **🔐 Django REST Framework** - API development
- **🔑 Simple JWT** - Token authentication
- **🔍 DRF Spectacular** - API documentation
- **🔐 Google Auth Libraries** - OAuth integration
- **🛡️ Django CORS Headers** - Cross-origin support

### **Frontend**
- **⚛️ React 19.2.0** - UI framework
- **⚡ Vite 5.4.10** - Build tool & dev server
- **🛣️ React Router DOM 7.13.0** - Client routing
- **🌐 Axios 1.13.5** - HTTP client
- **🎨 CSS3** - Styling

### **Infrastructure**
- **🐳 Docker & Docker Compose** - Containerization
- **🗄️ SQLite** - Development database
- **🔄 Git** - Version control
- **🌐 GitHub** - Code hosting

## 🚀 **Quick Start**

### **Prerequisites**
- 🐳 Docker & Docker Compose
- 🔑 Google Cloud OAuth credentials
- 🌐 Git with SSH access

### **1. Clone Repository**
```bash
git clone git@github.com:SheikhIshere/Google-Authentication.git
cd Google-Authentication
```

### **2. Environment Setup**
Create `.env` file:
```bash
SECRET_KEY=your-django-secret-key
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### **3. Launch Application**
```bash
docker-compose up --build
```

### **4. Access Points**
- 🌐 **Frontend**: http://localhost:3000
- 🔧 **Backend API**: http://localhost:8000
- 📚 **API Docs**: http://localhost:8000/api/docs/
- 👤 **Django Admin**: http://localhost:8000/admin/

## 🔐 **Google OAuth Setup**

### **Google Cloud Console**
1. 🌐 Go to [Google Cloud Console](https://console.cloud.google.com/)
2. 📁 Create/select project
3. ⚙️ Enable Google+ API
4. 🔐 Create OAuth 2.0 credentials
5. 🌍 Add authorized origins: `http://localhost:3000`
6. 🔄 Add redirect URI: `http://localhost:3000`

### **Environment Variables**
```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
VITE_API_URL=http://localhost:8000/api/v1
```

## 🌐 **API Endpoints**

### **Authentication**
```http
POST /api/v1/auth/google/
Content-Type: application/json

{
  "token": "GOOGLE_ID_TOKEN"
}
```

**Response:**
```json
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "avatar": "https://lh3.googleusercontent.com/photo.jpg"
  }
}
```

### **User Model**
```python
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, blank=True)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    avatar = models.URLField(blank=True, null=True)
    provider = models.CharField(max_length=32, choices=PROVIDER_CHOICES)
    email_verified = models.BooleanField(default=False)
    # ... additional fields
```

## 🐳 **Docker Commands**

### **Development**
```bash
# Start all services
docker-compose up --build

# Start in background
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Access containers
docker-compose exec backend bash
docker-compose exec frontend sh
```

### **Database Management**
```bash
# Create migrations
docker-compose exec backend python manage.py makemigrations

# Apply migrations
docker-compose exec backend python manage.py migrate

# Create superuser
docker-compose exec backend python manage.py createsuperuser

# Django shell
docker-compose exec backend python manage.py shell
```

## 🔑 **Authentication Flow**

1. **🔐 User clicks "Login with Google"**
2. **🌐 Google OAuth popup opens**
3. **👤 User authenticates with Google**
4. **🔑 Frontend receives Google ID token**
5. **📤 Frontend sends token to Django backend**
6. **✅ Backend verifies token with Google**
7. **👤 Backend creates/updates user record**
8. **🔑 Backend generates JWT tokens**
9. **💾 Frontend stores tokens securely**
10. **🏠 User redirected to dashboard**

## 🛡️ **Security Features**

- **🔐 JWT Authentication** - Token-based API security
- **🌐 Google OAuth** - Enterprise-grade authentication
- **🛡️ CORS Configuration** - Cross-origin protection
- **🔒 Environment Variables** - Sensitive data protection
- **👤 Custom User Model** - Isolated authentication
- **🔑 Token Storage** - Secure client-side storage
- **🚫 CSRF Protection** - Django's built-in protection

## 📊 **Development Workflow**

### **Daily Development**
```bash
# 1. Start development environment
docker-compose up -d --build

# 2. Make code changes
# Edit files in backend/ or frontend/

# 3. View logs for debugging
docker-compose logs -f backend
docker-compose logs -f frontend

# 4. Restart services if needed
docker-compose restart backend frontend

# 5. Stop when done
docker-compose down
```

### **Testing**
```bash
# Backend tests
docker-compose exec backend python manage.py test

# Frontend tests
docker-compose exec frontend npm test

# Manual testing
# Open http://localhost:3000 in browser
# Test Google OAuth flow
# Check browser console for errors
```

## 🚀 **Deployment Considerations**

### **Production Checklist**
- [ ] 🗄️ **Database**: Use PostgreSQL instead of SQLite
- [ ] 🔒 **HTTPS**: Configure SSL certificates
- [ ] 🌐 **Environment**: Production environment variables
- [ ] 📝 **Logging**: Set up proper logging
- [ ] 🚀 **Performance**: Optimize build and caching
- [ ] 🔐 **Security**: Review CORS and authentication
- [ ] 📊 **Monitoring**: Add health checks and metrics

### **Docker Production**
```yaml
# Production docker-compose.yml example
services:
  backend:
    build: .
    environment:
      - DEBUG=False
      - DATABASE_URL=postgresql://...
    depends_on:
      - db
  
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    environment:
      - NODE_ENV=production
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=app_db
      - POSTGRES_USER=app_user
      - POSTGRES_PASSWORD=secure_password
```

## 🤝 **Contributing**

### **Development Setup**
1. 🍴 Fork the repository
2. 🌿 Create feature branch: `git checkout -b feature/amazing-feature`
3. 🐳 Start development: `docker-compose up --build`
4. 🧪 Test your changes
5. 📝 Update documentation
6. 🚀 Commit changes: `git commit -m 'Add amazing feature'`
7. 📤 Push to branch: `git push origin feature/amazing-feature`
8. 🔄 Open Pull Request

### **Code Standards**
- 🐍 Follow PEP 8 for Python code
- ⚛️ Follow React best practices
- 📝 Write meaningful commit messages
- 🧪 Add tests for new features
- 📚 Update documentation

## 📚 **Documentation**

- **[📋 Commands Guide](docs/commands.md)** - Complete command reference
- **[🔧 Backend Analysis](todo/backend-analysis.md)** - API specifications
- **[⚛️ Frontend Instructions](todo/frontend-instructions.md)** - Development guide
- **[🧪 Testing Plan](todo/testing-plan.md)** - Testing strategy

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Frontend Issues**
```bash
# Node.js version compatibility
# Ensure Vite 5.4.10 for Node.js 18

# Google OAuth not working
# Check VITE_GOOGLE_CLIENT_ID environment variable
# Verify Google Cloud Console settings

# CORS errors
# Check CORS_ALLOWED_ORIGINS in Django settings
# Verify frontend URL is whitelisted
```

#### **Backend Issues**
```bash
# Migration errors
docker-compose exec backend python manage.py migrate --fake-initial

# Google token verification fails
# Check GOOGLE_CLIENT_ID environment variable
# Verify Google API credentials

# JWT token issues
# Check SIMPLE_JWT settings
# Verify token expiration times
```

#### **Docker Issues**
```bash
# Port conflicts
# Check if ports 8000 and 3000 are available
# Use `docker-compose down -v` to clean up

# Build cache issues
docker-compose build --no-cache
docker system prune -a
```

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **🔐 Google** - OAuth 2.0 authentication
- **🐍 Django** - Web framework
- **⚛️ React** - UI library
- **🐳 Docker** - Containerization
- **🌐 Open Source Community** - Libraries and tools

---

**🔐 Built with ❤️ using Django, React, and Google OAuth for secure modern authentication**

**⭐ Star this repository if it helped you! 🚀**
