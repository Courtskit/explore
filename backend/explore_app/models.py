from django.db import models
from django.contrib.auth.models import User

class Trip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="trips", null=True, default=None)
    name = models.CharField(max_length=80)
    description = models.CharField(max_length=255, blank=True, default='')
    # destinations

    def __str__(self):
        return self.name

class TripDestination(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=255, blank=True, default='')
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name="destinations")
    date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name