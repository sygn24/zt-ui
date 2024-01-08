# Icon 图标

## 基础

使用 ZtIcon 组件，指定图标对应的 `icon` 属性
::: demo 指定图标对应的 `icon` 属性,可以设置`size`、`color`属性控制图标的大小和颜色

```html
<template>
    <div>
        <div class="iconList">
            <span class="item" v-for="(icon, index) in iconList" :key="index">
                <ZtIcon :icon="icon" size="22" color="var(--primary)" />
                <p style="padding-top: 5px">{{ icon }}</p>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                iconList: [
                    'other',
                    'component',
                    'element',
                    'search',
                    'clear',
                    'ellipsis',
                    'double-arrow-right',
                    'double-arrow-left',
                    'star-fill',
                    'star',
                    'loadding-dot',
                    'loading',
                    'loading-circle',
                    'share',
                    'comment',
                    'comment-fill',
                    'eye',
                    'eyeoff',
                    'success',
                    'error',
                    'info',
                    'add',
                    'close',
                    'complete',
                    'edit',
                    'download',
                    'upload',
                    'like',
                    'file',
                    'good',
                    'meh',
                    'navigation',
                    'select',
                    'select-bold',
                    'switch',
                    'setting',
                    'arrow-up-bold',
                    'arrow-right-bold',
                    'arrow-down-bold',
                    'arrow-left-bold',
                    'check-fill',
                    'user-fill'
                ]
            }
        }
    }
</script>
```

:::

## API

### Icon Props

| 参数   | 说明           | 类型            | 可选值 | 默认值 |
| :----- | :------------- | :-------------- | ------ | :----- |
| icon   | 图标的名称     | String          | —      | —      |
| size   | 图标大小       | String / Number | —      | —      |
| color  | 图标的颜色     | String          | —      | —      |
| custom | 自定义图标类名 | String          | —      | —      |

### Icon Events

| 事件名 | 说明       | 回调参数 |
| ------ | :--------- | :------- |
| click  | 点击时触发 | event    |
