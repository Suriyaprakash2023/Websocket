# Generated by Django 5.1 on 2024-10-05 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_alter_mychats_chats'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='last_activity',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
