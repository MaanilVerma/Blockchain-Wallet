from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def posts(request):
    data = [{'title': 'Post 1', 'content': 'Content of post 1'}, {'title': 'Post 2', 'content': 'Content of post 2'}]
    return Response(data)
