import xlwt

# file = open('/Users/aaa/Desktop/text.txt', 'w')
# file.write('Hello World')

# style0 = xlwt.easyxf('font: name Times New Roman, color-index red, bold on',
#     num_format_str='#,##0.00')
# style1 = xlwt.easyxf(num_format_str='D-MMM-YY')



# ws.write(0, 0, 1234.56, style0)
# ws.write(1, 0, datetime.now(), style1)
# ws.write(2, 0, 1)
# ws.write(2, 1, 1)
wb = xlwt.Workbook()
ws = wb.add_sheet('A Test Sheet')
ws.write(0, 0, "eee")

wb.save('example.xls')