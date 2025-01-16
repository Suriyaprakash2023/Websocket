import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer
import json
# from . models import MyChats
from django.contrib.auth.models import User
from time import sleep
import datetime
from channels.db import database_sync_to_async

from chat.models import MyChats



class MychatApp(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.user_group_name = f"chat_{self.scope['user'].username}"  # Unique group for the connected user
        await self.accept()
        await self.channel_layer.group_add(self.user_group_name, self.channel_name)
        print(f"Added {self.scope['user'].username} to group {self.user_group_name}")

    async def receive(self, text_data):
        data = json.loads(text_data)

        if 'typing' in data:
            friend_username = data['user']
            is_typing = data['typing']
            sender_username = self.scope['user'].username

            # Broadcast typing status to the friend's WebSocket group
            await self.channel_layer.group_send(
                f"chat_{friend_username}",
                {
                    'type': 'typing_status',
                    'user': sender_username,
                    'typing': is_typing
                }
            )
        elif 'msg' in data:
            message = data['msg']
            friend_username = data['user']
            sender_username = self.scope['user'].username

            # Send the message to the friend's WebSocket group
            await self.channel_layer.group_send(
                f"chat_{friend_username}",
                {
                    'type': 'send_message',
                    'msg': message,
                    'sender': sender_username
                }
            )

            # Optionally save the message to the database
            await self.save_chat(sender_username, friend_username, message)

    async def send_message(self, event):
        """Receive message from the WebSocket group and send it to the client."""
        message = event['msg']
        sender = event['sender']

        # Send the message to WebSocket client (the chat UI)
        await self.send(text_data=json.dumps({
            'msg': message,
            'user': sender
        }))

    async def typing_status(self, event):
        """Send typing status to WebSocket client."""
        await self.send(text_data=json.dumps({
            'typing': event['typing'],  # True or False
            'user': event['user']       # The user who is typing
        }))

    @database_sync_to_async
    def save_chat(self, sender_username, friend_username, message):
        sender = User.objects.get(username=sender_username)
        friend = User.objects.get(username=friend_username)

        # Save the chat for the sender
        chat, created = MyChats.objects.get_or_create(me=sender, frnd=friend, defaults={'chats': {}})
        chat.chats[str(datetime.datetime.now())] = {'user': sender_username, 'msg': message}
        chat.save()

        # Save the chat for the friend (reverse chat)
        reverse_chat, created = MyChats.objects.get_or_create(me=friend, frnd=sender, defaults={'chats': {}})
        reverse_chat.chats[str(datetime.datetime.now())] = {'user': sender_username, 'msg': message}
        reverse_chat.save()
    async def send_videonofication(self, event):
        await self.send(event['msg'])

    async def send_msg(self, event):
        print(event)  # Print the entire event for debugging
        message = event.get('msg')  # Extract the message from the event
        if message:
            print(message)  # Print the message for debugging
            await self.send(text_data=json.dumps({'msg': message}))
        else:
            print("Message not found in event.")

    async def chat_message(self, event):
        print(event)  # Print the entire event for debugging
        message = event.get('message')  # Extract the message from the event
        if message:
            print(message)  # Print the message for debugging
            await self.send(text_data=json.dumps({'message': message}))
        else:
            print("Message not found in event.")