from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from chat.models import *
# Register your models here.


admin.site.register(MyChats)
admin.site.register(UserProfile)
