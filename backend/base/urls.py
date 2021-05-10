from django.urls import path
from . import views

urlpatterns = [
    path('MonteCarlo/<str:pk>', views.getData, name='montecarlo'),
]