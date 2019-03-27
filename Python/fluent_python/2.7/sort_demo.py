fruits = ['grape', 'raspberry', 'apple', 'banana']

# sorted并不会改变原来对象
print(sorted(fruits))
print(fruits)

# reverse sorted
print(sorted(fruits, reverse=True))

# key sorted
print(sorted(fruits, key=len))

# key and reverse sorted
print(sorted(fruits, key=len, reverse=True))

# list.sort()，会改变对象原本顺序
print(fruits.sort())
print(fruits)