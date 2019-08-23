# taro
微信小程序（taro + mobx + less + taro-ui）

# 项目开始 
npm install
# 微信小程序运行
npm run dev:weapp

1. #### 开始

taro是一款使用react语法的框架，只要写一套代码就可以运行在微信/百度/支付宝/字节跳动/QQ小程序、快应用、H5、React-Native 等

2. #### 安装

   ##### 2.1 脚手架

```
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

##### 	2.2 使用命令

```
taro init myApp
```

##### 	2.3项目目录

​	文件名称多个单词下划线并且小写

```
tree L -2
├── README.md
├── config
├── dist
├── node_modules
├── package-lock.json
├── package.json
├── project.config.json // 微信小程序配置文件
├── src
└── yarn.lock
```

3. #### 微信小程序

watch监听文件修改，并对文件代码进行压缩打包

```
# yarn
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```

4. #### 命令

**taro info** 检查taro的环境问题、版本问题、依赖版本

**taro doctor** 可以诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案

5. #### 路由

须在app.js中config配置pages项

```
Taro.navigateTo({
	url: `/pages/${name}/index`
})
```
