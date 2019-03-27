l = [10, 20, 30 ,40, 50, 60]
print(l[:2])
print(l[2:])

# s[a:b:c]，对s在a和b之前以c为间隔取值
str = 'bicycle'
print(str[::3])
print(str[::-1])
print(str[::-2])

# 切片操作
l2 = list(range(10))
print(l2)
l2[2:5] = [20, 30]
print(l2)
del l2[5:7]
print(l2)
l2[3::2] = [11, 22]
print(l2)
l2[2:5] = [100]
print(l2)

# 复制序列
l3 = [1, 2, 3]
print(l3 * 5)