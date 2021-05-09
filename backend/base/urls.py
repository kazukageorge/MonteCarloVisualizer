from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.getRoutes, name='routes'),
    path('MonteCarlo/<str:pk>', views.getData, name='montecarlo'),
    path('test/', views.getTest2, name='test'),


]