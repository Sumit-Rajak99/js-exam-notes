num=[1,2,3,4,5,6,7,8,1,2,3]

for i in range(len(num)):
    for j in range(i+1,len(num)):
        if num[i]==num[j]:
            print(num[i],end=" ")
            break