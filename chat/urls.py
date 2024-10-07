from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from . views import *
urlpatterns = [
    path('',index,name='index'),
    # path('singup', singup,name='singup'),
    path('user_login',user_login,name="user_login"),
    path('logout_view',logout_view,name="logout_view"),
    path("user_register",user_register,name="user_register"),
    path("edit_profile",edit_profile,name="edit_profile"),
    path("get_user/",get_user,name="get_user"),

   
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)