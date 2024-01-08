# Pagination 分页

## 基础用法

::: demo

```html
<template>
    <h4>页数少于10</h4>
    <zt-pagination :total="60" :current-page.sync="currentPage1" @current-change="pageChange"></zt-pagination>
    <h4>页数大于10</h4>
    <zt-pagination :total="150" :current-page.sync="currentPage2" @current-change="pageChange"></zt-pagination>
</template>

<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                currentPage2: 1
            }
        },
        methods: {
            pageChange(page) {
                this.$msg('第' + page + '页')
            }
        }
    }
</script>
```

:::

## 小型分页

在空间有限的情况下，可以使用简单的小型分页，设置`small`属性即可。
::: demo

```html
<template>
    <zt-pagination :total="60" :current-page.sync="currentPage" small></zt-pagination>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 2
            }
        }
    }
</script>
```

:::

## 带有背景色

设置 `background` 属性可以为分页按钮添加背景色，也可以传入 `theme-color`自定义背景色
::: demo

```html
<template>
    <h4 class="row">默认背景色</h4>
    <zt-pagination :total="200" :current-page.sync="currentPage" background></zt-pagination>
    <h4 class="row">自定义背景色</h4>
    <zt-pagination :total="200" :current-page.sync="currentPage" background theme-color="var(--success)"></zt-pagination>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 2
            }
        }
    }
</script>
```

:::

## 带有边框

设置 `border` 属性可以为分页按钮添加边框，也可以传入 `theme-color`自定义边框颜色
::: demo

```html
<template>
    <h4 class="row">默认边框色</h4>
    <zt-pagination :total="200" :current-page.sync="currentPage" border></zt-pagination>
    <h4 class="row">自定义边框色</h4>
    <zt-pagination :total="200" :current-page.sync="currentPage" border theme-color="var(--warning)"></zt-pagination>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 2
            }
        }
    }
</script>
```

:::

## 边框背景同时使用

::: demo

```html
<template>
    <h4 class="row">默认颜色</h4>
    <zt-pagination :total="200" border background></zt-pagination>
    <h4 class="row">自定义颜色</h4>
    <zt-pagination :total="200" border background theme-color="var(--warning)"></zt-pagination>
</template>
```

:::

## 显示总条数

设置 `show-total`属性可以显示总条数
::: demo

```html
<template>
    <zt-pagination
        :total="1200"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        background
        show-total
        @current-change="pageChange"
    ></zt-pagination>
</template>

<script>
    export default {
        data() {
            return {
                currentPage: 4,
                pageSize: 60
            }
        },
        methods: {
            pageChange(page) {
                this.$msg('第' + page + '页')
            }
        }
    }
</script>
```

:::

## 设置每页显示数量

设置 `show-sizes`属性可以设置每页显示数量
::: demo

```html
<template>
    <div class="row">
        <h4 class="row">不设置page-sizes属性，默认[10,20,30,40,50]</h4>
        <zt-pagination
            :total="1200"
            :current-page.sync="currentPage1"
            @size-change="pageSzieChange"
            @current-change="pageChange"
            background
            show-total
            show-sizes
        ></zt-pagination>
    </div>
    <div class="row">
        <h4 class="row">设置page-sizes属性，传[100,200,300,400,500]</h4>
        <zt-pagination
            :total="1200"
            :current-page.sync="currentPage2"
            :page-size.sync="pageSize2"
            :page-sizes="[100, 200, 300, 400, 500]"
            @size-change="pageSzieChange"
            @current-change="pageChange"
            border
            show-total
            show-sizes
        ></zt-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentPage1: 1,
                currentPage2: 2,
                pageSize2: 100
            }
        },
        methods: {
            pageChange(page) {
                this.$msg('第' + page + '页')
            },
            pageSzieChange(size) {
                this.$msg(size + '条/页')
            }
        }
    }
</script>
```

:::

## 显示跳转输入框

设置 `show-jumper`属性可以显示跳转输入框
::: demo

```html
<template>
    <zt-button size="small" type="primary" @click="total += 200">总条数增加200</zt-button>
    <zt-pagination
        :total="total"
        :current-page.sync="currentPage"
        :page-size.sync="pageSize"
        :page-sizes="[50, 100, 150, 200, 300]"
        @size-change="pageSzieChange"
        @current-change="pageChange"
        border
        show-total
        show-sizes
        show-jumper
    ></zt-pagination>
</template>

<script>
    export default {
        data() {
            return {
                total: 1200,
                currentPage: 5,
                pageSize: 50
            }
        },
        methods: {
            pageChange(page) {
                this.$msg('第' + page + '页')
            },
            pageSzieChange(size) {
                this.$msg(size + '条/页')
            }
        }
    }
</script>
```

:::

## API

### Pagination Props

| 参数         | <div style="width:150px">说明</div> | 类型     | <div style="width:200px">可选值</div> | 默认值               |
| :----------- | :---------------------------------- | :------- | ------------------------------------- | :------------------- |
| total        | 总条目数                            | Number   | —                                     | —                    |
| current-page | 当前页数，支持 .sync 修饰符         | Number   | —                                     | 1                    |
| page-size    | 每页显示条目个数，支持 .sync 修饰符 | Number   | —                                     | 10                   |
| page-sizes   | 每页显示个数选择器的选项设置        | Number[] | —                                     | [10, 20, 30, 40, 50] |
| border       | 是否显示边框                        | Boolean  | —                                     | false                |
| background   | 是否显示背景色                      | Boolean  | —                                     | false                |
| small        | 是否使用小型分页                    | Boolean  | —                                     | false                |
| show-total   | 是否显示总条目数                    | Boolean  | —                                     | false                |
| show-sizes   | 是否显示个数选择器                  | Boolean  | —                                     | false                |
| show-jumper  | 是否显示跳转输入框                  | Boolean  | —                                     | false                |
| theme-color  | 主题颜色                            | String   | —                                     | #2d8cf0              |

### Pagination Events

| 事件名         | 说明                     | 回调参数 |
| :------------- | :----------------------- | -------- |
| current-change | currentPage 改变时会触发 | 当前页   |
| size-change    | pageSize 改变时会触发    | 每页条数 |
