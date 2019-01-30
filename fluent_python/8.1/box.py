a = [1, 2, 3]
b = a
a.append(4)
print(a)
print(b)
print(id(a))    # 打印a的内存地址
print(id(b))    # 打印b的内存地址