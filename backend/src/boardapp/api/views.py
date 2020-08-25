from rest_framework import viewsets
from boardapp.models import Board
from .serializers import BoardSerializer

class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer 
    queryset = Board.objects.all()
