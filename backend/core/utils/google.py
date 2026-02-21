from google.oauth2 import id_token
from google.auth.transport import requests
from django.conf import settings

def verify_google_token(token: str):
    """
    Verifies the Google ID token and returns the token payload (idinfo) on success.
    Returns None on any failure.
    """
    try:
        idinfo = id_token.verify_oauth2_token(
            token,
            requests.Request(),
            settings.GOOGLE_CLIENT_ID,
        )

        # Optional extra checks (issuer)
        if idinfo.get("iss") not in ("accounts.google.com", "https://accounts.google.com"):
            return None

        return idinfo
    except Exception:
        # In production you may want to log the exception (don't log the token)
        return None