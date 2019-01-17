l = [1, 2, 3]

# 获取对象内存地址
print(id(l))

# *=
l *= 2
print(l)
print(id(l))

t = (1, 2, 3)
print(id(t))

t *= 2
print(t)
print(id(t))

t2 = (1, 2, [30, 40])
t2[2] += [50, 60]
print(t2)