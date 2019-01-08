import collections
from random import choice

Card = collections.namedtuple('Card', ['rank', 'suit'])

class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits
                                        for rank in self.ranks]

    def __len__(self):
        return len(self._cards)

    def __getitem__(self, position):
        return self._cards[position]

# 定义一张扑克
beer_card = Card('7', 'dismonds')
print(beer_card)

# 一盒扑克
deck = FrenchDeck()
print(len(deck))

# 从一盒扑克中拿到第一张牌
print(deck[0])

# 从一盒扑克中拿到最后一张牌
print(deck[-1])

# 随机抽取一张牌
print(choice(deck))

# 查看最上面的3张牌
print(deck[:3])

# 查看牌面是A的牌
print(deck[12::13])

# 对扑克进行升序排序
suit_values = dict(spades=3, hearts=2, diamonds=1, clubs=0)
def spades_high(card):
    rank_value = FrenchDeck.ranks.index(card.rank)
    return rank_value * len(suit_values) + suit_values[card.suit]

for card in sorted(deck, key=spades_high):
    print(card)