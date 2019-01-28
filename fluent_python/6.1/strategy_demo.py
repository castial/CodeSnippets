from order import Customer, LineItem, Order, fidelity_promo, bulk_item_promo, large_order_promo, best_promo

if __name__ == "__main__":

    joe = Customer('John Doe', 0)
    ann = Customer('Ann Smith', 1100)
    
    cart = [
        LineItem('banana', 4, .5),
        LineItem('apple', 10, 1.5),
        LineItem('watermellon', 5, 5.0)
    ]

    banana_cart = [
        LineItem('banana', 30, .5),
        LineItem('apple', 10, 1.5)
    ]

    long_cart = [
        LineItem(str(item_code), 1, 1.0) for item_code in range(10)
    ]

    # joe_order = Order(joe, cart, FidelityPromo())
    # print(joe_order)

    # ann_order = Order(ann, cart, FidelityPromo())
    # print(ann_order)


    # joe_order = Order(joe, banana_cart, BulkItemPromo())
    # print(joe_order)

    # joe_order = Order(joe, long_cart, LargeOrderPromo())
    # print(joe_order)

    # joe_order = Order(joe, cart, LargeOrderPromo())
    # print(joe_order)
    joe_order = Order(ann, cart, fidelity_promo)
    print(joe_order)

    joe_order = Order(joe, banana_cart, best_promo)
    print(joe_order)