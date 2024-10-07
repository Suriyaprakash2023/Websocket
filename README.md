# Django WebSocket Chat Application

Welcome to the **Django WebSocket Chat Application**! This project is designed for seamless live chatting with friends using Django Channels and WebSockets. Below you will find step-by-step instructions on setting up and using the application.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Real-time Chat:** Experience instant messaging with your friends.
- **User Authentication:** Secure login and registration.
- **Group Chat:** Create chat groups with multiple friends.
- **Responsive Design:** Mobile-friendly interface.

---

## Technologies Used

- **Django:** Web framework for rapid development.
- **Django Channels:** Extends Django to handle WebSockets.
- **Redis:** In-memory data structure store used as a message broker.
- **HTML/CSS/JavaScript:** For front-end development.

---

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

  
   git clone https://github.com/yourusername/chat-app.git

2. **Install the required packages from requirements.txt:**

  pip install -r requirements.txt

3. **Set up Redis:**

 Ensure Redis is installed and running on your system. You can follow the Redis installation guide for your specific operating system.


4. **Run the migrations:**

  python manage.py migrate

5. **Create a superuser (optional):**
    
    python manage.py createsuperuser

6. **Install Django Channels and Daphne**

    pip install channels daphne

7. **Configure Daphne & Django Channels:**

    INSTALLED_APPS = [
    ...
    'daphne',  # must set 1st 
    'channels',
    ...
    ]


    CHANNEL_LAYERS={
        "default":{
          "BACKEND":"channels_redis.core.RedisChannelLayer",
          "CONFIG":{
            "hosts":[("redis://127.0.0.1:6379")],
          },
        },
      }


8. **ASGI Setup**

  First, create or modify the asgi.py file in your project’s main directory (where settings.py is located). This file will handle the WebSocket connections using Django Channels.
  
  
    os.environ.setdefault('DJANGO_SETTINGS_MODULE','WebSocket.settings')

    application = ProtocolTypeRouter({
      'http':get_asgi_application(),
      'websocket': AuthMiddlewareStack(
        URLRouter(
        routing.websocket_urlpatterns

        )
      )
    })

9. **Step-by-Step Setup for consumers.py  &  routing.py**

    
    from chat.models import MyChats

    class MychatApp(AsyncJsonWebsocketConsumer):
        async def connect(self):
            self.user_group_name = f"chat_{self.scope['user'].username}"  # Unique group for the connected user
            await self.accept() 
            ...........
            ......


    from your_app.consumers import ChatConsumer  # Import your consumer

    websocket_urlpatterns = [
         re_path('ws/wsc/',consumers.MychatApp.as_asgi()),  # Route WebSocket connections to the consumer
    ]

10. **Run the Server**  

    python manage.py runserver   #only run the default 8000 port only 