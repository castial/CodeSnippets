import random

class BingGo:
    
    def __init__(self, items):
        self._items = list(items)
        random.shuffle(self._items)

    def pick(self):
        try:
            return self._items.pop()
        except IndexError:
            raise LookupError('pick from empty BingGo')

    def __call__(self):
        return self.pick()

if __name__ == "__main__":
    binggo = BingGo(range(3))
    print(binggo.pick())
    print(binggo())
    print(callable(binggo))