import matplotlib.pyplot as plt
import base64
from io import BytesIO

from random import uniform
import matplotlib.pyplot as plt
import numpy as np
import math
import time
import copy

def get_graph():
    buffer = BytesIO()
    plt.savefig(buffer, format="png")
    buffer.seek(0)
    image_png = buffer.getvalue()
    graph = base64.b64encode(image_png)
    graph = graph.decode('utf-8')
    buffer.close()
    return graph

def get_plot(x,y):
    # plt.swtch_backend('AGG')
    plt.figure(figsize=(10,5))
    plt.plot(x,y)
    plt.savefig("figure.png")
    print('saved')

    # plt.tightlayout
    graph = get_graph()
    return graph

    # https://www.youtube.com/watch?v=jrT6NiM46jk


def getDataPoints(N, burn):

    X = [uniform(-1,1) for _ in range(N+1)]
    Y = [uniform(-1,1) for _ in range(N+1)]
    Color = ['#FF0000' if X[i]**2 + Y[i]**2 > 1 else '#45b6fe' for i in range(N+1)]
    Pi = [math.pi for _ in range(N+1)]
    X_index = [i for i in range(N+1)]

    inside = 0
    outside = 0
    approx = 0

    data = [{} for _ in range(N+1)]
    # data[0] is just a circle
    data[0]['x'] = []
    data[0]['y'] = []
    data[0]['color'] = []

    data[0]['inside'] = 0
    data[0]['outside'] = 0
    data[0]['approx_pi'] = 0

    data[0]['approx_pi_x'] = 0
    data[0]['approx_pi_y'] = 0

    approx_pi_list = [0]
    x_index = [0]


    for i in range(1,N+1):
        if X[i]**2 + Y[i]**2 > 1:
            outside += 1
        else:
            inside += 1
       
        if inside > 1 and outside > 1:
            approx = 4 * (inside / (inside + outside))

        data[i]['x'] = X[1:i+1]
        data[i]['y'] = Y[1:i+1]
        data[i]['color'] = Color[1:i+1]

        data[i]['inside'] = inside
        data[i]['outside'] = outside
        data[i]['approx_pi'] = approx

        x_index.append(i)
        approx_pi_list.append(approx)
        temp = copy.deepcopy(approx_pi_list)


        data[i]['approx_pi_x'] = x_index
        data[i]['approx_pi_y'] = temp

        approx_pi_list = temp




    

    return data[::burn]


def getCircle():
    an = np.linspace(0, 2 * np.pi, 100)
    data={'x':np.cos(an), 'y': np.sin(an), 'color': '#45b6fe'}
    
    return data


def getPi(N):
    Pi = [math.pi for _ in range(N+1)]
    x = [i  for i in range(N+1)]

    data = {}

    data['x'] = x
    data['y'] = Pi
    
    return data






'''
1. Either save the images to a directory, load them from the folder
2. Save the images to the backend server, access it by simulations/<:pk> and show the images from there


'''