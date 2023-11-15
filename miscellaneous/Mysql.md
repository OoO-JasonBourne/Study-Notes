MySQL80 Windows常见错误

### 1. 问题描述： mysql8.0 ERROR 1045 (28000): Access denied for user ‘ODBC‘@‘localhost‘ (using password: NO)
**链接：** <https://blog.csdn.net/m0_47505062/article/details/122342121><br>
**原因：** Windows默认使用 ‘ODBC’ 用户访问数据库而不是 ‘root’用户<br>
**解决方案：** 更改 `C:\ProgramData（默认隐藏）\MySQL\MySQL Server 8.0\my.ini`文件，在
```
[mysql]
no-beep
```
下面添加
```  
user=root 
password=?? 
```
然后将 my.ini 文件复制到 `C:\Program Files\MySQL\MySQL Server 8.0\` 文件夹下即可


### 2. 问题描述： 2059 - Authentication plugin ‘caching_sha2_password’ cannot be loaded
**链接：** <https://blog.csdn.net/David_Aulier/article/details/105893256><br>
**原因：** 目前已有的客户端连接软件不支持Mysql8新增加的加密方式caching_sha2_password，所以我们需要修改用户的加密方式，将其改为老的加密验证方式<br>
**解决方案：** 以管理员身份打开命令行输入
```
mysql -u root -p;
use mysql;
select user, plugin from user where user=‘root’;
```
查看当前用户的加密方式为：caching_sha2_password;<br>
输入下行命令更改加密方式：<br>
`alter user ‘root’@‘localhost’ identified with mysql_native_password by ‘password’;`<br>
密码-password可省略，意为无密码




