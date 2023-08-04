from urllib import request, parse
import time
import random
from ua_info import ua_list

# 定义爬虫类
class TiebaSpider(object):
    # 初始化url属性
    def __init__(self):
        self.url = 'http://tieba.baidu.com/f?{}'

    # 1. 请求函数，得到页面，传统三步
    def get_html(self, url):
        req = request.Request(url=url, headers={'User-Agent': random.choice(ua_list)})
        res = request.urlopen(req)

        # 解码获取数据
        html = res.read().decode('gbk', 'ignore')
        return html

    # 2. 解析函数，
    def parse_html(self):
        pass

    # 3. 保存文件函数
    def save_html(self, filename, html):
        with open(filename, 'w') as f:
            f.write(html)

    # 4. 入口函数
    def run(self):
        name = input('输入贴吧名')
        begin = int(input("输入起始页"))
        stop = int(input("输入终止页"))

        # +1 操作保证取到整数
        for page in range(begin, stop + 1):
            pn = (page - 1) * 50
            params = {
                'kw': name,
                'pn': str(pn)
            }
            # 拼接 url 地址
            params = parse.urlencode(params)
            url = self.url.format(params)
            # 发请求
            html = self.get_html(url)
            # 定义路径
            filename = '{}-{}页.html'.format(name, page)
            self.save_html(filename, html)
            # 提示
            print('第%d页抓取成功'%page)
            print(f'第{page}页抓取成功')

            # 每爬取一个页面随机休眠 2~3 秒
            time.sleep(random.randint(1, 3))


# 以脚本的形式启动函数
if __name__ == '__main__':
    start = time.time()
    spider = TiebaSpider()  # 实例化对象
    spider.run()    # 调用入口函数
    end = time.time()
    # 查看程序执行时间
    print('执行时间：%.2f'%(end - start))