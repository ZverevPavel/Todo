from django.db import models
from Usersapp.models import User


class Project(models.Model):
    title = models.CharField(max_length=128)
    repo_link = models.URLFueld()
    users = models.ManyToManyField(User)


class Todo(models.Model):
    text = models.TextField()
    create_at = models.DateTimeField()
    update_at = models.DateTimeField()
    active = models.BooleanField()
    user = models.ManyToManyField(User)
    project = models.OneToOneField(Project)
