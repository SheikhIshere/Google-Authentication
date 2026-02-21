from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import GoogleLoginView, UserRegistrationView, UserProfileView, LogoutView

urlpatterns = [
    path("google/", GoogleLoginView.as_view(), name="google-login"),
    path("register/", UserRegistrationView.as_view(), name="register"),
    path("profile/", UserProfileView.as_view(), name="profile"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
