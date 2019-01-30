charles = {
    'name': 'Charles L. Dodgson',
    'born': 1832
}

lewis = charles

print(lewis is charles)
print(id(lewis))
print(id(charles))

charles['balance'] = 950
print(lewis)

alex = {
    'name': 'Charles L. Dodgson',
    'born': 1832,
    'balance': 950
}

print(alex == charles)
print(alex is charles)  # is比较的其实是内存中的地址，也就是id()返回的整数
