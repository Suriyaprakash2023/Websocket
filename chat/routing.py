from django.urls import path
from chat import consumers


websocket_urlpatterns =[
  path('ws/wsc/',consumers.MychatApp.as_asgi())
]