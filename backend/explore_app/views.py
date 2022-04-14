from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *

class TripViewSet(ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

class TripDestinationViewSet(ModelViewSet):
    queryset = TripDestination.objects.all()
    serializer_class = TripDestinationSerializer