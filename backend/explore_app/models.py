from django.db import models
from django.contrib.auth.models import User


class Trip(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="trips")
    name = models.CharField(max_length=80)
    description = models.CharField(max_length=255)
    # destinations


    def __str__(self):
        return self.name


class TripDestination(models.Model):
    name = models.CharField(max_length=100)
    order = models.IntegerField()
    description = models.CharField(max_length=255)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name="destinations")
    date = models.DateField()

    def __str__(self):
        return self.name