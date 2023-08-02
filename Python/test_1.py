# 导入socket模块
from socket import *

# 创建客户端Socket对象
tcp_client_socket = socket(AF_INET,SOCK_STREAM)
# 连接服务器端
tcp_client_socket.connect(('127.0.0.1',8888))
while True:
    msg = input('>')
    # 向服务器发送数据
    tcp_client_socket.send(msg.encode('gbk'))
    if msg == 'end':
        break
    # 接收服务器端数据
    re_data = tcp_client_socket.recv(1024)
    print('服务器端说：', re_data.decode('gbk'))
tcp_client_socket.close()
