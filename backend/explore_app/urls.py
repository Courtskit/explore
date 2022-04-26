from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views_auth import handle_login
from .views import *

router = DefaultRouter()
router.register("trip", TripViewSet, basename="trip")
router.register("trip-destination", TripDestinationViewSet, basename="trip-destination")
router.register("users", UserViewSet, basename="user")



urlpatterns = [
    path('', include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
]

