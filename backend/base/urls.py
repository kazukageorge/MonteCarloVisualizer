from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.getRoutes, name='routes'),
    path('MonteCarlo/', views.getRoutes, name='routes'),
    path('test/', views.getTest, name='routes'),

]