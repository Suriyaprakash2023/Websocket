from django.http import JsonResponse
from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt

from chat.models import MyChats
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

from .models import UserProfile, MyChats

@login_required
def index(request):
    frnd_name = request.GET.get('user',None)
    # frnd_name ='g'
    frnds = User.objects.exclude(pk=request.user.id)
    mychats_data = None
    frnd_ = None
    if frnd_name:
        if User.objects.filter(username=frnd_name).exists() and MyChats.objects.filter(me=request.user,frnd=User.objects.get(username=frnd_name)).exists():
            frnd_ = User.objects.get(username=frnd_name)
            mychats_data = MyChats.objects.get(me=request.user,frnd=frnd_).chats

    return render(request,'index-main.html',{'my':mychats_data,'chats': mychats_data,'frnds':frnds,"frnd_name":frnd_})

import json
@csrf_exempt  # Temporarily disable CSRF protection for simplicity (not recommended for production)
def get_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')

        try:
            frnd = User.objects.get(username=username)
            user_profile = UserProfile.objects.get(user=frnd)
            # Serialize the user data as needed
            user_data = {
                'username': frnd.username,
                'email': frnd.email,
                'mobile_number': user_profile.mobile_number,
                'profile_pic': 'http://127.0.0.1:8000'+user_profile.profile.url if user_profile.profile else None
            }
            print(user_data['profile_pic'],"user_data")
            return JsonResponse(user_data)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    return JsonResponse({'error': 'Invalid request method'}, status=400)



def user_register(request):
    if request.method == 'POST':
        email = request.POST.get("email")
        password = request.POST.get("password")
        username = request.POST.get("username")
        mobile_number = request.POST.get("mobile_number")

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username is already taken. Please try again.")
            return redirect('user_register')
        elif User.objects.filter(email=email).exists():
            messages.error(request, "Email is already taken. Please try again.")
            return redirect('user_register')
        elif UserProfile.objects.filter(mobile_number=mobile_number).exists():
            messages.error(request, "Mobile number is already taken. Please try again.")
            return redirect('user_register')
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            user_profile = UserProfile.objects.create(user=user, mobile_number=mobile_number)
            user_profile.save()
            user.save()
            messages.success(request, f"Account created for {username}..!")
            return redirect('user_login')

    return render(request, 'signup.html')


def user_login(request):
    if request.method == 'POST':
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(request, username=email, password=password)
        print(user,"user")
        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome, {request.user}! You are now logged in.")
            return redirect('index')
        else:
            messages.error(request, "Invalid username or password. Please try again.")
            return render(request, 'login.html')

    return render(request, 'login.html')


@login_required
def edit_profile(request):
    print(request.user,"dgfdgf")
    if request.method == 'POST':
        email = request.POST.get("email")
        mobile_number = request.POST.get("mobile_number")
        profile_pic = request.FILES.get("profile_pic")
        username = request.POST.get("username")
        user_profile = User.objects.get(username=request.user)

        user_profile.username = username
        user_profile.save()

        profile = UserProfile.objects.get(user=user_profile)
        profile.profile = profile_pic
        profile.mobile_number = mobile_number
        profile.save()

        messages.success(request,"Account Updated Successfully..!")
        return redirect('index')

    return render(request, 'index.html')


def logout_view(request):
    logout(request)
    return redirect('user_login')