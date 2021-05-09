from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from random import uniform
from .utils import getDataPoints, getCircle


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

    data = {'points': dataPoints, 'circle': dataCircle}

    print(data)

    return Response(data)



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

    t = time.time()

    # Number of simulations
    N = 100
    frame_rate = 2

    # generate template figure
    fig, (ax, ax1) = plt.subplots(1, 2, figsize=(10, 5))
    ax.set_xlim([-1.05, 1.05])
    ax.set_ylim([-1.05, 1.05])

    ax1.set_xlim([0, N])
    ax1.set_ylim([2, 4])


    # draw circle
    fig, ax = generateCircle(fig, ax)

    # generate random numbers
    fig, ax, inside, outside = generatePoints(fig, ax, ax1, N, frame_rate)



    an = np.linspace(0, 2 * np.pi, 100)
    x = np.cos(an)
    y = np.sin(an)
    plt.plot(x,y)
    plt.savefig("figure.png")
    # print('saved')
    print("\n\n\n")
    elapsed = time.time() - t
    print("Time {} sec".format(elapsed) )
    print("\n\n\n")



    return Response('Success')


# generate a unit circle
def generateCircle(fig, ax):
    an = np.linspace(0, 2 * np.pi, 100)

    ax.plot(np.cos(an), np.sin(an), color='blue')
    ax.set_aspect('equal', 'box')
    fig.tight_layout()
    return fig, ax


def generatePoints(fig, ax, ax1, N, frame_rate):
    inside = 0
    outside = 0
    counter = 0

    txt = ''

    pi_traces = []
    pi_gt = []
    for i in range(N):

        # Plot ax
        x = uniform(-1, 1)
        y = uniform(-1, 1)
        if x ** 2 + y ** 2 > 1:
            color_str = 'red'
            outside += 1
        else:
            color_str = 'blue'
            inside += 1
        ax.scatter(x, y, color=color_str, alpha=0.5, label='', s=20)


        # plot ax1

        if outside == 0:
            pi_traces.append(None)
        else:
            pi_traces.append(4*inside / (outside + inside))
        pi_gt.append(math.pi)
        ax1.plot(pi_gt, linestyle='dashed', color='black')
        ax1.plot(pi_traces, color='blue')

        pi_approx = 4 * inside / (outside + inside)
        # str = 'N_inside={}\nrN_outside={}\nApprpximated /pi={:%.2f}'.format(inside, outside,pi_approx)
        str = 'Approx. pi={:.5f}\n\nN_iteration={}\nN_inside={}\nN_outside={}\n'.format(pi_approx,i,inside,outside)
        if txt:
            txt.set_visible(False)
        txt = ax1.text(0.65, 0.01, str,
             horizontalalignment='left',
             verticalalignment='bottom',
             transform=ax1.transAxes)
        # ax1.legend()

        if (i+1) % frame_rate == 1 and i != 0:
            plt.pause(0.01)
            str_fig = 'figure_{}.png'.format(counter)
            counter += 1
            plt.savefig(str_fig)

    return fig, ax, inside, outside


def getTest2(request):
    return render(request, 'main.html', {})