from django.db.models import TextChoices

class Provider(TextChoices):
    EMAIL = "email", "Email"
    GOOGLE = "google", "Google"
 