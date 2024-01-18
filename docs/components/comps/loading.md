# Loading 加载中

## 全屏加载

使用全局方法，全屏加载，内置三种加载动画，默认为圆圈
::: demo

```html
<template>
    <div class="row">
        <zt-button type="primary" @click="loadingC">圆圈动画</zt-button>
        <zt-button type="success" @click="loadingD">圆点动画</zt-button>
        <zt-button type="warning" @click="loadingR">长条动画</zt-button>
    </div>
</template>
<script>
    export default {
        methods: {
            loadingC() {
                this.$loading()
                setTimeout(() => {
                    this.$loading.close()
                }, 2000)
            },
            loadingD() {
                this.$loading({
                    animationType: 'dot'
                })
                setTimeout(() => {
                    this.$loading.close()
                }, 2000)
            },
            loadingR() {
                this.$loading({
                    animationType: 'rectangle'
                })
                setTimeout(() => {
                    this.$loading.close()
                }, 2000)
            }
        }
    }
</script>
```

:::

## 局部加载

使用 v-loading 指令实现局部加载，绑定指令的元素需要有宽高
::: demo

```html
<template>
    <zt-switch v-model="loading" default-text size="large"></zt-switch>
    <div class="loading-box" v-loading="loading">
        <ul>
            <li>我是列表内容</li>
            <li>我是列表内容</li>
            <li>我是列表内容</li>
            <li>我是列表内容</li>
            <li>我是列表内容</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false
            }
        }
    }
</script>
```

:::

## 自定义

自定义加载图标、背景色、文字内容
::: demo

```html
<template>
    <div class="row">
        <h4 style="margin-bottom: 10px;">使用全局方法，自定义加载图标、背景色、文字</h4>
        <zt-button type="success" @click="loading1">自定义文字</zt-button>
        <zt-button type="warning" @click="loading2">自定义图标</zt-button>
        <zt-button type="danger" @click="loading3">自定义颜色</zt-button>
    </div>
    <div class="row">
        <h4 style="margin-bottom: 10px;">使用指令局部加载,自定义加载图标、背景色、文字</h4>
        <zt-switch v-model="loadingOptions.loading"></zt-switch>
        <div class="loading-box" v-loading="loadingOptions">
            <ul>
                <li>我是列表内容</li>
                <li>我是列表内容</li>
                <li>我是列表内容</li>
                <li>我是列表内容</li>
                <li>我是列表内容</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loadingOptions: {
                    loading: false,
                    background: 'rgba(0,0,0,.8)',
                    icon: 'loading',
                    text: 'Loading'
                }
            }
        },
        methods: {
            loading1() {
                this.$loading({
                    text: 'Loading...'
                })
                setTimeout(() => {
                    this.$loading.close()
                }, 2000)
            },
            loading2() {
                this.$loading({
                    text: '加载中...',
                    icon: 'loading',
                    iconSize: '32'
                })
                setTimeout(() => {
                    this.$loading.close()
                }, 2000)
            },
            loading3() {
                this.$loading({
                    background: 'rgba(0,0,0,.7)',
                    color: 'green'
                })
                setTimeout(() => {
                    this.$loading.close()
                }, 2000)
            }
        }
    }
</script>
```

:::

## Options

| 参数            | 说明                      | 类型    | 可选值 | 默认值              |
| :-------------- | :------------------------ | :------ | ------ | :------------------ |
| text | 显示在加载图标下方的加载文案 | String  | —      | — |
| icon        | 自定义图标          | String | —      | —               |
| iconSize        | 自定义图标大小          | String/Number | —      | 28               |
| color        | 图标和文字颜色          | String | —      | —               |
| background        | 遮罩层背景颜色          | String | —      | hsla(0,0%,100%,.9) |
| animationType        | 加载动画类型          | String | `circle` `dot` `rectangle` | circle |
