from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.getRoutes, name='routes'),
    path('MonteCarlo/', views.getRoutes, name='montecarlo'),
    # path('test/', views.getTest, name='test'),
    path('test/', views.getTest2, name='test'),


]