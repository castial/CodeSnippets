fruits = [
        'strawberry',
        'fig',
        'apple',
        'cherry',
        'raspberry',
        'banana'
    ]

# 传递一个len方法来进行排序
print(sorted(fruits, key=len))

# 反向拼写字符串
def reverse(word):
    return word[::-1]

print(reverse('testing'))
print(sorted(fruits, key=reverse))