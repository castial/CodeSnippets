def f(a, b):
    a += b
    return a

# 数字没变化
x = 1
y = 2
print(f(x, y))
print(x, y)

# 列表参数发生变化
a = [1, 2]
b = [3, 4]
print(f(a, b))
print(a, b)

# 元组参数没变化
t = (10, 20)
u = (30, 40)
print(f(t, u))
print(t, u)