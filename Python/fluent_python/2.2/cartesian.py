#-*-coding:utf-8 -*-

# 笛卡尔积
colors = ['black', 'white']
sizes = ['S', 'M', 'L']

tshirts = [(color, size) for color in colors for size in sizes]
print(tshirts)
tshirts_02 = [(color, size) for size in sizes for color in colors]
print(tshirts_02)

for tshirt in ('%s %s' % (c, s) for c in colors for s in sizes):
    print(tshirt)