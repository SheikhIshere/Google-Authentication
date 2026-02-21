FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Copy requirements first (Docker layer caching)
COPY ./requirements.txt /requirements.txt

# Install OS dependencies + Python packages
RUN apt-get update && \
    pip install --upgrade pip && \
    pip install -r /requirements.txt && \
    rm -rf /var/lib/apt/lists/*

# Copy .env file
COPY .env .

# Copy project files
COPY ./backend /backend

WORKDIR /backend

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]