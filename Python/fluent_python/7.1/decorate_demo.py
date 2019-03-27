
def deco(func):
    """
    定义一个函数返回，查看装饰器效果
    """
    def inner():
        print('running inner()')
    return inner

@deco
def target():
    print('running target()')

if __name__ == "__main__":
    target()
    print(target)