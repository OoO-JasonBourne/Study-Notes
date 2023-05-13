## Git 简介 （学习来源来自廖雪峰老师）
Git是目前世界上最先进的分布式版本控制系统（没有之一）
Git 是一个分布式版本控制系统， SVN 集中式版本控制系统
Linus在1991年创建了开源的Linux，在2005年花了两周时间自己用C写了一个分布式版本控制系统————Git. （看到这里就一个字，牛）
2008年 GitHub 网站上线


#### 1.学习地址：https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
#### 2.git和svn的区别
    svn：集中式服务器
    git：分布式服务器   
#### 3.初始化身份
    git config --global user.name "LL"
    git config --global user.email "LL@qq.com"
#### 4.创建仓库
    初始化仓库：git init
    添加到仓库：git add filename
    提交到仓库：git commit -m '注释'
#### 5.时光穿梭
    查看仓库状态：git status
    查看仓库状态(具体改变内容)：git diff
    查看历史版本：git log
    查看历史版本：git log --pretty=oneline
    回到历史版本：git reset --hard HEAD^
    回到历史具体版本：git reset --hard 版本号
    工作区和暂存区
    删除文件：
        工作区删除：rm test.txt
        版本库删除：
            git rm test.txt
            git commit -m '删除文件'
        找回来文件：
            git checkout -- test.txt
#### 6.分支管理
    创建与并切换分支：git checkout -b <name>
    查看分支：git branch
    创建分支：git branch <name>
    切换分支：git checkout <name>
    合并某分支到当前分支：git merge <name>
    删除分支：git branch -d <name>
#### 7.推送到远程仓库
    github平台：
        1.生成ssh
            ssh-keygen -t rsa -C "iwen@iwenwiki.com"
        2.关联github
        3.创建仓库
        4.把本地仓库的代码推送到远程仓库
            第一次推送：
                git remote add origin https://github.com/Geekiwen/web1811.git
                git push -u origin master
            以后：
                git push
    gitee平台：
        1.克隆仓库：git clone https://gitee.com/iwensxt/web1811.git
        2.上传操作
        3.多人协作：
#### 8.远程仓库的命令：
    git clone url
    git push
    git pull
