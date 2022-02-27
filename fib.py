def fib(n):
    a = [0]*int(n+1)
    a[0] = 0
    a[1] = 1
    for i in range(2,n+1):
        a[i] = a[i-1]+a[i-2]

    if n%2!=0:
        x = int(n/2)
        print('for odd number :'+str(a[x]))
    else:
        x = int(n/2)
        t = (a[x]+a[x-1])/2
        print('for even number :'+str(t))
    print(a[n-1])
    print(a[:n])




if __name__ =="__main__":
    n = int(input("enter a number :"))
    fib(n)
    
