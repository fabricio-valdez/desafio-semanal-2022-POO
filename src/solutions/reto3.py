def es_primo (n):
    c = 0 
    for i in range(1,n+1):
        if n % i==0:
            c +=1
    if c == 2:
        print (n)
        return True
    else:
        return False

print (es_primo (int(input('Ingrese un numero para confirmar si es primo: '))))
print ('')
print ('Estos son los primeros 100 numeros primos')
for i in range(100):
    es_primo(i+1)