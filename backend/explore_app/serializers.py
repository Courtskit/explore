from rest_framework import serializers
from .models import *

class TripSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Trip
        fields = ["id", "name", "description", "destinations"]
        # fields = ["user", "name", "description", "destinations"]

    # user = serializers.SerializerMethodField(read_only=True)
    destinations = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

class TripDestinationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = TripDestination
        fields = ["name", "description", "trip", "date"]


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ["id", "username", "password"]

#     password = serializers.CharField(write_only=True)

#     def create(self, validated_data):
#         validated_data["password"] = make_password(validated_data["password"])
#         return super().create(validated_data)