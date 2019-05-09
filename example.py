# Fibbonacci 
def fibo(size):
    a = 1
    b = 1  
    
    if size > 0:
        print(a)
        if size > 1:
            print(b)

    while (size > 2):
        c = a + b
        print(c)
        a = b
        b = c
        size -= 1

fibo(7)


# Simple print
def dupaDebuger():
    print("DUPA")

dupaDebuger()


# average of 3 
def avg(a, b, c):
    return (a + b + c) / 3

print(avg(1,2,3))


#absolute
def abs(val):
    if val < 0:
        return -val
    else:
        return val

print(abs(-8))
print(abs(4))


# Min value of 3
def minOf3(a, b, c):
    min = a
    if min > b:
        min = b
    if min > c:
        min = c
    
    return min


print(minOf3(4,6,2))


# 5% per month loan
def loan(val, monthNo):
    while monthNo > 0:
        val *= 1.05
        monthNo = monthNo - 1

    print(val)

loan(100, 2)

#Area of rectangle
def recArea(a, b):
    print(a * b)


recArea(4,5)


# Transform houers to seconds
def getSec(houers):
    sec = houers * 60 * 60

    return sec

print(getSec(3))
