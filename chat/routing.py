from django.urls import path,re_path
from chat import consumers


websocket_urlpatterns =[
  re_path('ws/wsc/',consumers.MychatApp.as_asgi())
]