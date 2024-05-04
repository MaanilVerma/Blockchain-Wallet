from django.urls import path
from . import views


urlpatterns = [
    path('posts/', views.posts, name='posts'),
    # Add other URL patterns as needed
]