from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.



####### ------------- ####
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/getRoutes/',
        '/test/',
        '/MonteCarlo/',
    ]
    return Response(routes)

@api_view(['GET'])
def getTest(request):
    return Response('Hello')

