a = [10, 20]
b = [a, 30]
a.append(b)
print(a)

import copy

c = copy.deepcopy(a)
print(c)