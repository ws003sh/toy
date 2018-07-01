import xlwt
import xlrd
from xlutils.copy import copy
import time
import requests
import random
from bs4 import BeautifulSoup

# 清理结果
# [script.extract() for script in soup.findAll('script')]
# [style.extract() for style in soup.findAll('style')]
# [footer.extract() for footer in soup.select('#footer')]
# [head.extract() for head in soup.select('head')]
# [link.extract() for link in soup.select('link')]

# [script.extract() for script in soup.findAll('script')]
# block = soup.select(".subject-list")

# file = open('/Users/aaa/Desktop/text.txt', 'w')
# file.write(str(rating))
# file.write(str(title))
# file.write(str(pubInfo))
# file.close()

# 自定义http 请求头部
# 使用get 获得请求
# index = 0
def sss():
    m = 0
    wait = random.randint(0, 9)
    while m < 48:
        chooseUrl(m)
        print("Start : %s" % time.ctime())
        time.sleep(wait)
        m += 1

def chooseUrl(m):
    num = 20
    str_num = str(num*m)
    url = 'https://book.douban.com/tag/%E5%B0%8F%E8%AF%B4?start='+str_num+'&type=T'
    headers = {'user-agent': 'Mozilla/5.0 AppleWebKit/537.36 Chrome/67.0.3396.99 Safari/537.36'}
    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")
    [script.extract() for script in soup.findAll('script')]
    analysis(soup,m)

    # 分析结果
def analysis(soup,m):
    title = soup.select("h2 a")
    pubInfo = soup.select(".pub")
    rating = soup.select(".rating_nums")
    people = soup.select(".pl")

    # excel表格
    if m == 0:
        wb = xlwt.Workbook()
        ws = wb.add_sheet('小说')
        # 生成表头
        row0 = [u'编号', u'名称', u'评分', u'评价人数', u'出版信息']

        for i in range(0, len(row0)):
            ws.write(0, i, row0[i])
            # 写入信息
        for t in range(0, len(title)):
            ws.write(t + 1, 0, t + 1)
            ws.write(t + 1, 1, title[t]["title"])
            ws.write(t + 1, 2, people[t].contents[0])
            ws.write(t + 1, 3, rating[t].contents[0])
            ws.write(t + 1, 4, pubInfo[t].contents[0])
            t += 1

        wb.save('example.xls')
        k = str(m)
        print('Done No.' + k)
    else:
        filename = r'example.xls'
        workbook = xlrd.open_workbook(filename, formatting_info=True)
        sheet = workbook.sheet_by_index(0)
        rowNum = sheet.nrows
        newbook = copy(workbook)
        newsheet = newbook.get_sheet(0)

        # 在末尾增加新内容
        for t in range(0, len(title)):
            newsheet.write(rowNum + t, 0, rowNum + t + 1)
            newsheet.write(rowNum + t, 1, title[t]["title"])
            newsheet.write(rowNum + t, 2, people[t].contents[0])
            newsheet.write(rowNum + t, 3, rating[t].contents[0])
            newsheet.write(rowNum + t, 4, pubInfo[t].contents[0])
            t += 1

        # 覆盖保存
        newbook.save(filename)

        k = str(m)
        print('Done No.' + k)


if __name__ == '__main__':
     sss()