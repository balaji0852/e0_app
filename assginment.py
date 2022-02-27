#!/usr/bin/env python
# coding: utf-8

# In[40]:


data = open("Desktop\customerdata.txt",'r')
data = data.readlines()
ctmdata = []
for line in data:
    temp = []
    for eles in line.split():
        temp.append(eles[:-1])
    ctmdata.append(temp)    
ctmdata    


# In[42]:


ctmdata = ctmdata[1:-1]
ctmdata


# In[46]:


# 1.How many orders did the site receive?

print(len(ctmdata))


# In[48]:


# 2.What was the total amount of the orders?
sum = 0
for i in ctmdata:
    sum += int(i[4])
print(sum)    
        


# In[55]:


# 3.List the names of the customers who ordered once and did not order again.
dir = {}
for i in ctmdata:
    if i[2]+' '+i[3] not in dir:
        dir[i[2]+' '+i[3]] = 0
    else:
        dir[i[2]+' '+i[3]] = int(dir[i[2]+' '+i[3]]) +1
users = []
for j in dir:
    if dir[j]==0:
        users.append(j)
print(users)


# In[70]:


# 4.Get a distribution of customers who ordered exactly once, exactly twice, and so on up to 4 orders and group the rest as 5 orders and abo
cnt_stats = [0]*5
for j in dir:
    if dir[j]>=5:
        cnt_stats[4] += 1
    elif dir[j]==4:
        cnt_stats[3] += 1
    elif dir[j]==3:
        cnt_stats[2] += 1
    elif dir[j]==2:
        cnt_stats[1] += 1
    elif dir[j]==1:
        cnt_stats[0] += 1
fin = [['No. of orders','Count of customers']]
for i in range(0,5):
    fin.append([i+1,cnt_stats[i]])
fin


# In[79]:


# 5.Generate this report as a simple HTML page with a table.
# 6.Add a bar graph for the information in Q4 in your HTML report.

report = open("report.html","w")
rpt_data = '''<html>
            <head>
            <title>customer data report</title>
            <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
            <script type="text/javascript">
                      window.onload = function () {
                        var chart = new CanvasJS.Chart("stats",
                        {
                          title:{
                            text: "bar graph for the information in Q4 in your HTML report."
                          },
                          data: [
                          {
                            type: "bar",
                            dataPoints: [
                            { y: 9, label: "1"},
                            { y: 10, label: "2"},
                            { y:9, label: "3"},
                            { y: 4, label: "4"},
                            { y:3, label: "5"},

                            ]
                          },
                          ]
                        });

                    chart.render();
                    }
            </script>
            </head>
            <body>
            <div>1.Orders this site received:159</div>
            <br>
            <div>2.Total amount of the orders made in this site: 2779</div>
            <br>
            <div>3.Names of the customers who ordered once and did not order again.'Dhenuk Dhawan',
             'Salmali Mehta',
             'Atma Mathur',
             'Gaur Som',
             'Nira Khalsa',
             'Adr Dave',
             'Hasti Mangal',
             'Ballar Upadhyay',
             'Mitr Gounder',
             'Niloufe Handa',
             'Sohali Das'</div>
             <br>
            <div>4.Distribution of customers who ordered exactly once, exactly twice, and so on up to 4 orders and group the rest as 5 orders and above</div>
            <div>[['No. of orders', 'Count of customers'],
                 [1, 9],
                 [2, 10],
                 [3, 9],
                 [4, 4],
                 [5, 3]]</div>
            <br>
            <div>bar graph for the information in Q4 in your HTML report.</div>
            <div id="stats"></div>
                
            </body></html>'''
            
report.write(rpt_data)   
report.close()

