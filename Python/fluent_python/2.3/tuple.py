#-*-coding:utf-8 -*-
import os
from collections import namedtuple

lax_coordinates = (33.9425, -118.408056)
latitude, longitude = lax_coordinates
print('%d, %d' % (latitude, longitude))

city, year, pop, chg, area = ('Tokyo', 2003, 32450, 0.66, 8014)
print('city: %s, year: %d' % (city, year))

traveler_ids = [('USA', '31195855'), ('BRA', 'CE342567'), ('ESP', 'XD205856')]
for passport in sorted(traveler_ids):
    print('%s/%s' % passport)
for country, _ in traveler_ids:
    print(country)

# _占位符可以对元组里不感兴趣的元素进行过滤。
_, filename = os.path.split('/home/harlan/.ssh/idrsa.pub')
print(filename)

# *占位符可以获取剩下的不确定数量的参数
a, b, *rest = range(5)
print(a, b, rest)

# 元组拆包
metro_areas = [
    ('Toyko', 'JP', 36.933, (35.689722, 139.691667)),
    ('Delhi NCR', 'IN', 21.935, (28.613889, 77.208889)),
    ('Mexico City', 'US', 20.142, (40.808611, -74.020386)),
    ('Sao Paulo', 'BR', 19.649, (-23.547778, -46.635833)),
]

print('{:15} | {:^9} | {:^9}'.format('', 'lat.', 'long.'))
fmt = '{:15} | {:9.4f} | {:9.4f}'
for name, cc, pop, (latitude, longitude) in metro_areas:
    if longitude <= 0:
        print(fmt.format(name, latitude, longitude))

# 具名元组
City = namedtuple('City', 'name country population coordinates')
tokyo = City('Tokyo', 'JP', 36.933, (35.689722, 139.691667))
print(tokyo)
print(tokyo[1])

# _fields
print(City._fields)

# _make
LatLong = namedtuple('LatLong', 'lat long')
delhi_data = ('Delhi NCR', 'IN', 21.935, LatLong(28.613889, 77.208889))
delhi = City._make(delhi_data)
print(delhi)

# _asdict
print(delhi._asdict())
for key, value in delhi._asdict().items():
    print(key + ':', value)