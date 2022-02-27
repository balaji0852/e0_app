
def data(lists):
    dic,data,f = {},[],0
    for i in range(0,len(lists)):
        for j in range(i+1,len(lists)):
            if  lists[i]-lists[j]<0:
                dic[str(-(lists[i]-lists[j]))] = str(str(lists[i])+' '+str(lists[j]))
                data.append(-(lists[i]-lists[j]))

            else:
                dic[str(lists[i]-lists[j])] = str(str(lists[i])+' '+str(lists[j]))
                data.append(lists[i]-lists[j])
    for k in range(0,len(data)):
        for l in range(k,len(data)-1):
            if data[l]>data[l+1]:
                data[l],data[l+1] = data[l+1],data[l]
    strg = ""
    for m in data:
        strg += str(dic[str(m)])+" "
    print(strg)
    print(len(data))
            
            


if __name__=="__main__":
    d = [23,45,56,77,21,34,67,88]
    data(d)
    
