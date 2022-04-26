# from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import *
from .views_auth import *

class TripViewSet(ModelViewSet):
    # queryset = Trip.objects.all()
    serializer_class = TripSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)
    
    def get_queryset(self):
        return Trip.objects.filter(user=self.request.user)
        # return super().get_queryset()

class TripDestinationViewSet(ModelViewSet):
    queryset = TripDestination.objects.all()
    serializer_class = TripDestinationSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),) 
        # elif self.request.method == "PATCH":
            # return (permissions.IsAuthenticated(),)
        return (permissions.IsAdminUser(),) 