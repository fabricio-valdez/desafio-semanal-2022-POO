from cgitb import reset
from math import pi, tan

def areaPoligono(n, l):
    area = n*l**2/(4* tan(pi/n))
    return area

n= int(input('Ingrese la cantidad de lados '))
l= int(input('Ingrese la longitud '))

resultado = areaPoligono(n,l)
print (resultado)