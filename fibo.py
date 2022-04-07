
def fibo(n):
    result= [0, 1]
    i=0
    for i in range (n):
        result.append(result[i]+result[i+1])
    return result[n]


print (fibo(6))

def fibo_2(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else: 
        return fibo_2(n-1)+ fibo_2(n-2)
    
print (fibo_2(6))    
        
        
def sort(list_to_sort):

    swapped=True
    while swapped:
        swapped=False
        for i in range(len(list_to_sort)-1):
            if list_to_sort[i+1]<list_to_sort[i]:
                element=list_to_sort[i]
                list_to_sort[i]=list_to_sort[i+1]
                list_to_sort[i+1]=element 
                swapped=True
                break       
                
    
    
    return list_to_sort


l=[0, 10, 32, 2, 100]

print(sort(l))