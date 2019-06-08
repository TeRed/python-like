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

print("Sortowanie tablicy za pomocą rónych algorytmów")
print("Sortowana tablica: ", [7,12,99,35,-5,7,3,5,6,3,-18])

print()
print("Sortowanie...")
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