# Generated by Django 4.0.3 on 2022-04-12 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(default='None', max_length=100),
        ),
    ]