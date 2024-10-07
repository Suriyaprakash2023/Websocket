from django.db import models
from django.utils import timezone
from datetime import timedelta
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name="profile", on_delete=models.CASCADE)
    mobile_number = models.CharField(max_length=10, blank=True, null=True)
    profile = models.ImageField(upload_to='media/profile/', blank=True, null=True)
    last_activity = models.DateTimeField(auto_now=True, blank=True, null=True)

    def is_online(self, minutes=5):
        threshold_time = timezone.now() - timedelta(minutes=minutes)
        return self.last_activity >= threshold_time

class MyChats(models.Model):
    me = models.ForeignKey(User, on_delete=models.CASCADE, related_name="it_me")
    frnd = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_frnd")
    chats = models.JSONField(default=dict)
