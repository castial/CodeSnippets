class Averager():
    """
    计算移动平均值
    """

    def __init__(self):
        self.series = []

    def __call__(self, new_value):
        self.series.append(new_value)
        total = sum(self.series)
        return total/len(self.series)

if __name__ == "__main__":
    avg = Averager()
    print(avg(10))
    print(avg.series)

    print(avg(11))
    print(avg.series)

    print(avg(12))
    print(avg.series)