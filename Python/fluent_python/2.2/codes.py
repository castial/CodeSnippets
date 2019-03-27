symbols = '123456789'
codes = []
for symbol in symbols:
    codes.append(ord(symbol))

print(codes)

codes2 = [ord(symbol) for symbol in symbols]
print(codes2)

beyond_codes = [ord(symbol) for symbol in symbols if ord(symbol) > 50]
print(beyond_codes)
beyond_codes_lambda = list(filter(lambda c: c > 50, map(ord, symbols)))
print(beyond_codes_lambda)