from django.utils import timezone
from .models import UserProfile

class OnlineUserMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            UserProfile.objects.update_or_create(
                user=request.user,
                defaults={'last_activity': timezone.now()}
            )
        return self.get_response(request)