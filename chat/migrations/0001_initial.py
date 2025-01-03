# Generated by Django 5.1 on 2024-10-02 00:03

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MyChats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chats', models.JSONField()),
                ('frnd', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_frnd', to=settings.AUTH_USER_MODEL)),
                ('me', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='it_me', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mobile_number', models.CharField(blank=True, max_length=10, null=True)),
                ('profile', models.ImageField(blank=True, null=True, upload_to='media/profile/')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
