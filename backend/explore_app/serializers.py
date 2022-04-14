from rest_framework import serializers
from .models import *

class TripSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Trip
        fields = ["name", "description"]

class TripDestinationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = TripDestination
        fields = ["name", "order", "description", "trip", "date"]