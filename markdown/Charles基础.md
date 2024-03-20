---
theme: channing-cyan
title: Charles基础
---

> charles 主要用于移动端接口请求抓包功能，当然也可用于电脑端抓包，比如在手机上的小程序由于微信的限制无法抓到数据请求，可以在电脑端打开微信小程序进行抓包，另外还可以mock数据，断点调试等等，本次教程使用mac+ios手机做演示操作

## 安装/注册

[下载地址](https://www.charlesproxy.com/)

激活邮箱及密码 Registered Name:<https://zhile.io> License Key: 48891cf209c6d32bf4

不激活也可使用，只是每半个小时程序会自动重启一次 如果失效了可以到网上去搜

## 手机抓包

1.  需要在手机上安装证书，先打开charles查看本机IP地址


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fd2b53e624a431cbb008fed42cc9e4b~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/881e330fa7bc4f0c8a7b9e4e4d55d9d6~tplv-k3u1fbpfcp-watermark.image?)
这里应该使用en0的IP地址

2.  让手机和电脑连接在同一Wi-Fi下，打开Wi-Fi设置找到http代理的配置代理点进去选择手动，服务器填写电脑上刚才的IP地址，端口号为默认的8888 然后点击存储,这时手机访问网络，Charles会弹出如下窗口，点击Allow 继续

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/249714ca6b1043f59163e9d525d47294~tplv-k3u1fbpfcp-watermark.image?)

2.  现在一般的接口都为https请求所以还需要在手机上安装证书，保持上述操作后打开Safari浏览器访问[chls.pro/ssl](chls.pro/ssl) 浏览器会提示是否需要下载一个配置描述文件，点击允许，然后到系统设置中-通用-vpn与设备管理就能看到刚才下载的描述文件点击进入再点击右上角安装，安装成功后再在关于本机下的最底部找到证书信任设置，信任刚才安装的证书


4.做完以上操作应该就可以进行愉快的抓包了，如果没有抓到相关数据请求，就在Charles设置里面看下proxy的ssl Proxy Settings配置包括所有域以及端口

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67e99a5a848442a68c75177eadeeae26~tplv-k3u1fbpfcp-watermark.image?)

## 电脑抓包

1.  电脑抓包需要安装证书到电脑本地,然后在钥匙串访问中找到刚才安装的证书选择信任


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0af858a1178e4ac79bd78f9fe5acf23e~tplv-k3u1fbpfcp-watermark.image?)

2.  点击Proxy 勾选macos proxy 即可抓包电脑上的接口请求


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b41a5033fea54082830d4866c25c1037~tplv-k3u1fbpfcp-watermark.image?)

## 断点调试

1. 选择需要调试的接口 无论是电脑本地代理还是 代理的手机请求 都可以进行断点调试
2. 

## 代理请求

1. 本地代理
   1. 相当于是本地mock
2. 远程代理