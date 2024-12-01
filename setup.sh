#!/bin/bash

#exit on error
set -o errexit

# Install dependencies
pip install -r requirements.txt

# Run migrations to set up the database
 python manage.py collectstatic --noinput

daphne -b 0.0.0.0 -p $PORT WebSocket.asgi:application
#python manage.py makemigrations --noinput
python manage.py migrate
#if [[ $CREATE_SUPERUSER ]];
#then
#  python manage.py createsuperuser --no-input --email "$DJANGO_SUPERUSER_EMAIL"
# Collect static files (optional, remove if not using static files)
# python manage.py collectstatic --noinput

# You do not need to start the Django server with `runserver` on Vercel.
