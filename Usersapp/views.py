from rest_framework import viewsets
from rest_framework import mixins
from .models import User
from .serializers import UserModelSerializer


class UserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
