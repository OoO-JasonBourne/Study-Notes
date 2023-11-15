MySQL80 Windows常见错误

*** 1. 2023.11.15 问题描述：mysql8.0 ERROR 1045 (28000): Access denied for user ‘ODBC‘@‘localhost‘ (using password: NO)
链接：https://blog.csdn.net/m0_47505062/article/details/122342121
原因：Windows默认使用 ‘ODBC’ 用户访问数据库而不是 ‘root’
解决方案： 更改 `C:\ProgramData（默认隐藏）\MySQL\MySQL Server 8.0\my.ini`文件，在
[mysql]
no-beep
下面添加
user=root
password=??
然后将 my.ini 文件复制到 `C:\Program Files\MySQL\MySQL Server 8.0\` 文件夹下即可
