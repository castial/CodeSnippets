from array import array
from random import random

floats = array('d', (random() for i in range(10**7)))
print(floats[-1])

fp = open('floats.bin', 'wb')
floats.tofile(fp)
fp.close

float2 = array('d')
fp = open('floats.bin', 'rb')
float2.fromfile(fp, 10**7)
fp.close

print(float2[-1])
print(float2 == floats)