
from random import seed
from random import random

import matplotlib


# generate circle
def generateCircle():
	pass

def generatePoints(ax, N):
	for i in range(N):
		ax.plt(random(),random())
	plt.show()

def saveFig(ax):
	pass


# Number of simulations 
N = 100

# generate template figure
ax = plt.figure(figsize=(8, 8))

# generate random numbers 
generatePoints(ax, N)

saveFig(ax)