from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from random import uniform
from .utils import getDataPoints, getCircle, getPi


from random import uniform
import matplotlib.pyplot as plt
import numpy as np
import math
import time
import re


# Create your views here.

@api_view(['GET'])
def getData(request, pk):

    args = re.findall('=[0-9]+', str(pk))
    N = int(args[0][1:])
    burn = int(args[1][1:])

    dataPoints = getDataPoints(N, burn)
    dataCircle = getCircle()
    dataPi = getPi(N)

    data = {'points': dataPoints, 'circle': dataCircle, 'Pi': dataPi}

    # print(data['points'])

    return Response(data)


