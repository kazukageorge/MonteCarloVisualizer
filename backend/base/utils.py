import matplotlib.pyplot as plt
import base64
from io import BytesIO

from random import uniform
import matplotlib.pyplot as plt
import numpy as np
import math
import time

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


def getDataPoints(N):

    X = [uniform(-1,1) for _ in range(N)]
    Y = [uniform(-1,1) for _ in range(N)]
    Color = ['#FF0000' if X[i]**2 + Y[i]**2 > 1 else '#45b6fe' for i in range(N)]

    data = [{} for _ in range(N)]
    for i in range(N):
        data[i]['x'] = X[0:i+1]
        data[i]['y'] = Y[0:i+1]
        data[i]['color'] = Color[0:i+1]

    return data


def getCircle():
    an = np.linspace(0, 2 * np.pi, 100)
    data={'x':np.cos(an), 'y': np.sin(an), 'color': '#45b6fe'}
    
    return data






'''
1. Either save the images to a directory, load them from the folder
2. Save the images to the backend server, access it by simulations/<:pk> and show the images from there


'''