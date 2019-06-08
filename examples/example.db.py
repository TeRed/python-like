# Fibbonacci 
def fibo(size = 0):
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
fibo()


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


# empty function
def passTest():
    pass

print(passTest())



def funInFun():
    val = getSec(1)
    print(val)
    return getSec(2)

print(funInFun())
 

if 1 > 0: print("Hello"); print("Wolrd")


a = b = 10

if 1 > 10:
    pass
elif 2 > 10:
    pass
elif 20 < 30:
    print("Elif works")
else:
    pass


def matFun():
    return 4 + 5 * 2 / 10

if 2 > 10 and 1 < 2 and 4 == 5 or 4 <= 1 or not 2 >= 1 and 1 != 0 :
    print(True)
else:
    print(False)

def retNone():
    return None

# a.size()


a = [19, 20, 30]

print(a[0])

for i in [1,2,3]:
    print(i)


def selection_sort(List, N):
    for i in range(0, N-1):
        min_index = i
        for j in range(i+1, N):
            if List[j] < List[min_index]:
                min_index = j

        tmp = List[i]
        List[i] = List[min_index]
        List[min_index] = tmp

#Bierze kolejne elementy listy i przesuwa je w lewo na własciwe miejsce
def insertion_sort(List, N):
    for i in range(1, N):
        current = List[i]
        for j in range(i-1, -1, -1):
            if List[j] > current:
                tmp = List[j+1]
                List[j+1] = List[j]
                List[j] = tmp
            else:   break

def bubble_sort(List, N):
    for i in range(0, N-1):
        for j in range(0, N-i-1):
            if List[j] > List[j+1]:
                tmp = List[j+1]
                List[j+1] = List[j]
                List[j] = tmp

#Spuszcza element w doł na odpowiednie miejsce
#Yżuwany przez heap_sort
def heap(List, current, end):
    while True:
        child = current * 2 + 1
        if child > end:    break
        if child + 1 <= end and List[child+1] < List[child]:
            child += 1
        if List[current] > List[child]:
            tmp = List[current]
            List[current] = List[child]
            List[child] = tmp
            current = child
        else:   break

def heap_sort(List, N):
        
    for i in range(N-2, -1, -1):
        heap(List, i, N-1)
    
    for i in range(0, N):
        tmp = List[0]
        List[0] = List[N-i-1]
        List[N-i-1] = tmp
        heap(List, 0, N-i-2)
        
    List.reverse()
        
def quick_sort(List, left, right):
    #Liczby są losowe więc za pivota przyjmuję skrajny prawy element
    pivot = List[right]
    j = left

    #i szuka pierwszego elementu mniejszego od pivota
    #j wskazuje pierwszy element większy od pivota i zarazem pominięty przez i
    for i in range(left, right):
        if List[i] < pivot:
            tmp = List[i]
            List[i] = List[j]
            List[j] = tmp
            j += 1
     
    #Ustawienie pivota na własciwe miejsce i wywołanie rekurencyjne funckji
    List[right] = List[j]
    List[j] = pivot

    if left < j-1:
        quick_sort(List, left, j-1)
    
    if j+1 < right:
        quick_sort(List, j+1, right)


stable = [7,12,99,35,-5,7,3,5,6,3,-18]

tmp = [7,12,99,35,-5,7,3,5,6,3,-18];
selection_sort(tmp, 11)
print(tmp)

tmp = [7,12,99,35,-5,7,3,5,6,3,-18];
insertion_sort(tmp, 11)
print(tmp)

tmp = [7,12,99,35,-5,7,3,5,6,3,-18];
bubble_sort(tmp, 11)
print(tmp)

tmp = [7,12,99,35,-5,7,3,5,6,3,-18];
heap_sort(tmp, 11)
print(tmp)

tmp = [7,12,99,35,-5,7,3,5,6,3,-18];
quick_sort(tmp, 0, 10)
print(tmp)
