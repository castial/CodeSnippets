def f1(a):
    print(a)
    print(b)

b = 6

f1(3)

def f2(a):
    print(a)
    print(b)
    b = 9
f2(3)

def f3(a):
    global b
    print(a)
    print(b)
    b = 9

f3(3)
