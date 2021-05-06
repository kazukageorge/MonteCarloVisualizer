import matplotlib.pyplot as plt
import base64
from io import BytesIO

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




'''
1. Either save the images to a directory, load them from the folder
2. Save the images to the backend server, access it by simulations/<:pk> and show the images from there


'''