import requests
import os
import re
from urllib import parse

class BaiduSpider(object):
    def __init__(self):
        self.url = 'https://image.baidu.com/search/flip?tn=baiduimage&word={}'
        self.headers = {'User-Agent':'Mozilla/4.0'}

    # 获取图片
    def get_html(self, url, word):
        res = requests.get(url=url, headers=self.headers)
        res.encoding = 'utf-8'
        html = res.text
        # print(html)
        # pattern = re.compile(r'<a class="imgitem-title.*?href="(.*?)".*?</a>', re.S)
        pattern = re.compile('"hoverURL":"(.*?)"', re.S)
        img_url_list = pattern.findall(html)

        # 创建目录用于保存图片
        directory = 'E:/E/{}'.format(word)
        if not os.path.exists(directory):
            os.makedirs(directory)
        for i in range(len(img_url_list)):
            self.save_image(img_url_list[i], directory + '/' + word + '_' + str(i + 1) + '.jpg')
    # 下载图片
    def save_image(self, img_url, filename):
        html = requests.get(url=img_url, headers=self.headers).content
        with open(filename, 'wb') as f:
            f.write(html)
        print(f'{filename},下载成功')
    # 执行程序
    def run(self):
        word = input("你想要谁的图片：")
        word_parse = parse.quote(word)
        url = self.url.format(word_parse)
        print(url)
        self.get_html(url, word)

if __name__ == '__main__':
    spider = BaiduSpider()
    spider.run()