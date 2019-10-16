def count():
    funcs = []
    for i in [1, 2, 3]:
        def f():
            print(str(i))
            return i
        funcs.append(f)
    return funcs
f1, f2, f3 = count()
print(f1())
print(f2())
print(f3())


print f1.__closure__