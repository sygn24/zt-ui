# Switch 开关

## 基础用法

::: demo

```html
<template>
    <zt-switch v-model="value" @change="change"></zt-switch>
</template>

<script>
    export default {
        data() {
            return {
                value: false
            }
        },
        methods: {
            change(val) {
                this.$msg('开关状态：' + this.value)
                console.log(val)
            }
        }
    }
</script>
```

:::

## 不同尺寸

设置`size`属性渲染不同尺寸的开关，默认`medium`

::: demo

```html
<template>
    <zt-switch size="large"></zt-switch>
    <zt-switch size="medium"></zt-switch>
    <zt-switch size="small"></zt-switch>
</template>
```

:::

## 显示默认文字

设置`default-text`属性可以显示默认文字

::: demo

```html
<template>
    <zt-switch size="large" default-text></zt-switch>
    <zt-switch size="medium" default-text></zt-switch>
    <zt-switch size="small" default-text></zt-switch>
</template>
```

:::

## 自定义

通过 `slot` 可以自定义内容，设置属性 true-color 和 false-color 可以自定义背景色

::: demo

```html
<template>
    <zt-switch>
        <template #open>
            <span>ON</span>
        </template>
        <template #close>
            <span>OFF</span>
        </template>
    </zt-switch>
    <zt-switch>
        <template #open>
            <zt-icon icon="select" />
        </template>
        <template #close>
            <zt-icon icon="close" />
        </template>
    </zt-switch>
    <zt-switch true-color="#2bb669" false-color="#ed4014" default-text></zt-switch>
</template>
```

:::

## 禁用状态

设置 `disabled` 属性禁用开关
::: demo

```html
<template>
    <zt-switch size="large" disabled></zt-switch>
</template>
```

:::

## 加载状态

设置 `loading` 属性使开关处于加载中
::: demo

```html
<template>
    <zt-switch v-model="value" size="large" default-text loading></zt-switch>
    <zt-switch size="medium" default-text loading></zt-switch>
    <zt-switch size="small" default-text loading></zt-switch>
</template>
<script>
    export default {
        data() {
            return {
                value: true
            }
        }
    }
</script>
```

:::

## API

### Switch Props

| 参数         | 说明                 | 类型    | 可选值                     | 默认值  |
| :----------- | :------------------- | :------ | -------------------------- | :------ | ----- |
| value        | 绑定值               | Boolean | —                          | —       | false |
| size         | 尺寸                 | String  | `large`、`medium`、`small` | medium  |
| disabled     | 是否禁用开关         | Boolean | —                          | false   |
| default-text | 是否显示默认文字     | Boolean | —                          | false   |
| loading      | 是否处于加载中       | Boolean | —                          | false   |
| true-color   | 自定义打开时的背景色 | String  | —                          | #2d8cf0 |
| false-color  | 自定义关闭时的背景色 | String  | —                          | #cccccc |

### Switch Events

| 事件名 | 说明                           | 回调参数     |
| ------ | :----------------------------- | :----------- |
| change | 开关变化时触发，返回当前的状态 | true / false |

### Switch Slots

| 名称   | 说明           |
| :----- | :------------- |
| open | 自定义显示打开时的内容 |
| close | 自定义显示关闭时的内容 |