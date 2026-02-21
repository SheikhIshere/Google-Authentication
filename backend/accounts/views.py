from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import GoogleAuthSerializer
from core.utils.google import verify_google_token
from drf_spectacular.utils import extend_schema

User = get_user_model()

@extend_schema(tags=["Authentication"])
class GoogleLoginView(APIView):
    """
    Accepts front-end Google ID token (id_token) and returns SimpleJWT tokens.
    Frontend MUST send the id_token obtained via Google Sign-In JS SDK:
      { "token": "<ID_TOKEN>" }
    """

    def post(self, request):
        serializer = GoogleAuthSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        token = serializer.validated_data["token"]
        idinfo = verify_google_token(token)
        if not idinfo:
            return Response({"detail": "Invalid Google token"}, status=status.HTTP_400_BAD_REQUEST)

        # required fields
        email = idinfo.get("email")
        if not email:
            return Response({"detail": "Google account has no email"}, status=status.HTTP_400_BAD_REQUEST)

        name = idinfo.get("name", "")
        picture = idinfo.get("picture")
        email_verified = idinfo.get("email_verified", False)

        # create or update user
        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                "username": email.split("@")[0],
                "first_name": name.split(" ")[0] if name else "",
                "last_name": " ".join(name.split(" ")[1:]) if len(name.split(" ")) > 1 else "",
                "avatar": picture or "",
                "provider": "google",
                "email_verified": bool(email_verified),
            },
        )

        # if user exists but provider is not google, you might want to handle linking
        if not created:
            updated = False
            if user.provider != "google":
                user.provider = "google"
                updated = True
            if picture and user.avatar != picture:
                user.avatar = picture
                updated = True
            if email_verified and not user.email_verified:
                user.email_verified = True
                updated = True
            if updated:
                user.save(update_fields=["provider", "avatar", "email_verified"])

        # issue tokens (SimpleJWT)
        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": {
                "id": user.id,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "avatar": user.avatar,
            }
        })


