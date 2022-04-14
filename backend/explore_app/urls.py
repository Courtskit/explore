from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("trip", TripViewSet, basename="trip")
router.register("trip-destination", TripDestinationViewSet, basename="trip-destination")


urlpatterns = [
    path('', include(router.urls)),
]

