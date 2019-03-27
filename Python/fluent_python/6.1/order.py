from abc import ABC, abstractmethod
from collections import namedtuple

# 定义Customer类，属性为名称、积分
Customer = namedtuple('Customer', 'name fidelity')

class LineItem:
    '''
    订单详情
    '''
    def __init__(self, product, quantity, price):
        self.product = product
        self.quantity = quantity
        self.price = price

    def total(self):
        return self.price * self.quantity

class Order:

    def __init__(self, customer, cart, promotion=None):
        self.customer = customer
        self.cart = list(cart)
        self.promotion = promotion

    def total(self):
        if not hasattr(self, '__total'):
            self.__total = sum(item.total() for item in self.cart)
        return self.__total

    def due(self):
        if self.promotion is None:
            discount = 0
        else:
            discount = self.promotion(self)
        return self.total() - discount

    def __repr__(self):
        fmt = '<Order total: {:.2f} due: {:.2f}>'
        return fmt.format(self.total(), self.due())

# # 策略类，抽象基类
# class Promotion(ABC):

#     @abstractmethod
#     def discount(self, order):
#         """返回折扣金额"""

# # 具体策略类
# class FidelityPromo(Promotion):
#     """积分为1000以上的顾客提供5%的折扣"""

#     def discount(self, order):
#         return order.total() * .05 if order.customer.fidelity >= 1000 else 0

# # 具体策略类
# class BulkItemPromo(Promotion):
#     """单个商品为20个或者以上的时候提供10%的折扣"""

#     def discount(self, order):
#         discount = 0
#         for item in order.cart:
#             if item.quantity >= 20:
#                 discount += item.total() * .1
#         return discount

# # 具体策略类
# class LargeOrderPromo(Promotion):
#     """订单中的不同商品达到10个或者以上时提供7%的折扣"""

#     def discount(self, order):
#         distinci_items = {item.product for item in order.cart}
#         if len(distinci_items) >= 10:
#             return order.total() * .07
#         return 0

# 使用函数来实现策略模式
def fidelity_promo(order):
    """积分为1000或者以上的顾客提供5%折扣"""
    return order.total() * .05 if order.customer.fidelity >= 1000 else 0

def bulk_item_promo(order):
    """单个商品为20个或者以上时提供10%的折扣"""
    discount = 0
    for item in order.cart:
        if item.quantity >= 20:
            discount += item.total() * .1
    return discount

def large_order_promo(order):
    """订单中的不同商品达到10个或者以上时提供7%的折扣"""
    distinci_items = {item.product for item in order.cart}
    if len(distinci_items) >= 10:
        return order.total() * .07
    return 0

promos = [fidelity_promo, bulk_item_promo, large_order_promo]
def best_promo(order):
    """选择可用的最佳折扣"""
    return max(promo(order) for promo in promos)
