from bs4 import BeautifulSoup
import requests
import sys
import re

class spider(object):

    def __init__(self):
        self.server = 'https://www.biqukan.com'
        self.target = 'https://www.biqukan.com/1_1094/'
        self.names = []
        self.urls = []
        self.nums = []


    def get_download_url(self):
        req = requests.get(url = self.target)

        div_list = BeautifulSoup(req.text, 'html.parser').find_all('div', class_ = 'listmain')
        a_list = BeautifulSoup(str(div_list[0]), 'html.parser').find_all('a')

        self.nums = len(a_list)
        for each in a_list:
            self.names.append(each.string)
            self.urls.append(self.server + each.get('href'))

    def get_content(self, target):
        req = requests.get(url = target)
        text = BeautifulSoup(req.text, 'html.parser').find_all('div', class_ = 'showtxt')
        
        if len(text) > 0:
            text = re.sub("[A-Za-z0-9\!\%\[\]\,\。]", "", text[0].text)
            return text
        else:
            return ""

    def write_file(self, name, path, text):
        write_flag = True
        with open(path, 'a', encoding='utf-8') as f:
            f.write(name + '\n')
            f.writelines(text)
            f.write('\n\n')
            

if __name__ == "__main__":
    s = spider()
    s.get_download_url()
    print('开始下载：')
    for i in range(s.nums):
        print(s.names[i] + ' --> ' + s.urls[i])
        s.write_file(s.names[i], 'biqukan_book.txt', s.get_content(s.urls[i]))
        sys.stdout.write('已下载：%.3f%%' % (i / s.nums * 100) + '\r')
        sys.stdout.flush()

    print('下载完成') 