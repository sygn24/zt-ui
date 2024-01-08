# Progress 进度条

## 基础用法

可以通过点击改变进度，也可以通过拖拽圆钮改变进度
::: demo

```html
<template>
    <zt-progress v-model="progress" @change="changeProgress"></zt-progress>
</template>

<script>
    export default {
        data() {
            return {
                progress: 30
            }
        },
        methods: {
            changeProgress(len) {
                this.$msg('进度:' + len)
            }
        }
    }
</script>
```

:::

## Tooltip 设置

格式化 Tooltip，先设置 `is-format-tooltip`属性为 `true`，通过`format-tooltip`属性传入格式化 Tooltip 的函数
::: demo

```html
<template>
    <div class="row">
        <h4 class="row">格式化Tootip</h4>
        <zt-progress v-model="progress1" is-format-tooltip :format-tooltip="formatTooltip"></zt-progress>
    </div>
    <div class="row">
        <h4 class="row">隐藏Tootip</h4>
        <zt-progress v-model="progress2" is-format-tooltip :format-tooltip="formatTooltip" :show-tooltip="false"></zt-progress>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress1: 30,
                progress2: 40
            }
        },
        methods: {
            formatTooltip(len) {
                return len + '%'
            }
        }
    }
</script>
```

:::

## 圆钮设置

设置 `always-show-round-btn`为`true`则总是显示圆钮，为`false`则在鼠标经过时显示圆钮。设置`hidden-round-btn`为 `true`则隐藏圆钮。
::: demo

```html
<template>
    <div class="row">
        <h4 class="row">鼠标经过时显示圆钮</h4>
        <zt-progress v-model="progress1" :always-show-round-btn="false"></zt-progress>
    </div>
    <div class="row">
        <h4 class="row">隐藏圆钮</h4>
        <zt-progress v-model="progress2" hidden-round-btn></zt-progress>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress1: 30,
                progress2: 40
            }
        }
    }
</script>
```

:::

## 自定义

::: demo

```html
<template>
    <div class="row">
        <h4 class="row">关闭动画效果</h4>
        <zt-progress v-model="progress1" :show-active-bar="false"></zt-progress>
    </div>
    <div class="row">
        <h4 class="row">自定义颜色和大小</h4>
        <zt-progress v-model="progress2" color="#ffb800" track-color="#666" :size="6"></zt-progress>
        <div style="height:20px"></div>
        <zt-progress v-model="progress2" :color="['#2bb669','#ed4014']" track-color="#666" :size="10"></zt-progress>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress1: 30,
                progress2: 40
            }
        }
    }
</script>
```

:::

## 只读模式

::: demo

```html
<template>
    <zt-progress v-model="progress" readonly></zt-progress>
</template>

<script>
    export default {
        data() {
            return {
                progress: 30
            }
        }
    }
</script>
```

:::

## 垂直模式

设置 `vertical`属性为 `true`则可垂直显示，可以通过`height`属性设置高度。如果不设置`height`则以父元素高度为准
::: demo

```html
<template>
    <zt-progress v-model="progress" vertical height="200px"></zt-progress>
</template>

<script>
    export default {
        data() {
            return {
                progress: 30
            }
        }
    }
</script>
```

:::

## API

### Progress Props

| 参数                  | 说明                                                                      | 类型                             | 可选值 | 默认值  |
| :-------------------- | :------------------------------------------------------------------------ | :------------------------------- | ------ | :------ |
| percent / v-model     | 绑定值                                                                    | Number                           | —      | 0       |
| size                  | 进度条尺寸                                                                | Number                           | —      | 8       |
| color                 | 进度条颜色                                                                | String, Array['color1','color2'] | —      | #2d8cf0 |
| track-color           | 进度条轨道颜色                                                            | String                           | —      | #e6e8eb |
| always-show-round-btn | 是否总是显示圆钮，为`true`则总是显示圆钮，为`false`则在鼠标经过时显示圆钮 | Boolean                          | —      | true    |
| hidden-round-btn      | 是否隐藏圆钮                                                              | Boolean                          | —      | false   |
| readonly              | 是否只读                                                                  | Boolean                          | —      | false   |
| show-tooltip          | 是否显示提示框                                                            | Boolean                          | —      | true    |
| is-format-tooltip     | 是否格式化提示框                                                          | Boolean                          | —      | false   |
| format-tooltip        | 格式化提示框显示信息                                                      | Function(percent)                | —      | —       |
| show-active-bar       | 是否显示动画                                                              | Boolean                          | —      | true    |
| vertical              | 是否垂直显示                                                              | Boolean                          | —      | false   |
| height                | 垂直显示时进度条高度                                                      | String                           | —      | —       |

### Progress Events

| 事件名 | 说明                                               | 回调参数   |
| ------ | :------------------------------------------------- | :--------- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | 改变后的值 |
