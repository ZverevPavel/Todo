from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Todo, Project
from .serializers import TodoSerializer, ProjectSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
