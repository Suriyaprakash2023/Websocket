import os
import django

# Set the default settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WebSocket.settings')

# Setup Django before importing anything else
django.setup()

from django.core.asgi import get_asgi_application
from channels.routing import ChannelNameRouter, URLRouter, ApplicationMapping
from channels.auth import AuthMiddlewareStack
from chat import routing

# Get the Django ASGI application
django_application = get_asgi_application()

# Configure your WebSocket routing
application = ApplicationMapping(
  routes={
    "http": django_application,
    "websocket": AuthMiddlewareStack(
      URLRouter(routing.websocket_urlpatterns)
    ),
  }
)