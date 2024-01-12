# 介绍

参照Element-ui、iView组件库的样式，基于Vue2自己动手封装，实现了一些简单的组件，用于学习练手。

# 引用组件库

在入口文件中(main.js) 中引入组件库

```js
// 全部引入
import ztui from "/packages/index";
Vue.use(ztui);

// 按需引入
import { Button } from '/packages/index'
Vue.use(Button)

```