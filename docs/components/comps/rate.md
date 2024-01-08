# Rate 评分

## 基础用法

::: demo

```html
<template>
    <zt-rate v-model="value" @change="change"></zt-rate>
</template>

<script>
    export default {
        data() {
            return {
                value:1
            }
        },
        methods: {
            change(val) {
                this.$msg('当前选择：' + val + '星')
            }
        }
    }
</script>
```

:::

## 半星选择

设置 `half` 属性可以选中半星
::: demo 设置 `half` 属性可以选中半星

```html
<template>
    <zt-rate v-model="value" half> </zt-rate>
</template>

<script>
    export default {
        data() {
            return {
                value: 2.5
            }
        }
    }
</script>
```

:::

## 显示文字

设置属性 `show-text` 可以显示提示文字，也可以通过 `slot` 自定义内容
::: demo 设置属性 `show-text` 可以显示提示文字，也可以通过 `slot` 自定义内容

```html
<template>
    <div class="row">
        <zt-rate v-model="value1" show-text> </zt-rate>
    </div>
    <div class="row">
        <zt-rate v-model="value2" show-text half>
            <span style="color: #f5a623">{{ value2 }} 分</span>
        </zt-rate>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: 3,
                value2: 2.7
            }
        }
    }
</script>
```

:::

## 自定义

设置 `count`属性可以自定义星星总数，设置 `color`属性可以自定义星星颜色
::: demo 设置 `count`属性可以自定义星星总数，设置 `color`属性可以自定义星星颜色

```html
<template>
    <div class="row">
        <zt-rate v-model="value" :count="8" color="#2d8cf0" show-text> </zt-rate>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 4
            }
        }
    }
</script>
```

:::

## 禁用状态

设置 `disabled` 属性开启只读模式，无法交互
::: demo 设置 `disabled` 属性开启只读模式，无法交互

```html
<template>
    <zt-rate v-model="value" :count="8" color="#2d8cf0" show-text disabled> </zt-rate>
</template>

<script>
    export default {
        data() {
            return {
                value: 4
            }
        }
    }
</script>
```

:::

## API

### Rate Props

| 参数      | 说明                   | 类型    | 可选值 | 默认值  |
| :-------- | :--------------------- | :------ | ------ | :------ | --- |
| value     | 绑定值                 | Number  | —      | —       | 0   |
| count     | 星星总数               | Number  | —      | 5       |
| half      | 是否允许半星选择       | Boolean | —      | false   |
| disabled  | 是否只读，无法进行交互 | Boolean | —      | false   |
| show-text | 是否显示提示文字       | Boolean | —      | false   |
| color     | 星星颜色               | String  | —      | #ffb800 |

### Rate Events

| 事件名 | 说明           | 回调参数 |
| ------ | :------------- | :------- |
| change | 评分改变时触发 | value    |
