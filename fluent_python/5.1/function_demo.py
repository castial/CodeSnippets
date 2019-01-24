
# 阶乘函数
def factorial(n):
    '''return n!'''
    return 1 if n < 2 else n * factorial(n-1)

print(factorial(42))
print(factorial.__doc__)
print(type(factorial))
print(factorial)

fact = factorial
print(fact)
print(fact(5))
print(list(map(factorial, range(11))))