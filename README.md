# 电子书目录

## gitbook版本

> [python学习笔记](https://narutohyc.gitbook.io/python)
>
> [java学习笔记](https://narutohyc.gitbook.io/jdk)
>
> [机器学习学习笔记](https://narutohyc.gitbook.io/ml)



## github版本

> [python学习笔记](https://narutohyc.github.io/bk_python)
>
> [java学习笔记](https://narutohyc.github.io/bk_jdk)
>
> [机器学习学习笔记](https://narutohyc.github.io/bk_machineLearning)



## 阿里云版本

> [python学习笔记](http://112.126.102.142:4000/)
>
> [java学习笔记](http://112.126.102.142:4001/)
>
> [机器学习学习笔记](http://112.126.102.142:4002/)



---

>阿里云部署笔记(centos版本)

1. 购买[阿里云主机](https://www.aliyun.com/)，并开启安全组

   云主机实例

   ![image-20200328203641733](res/README/image-20200328203641733.png)

   配置安全组

   ![image-20200328203832056](res/README/image-20200328203832056.png)

2. 安装git、jdk和nodejs

   ```cmd
   # 安装jdk
   rpm -ivh jdk-8u241-linux-x64.rpm
   ```

   ```cmd
   # 安装和配置nodejs
   cp node-v12.16.1-linux-x64.tar.xz /usr/local/
   cd /usr/local/
   tar -xvf node-v12.16.1-linux-x64.tar.xz
   mv node-v12.16.1-linux-x64/ nodejs
   cd nodejs
   mkdir node_global
   mkdir node_cache
   npm config set prefix "/usr/local/nodejs/node_global"
   npm config set cache "/usr/local/nodejs/node_cache"
   # 配置nodejs
   vim /etc/profile
   # 在末尾添加
   export PATH=$PATH:/usr/local/nodejs/bin # config nodejs
   # 执行生效命令
   source /etc/profile
   ```

   ```cmd
   # 安装和配置git
   yum install git
   git config --global user.name "yourname"
   git config --global user.mail "xxxxxxxxxx@mail.com"
   # 配置远程仓库 将pub_key黏贴到git
   ssh-keygen -t rsa -C "xxxxxxxxxx@mail.com"
   ```

   ```cmd
   # 安装和配置git
   yum install git
   git config --global user.name "narutohyc"
   git config --global user.mail "1832044043@qq.com"
   # 配置远程仓库 将pub_key黏贴到git
   ssh-keygen -t rsa -C "1832044043@qq.com"
   ```

   ```cmd
   # 安装gitbook
   npm install gitbook-cli -g
   # 添加gitbook软链接
   ln -s /usr/local/nodejs/node_global/bin/gitbook /usr/bin/gitbook
   # gitbook指令测试
   gitbook -V
   ```

   

3. git访问慢配置

   > **通过修改 hosts文件，重定向网站的访问到代理服务器上**
   >
   > [**Github下载速度太慢怎么办？完美解决**](https://yq.aliyun.com/articles/713169)
   >
   > [服务器查询](https://www.ipaddress.com/?spm=a2c4e.10696291.0.0.1d6f19a4MrZtLO)
   >
   > ![image-20200328210756641](res/README/image-20200328210756641.png)

   | **系统**        | **hosts文件路径**                             |
   | :-------------- | :-------------------------------------------- |
   | **Window**      | **`%systemroot%\system32\drivers\etc\hosts`** |
   | **Mac / Linux** | **`/etc/hosts`**                              |

   ```properties
   # github
   219.76.4.4 github-cloud.s3.amazonaws.com
   140.82.113.4 github.com
   151.101.185.194 github.global.ssl.fastly.net
   ```

   > 刷新DNS缓存
   >
   > [Linux/Mac/Windows-刷新DNS的方法](https://baijiahao.baidu.com/s?id=1616353495084098905&wfr=spider&for=pc)
   >
   > `yum install -y nscd`
   >
   > `systemctl restart nscd`

4. 常用命令

   `netstat -atunlp`查看端口占用

   ![image-20200328210123194](res/README/image-20200328210123194.png)

   `杀死指定进程`

   ![image-20200328210327497](res/README/image-20200328210327497.png)

   `gitbook指定端口并后台执行`

   ```cmd
   # 指定端口为4001，并放在后台执行
   setsid gitbook serve --lrport=35729 --port=4001
   ```

   若启动gitbook报错

   ```cmd
   Starting server ...
   Serving book on http://localhost:4000
   
   Error: ENOSPC: System limit for number of file watchers reached, watch '/home/hyc/github/bk_python/node_modules/entities/mathjax/jax/output/HTML-CSS/fonts/Neo-Euler/Symbols'
   ```

   则执行以下命令即可

   ```shell
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
   sudo sysctl --system
   ```

   

5. 









