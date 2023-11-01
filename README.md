# lang-hant
网页简体繁体转换工具,无需配置导入即可实现转换,默认转换为繁体
# 安装
## npm
```
npm install lang-hant
```
# 使用
## 基础使用
直接导入,默认转换为`繁体`
```
import 'lang-hant'
```
## 进阶使用
如果有简体繁体互相切换的需求,使用内部提供的`changeLanguage`方法
```js
import { changeLanguage } from 'lang-hant'
changeLanguage('简体') // 切换为简体
changeLanguage('繁体') // 切换为繁体
```
## 其他使用
如果有手动更新的需求,内部提供了`handleTran`方法
```js
import { handleTran } from 'lang-hant'
handleTran()
```
## 暂停、重新开始转换
暂停转换,调用内部提供的`pauseObserver`方法

重新开始转换,调用内部提供的`restartObserver`方法
```js
import { pauseObserver } from 'lang-hant'
pauseObserver() // 暂停
restartObserver() // 重新开始
```
# 实现原理
`handleTran`方法递归body,将全部文字进行转换

使用`MutationObserver`API,监听Body子节点和文本变化,节流调用`handleTran`方法