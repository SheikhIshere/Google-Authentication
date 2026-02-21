# Docker Django Commands for Google Authentication Project

## Project Setup Commands

### Create Django Project (Local Setup Only)
```bash
cd backend
django-admin startproject core .
```

### Create Django App (Local Setup Only)
```bash
cd backend
python manage.py startapp accounts
```

## Development Commands

### Run Development Server
```bash
docker-compose up --build
```

### Run Server in Background
```bash
docker-compose up -d --build
```

### Stop Server
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

### Rebuild Without Cache
```bash
docker-compose build --no-cache
docker-compose up --force-recreate
```

## Database Commands

### Create Migrations
```bash
docker-compose exec backend python manage.py makemigrations
```

### Apply Migrations
```bash
docker-compose exec backend python manage.py migrate
```

### Create Superuser
```bash
docker-compose exec backend python manage.py createsuperuser
```

## Django Admin Commands

### Collect Static Files
```bash
docker-compose exec backend python manage.py collectstatic --noinput
```

### Check for Issues
```bash
docker-compose exec backend python manage.py check
```

### Shell Access
```bash
docker-compose exec backend python manage.py shell
```

## Testing Commands

### Run Tests
```bash
docker-compose exec backend python manage.py test
```

### Run Specific App Tests
```bash
docker-compose exec backend python manage.py test accounts
```

## Google OAuth Setup Commands

### Install Required Packages (already in requirements.txt)
```bash
pip install django-allauth
pip install django-rest-framework-social-oauth2
```

### Create OAuth App for Testing (Local Setup Only)
```bash
cd backend
python manage.py startapp oauth
```

## Project Structure
```
Google-Authentication/
├── backend/
│   ├── core/                 # Django project settings
│   ├── manage.py            # Django management script
│   └── accounts/            # Authentication app
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
└── docs/
    └── commands.md
```

## Environment Setup

### Virtual Environment (Local Development Only)
```bash
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# or
.venv\Scripts\activate     # Windows
```

### Install Dependencies (Local Development Only)
```bash
pip install -r requirements.txt
```

## Docker Management Commands

### Build Image
```bash
docker-compose build
```

### Run Container
```bash
docker-compose up
```

### Stop and Remove Containers
```bash
docker-compose down -v
```

### View Running Containers
```bash
docker-compose ps
```

### Access Container Shell
```bash
docker-compose exec backend bash
```

## Common Issues & Solutions

### Migration Issues
```bash
# Reset migrations
docker-compose exec backend python manage.py migrate --fake-initial
docker-compose exec backend python manage.py migrate --run-syncdb
```

### Static Files Issues
```bash
# Clear static files
docker-compose exec backend python manage.py collectstatic --clear --noinput
```

### Docker Issues
```bash
# Rebuild without cache
docker-compose build --no-cache
docker-compose up --force-recreate

# Remove all containers and images
docker system prune -a
docker-compose down -v
docker-compose up --build
```

## Development Workflow

### First Time Setup
```bash
1. Create Django project locally: cd backend && django-admin startproject core .
2. Add to requirements.txt if needed
3. Run: docker-compose up --build
4. Create superuser: docker-compose exec backend python manage.py createsuperuser
```

### Daily Development
```bash
1. Start: docker-compose up -d
2. Make changes to code
3. Restart: docker-compose restart backend
4. View logs: docker-compose logs -f backend
```
