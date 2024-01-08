# Confirm 确认框

## 基础用法

::: demo

```html
<template>
    <zt-button type="primary" @click="confirm">基础使用</zt-button>
</template>

<script>
    export default {
        methods: {
            confirm() {
                this.$confirm('我是基础使用')
            }
        }
    }
</script>
```

:::

## 自定义

自定义标题、图标和按钮文字
::: demo

```html
<template>
    <zt-button type="primary" @click="confirm">自定义</zt-button>
</template>

<script>
    export default {
        methods: {
            confirm() {
                this.$confirm({
                    title: '提交信息',
                    content: '提交后不可更改, 是否继续?',
                    okText: '提交',
                    cancelText: '放弃',
                    customIcon: {
                        icon: 'zt-icon-add',
                        size: '22',
                        color: 'var(--success)'
                    },
                    onOk: () => {
                        this.$msg.success('提交成功')
                    },
                    onCancel: () => {
                        this.$msg('放弃')
                    }
                })
            }
        }
    }
</script>
```

:::

## 异步关闭

异步关闭，需要手动调用 remove 方法关闭对话框
::: demo

```html
<template>
    <zt-button type="primary" @click="confirm">异步关闭</zt-button>
</template>

<script>
    export default {
        methods: {
            confirm() {
                this.$confirm({
                    title: '异步关闭',
                    content: '点击确认后对话框将在 2秒 后关闭',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$confirm.remove()
                            this.$msg.info('异步关闭')
                        }, 2000)
                    },
                    onCancel: () => {
                        this.$msg.warning('取消')
                    }
                })
            }
        }
    }
</script>
```

:::

## 不同类型

不同的提示状态：信息、成功、警告、错误
::: demo

```html
<template>
    <zt-button type="primary" @click="handleClick1">默认提示</zt-button>
    <zt-button type="success" @click="handleClick2" icon="success">成功</zt-button>
    <zt-button type="warning" @click="handleClick3" icon="warning">警告</zt-button>
    <zt-button type="danger" @click="handleClick4" icon="error" textColor="#fff">错误</zt-button>
</template>

<script>
    export default {
        methods: {
            handleClick1() {
                this.$confirm('默认提示信息')
            },
            handleClick2() {
                this.$confirm.success('成功信息')
            },
            handleClick3() {
                this.$confirm.warning('警告信息')
            },
            handleClick4() {
                this.$confirm.error('错误信息')
            }
        }
    }
</script>
```

:::

## API

### Confirm Props

| 参数       | <div style="width:150px">说明</div> | 类型    | 可选值                                | 默认值 |
| :--------- | :---------------------------------- | :------ | ------------------------------------- | :----- |
| type       | 类型                                | String  | `success`、`warning`、`info`、`error` | info   |
| title      | 标题文字                            | String  | —                                     | 提示   |
| content    | 消息正文内容                        | String  | —                                     | —      |
| okText     | 确认按钮文字                        | String  | —                                     | 确认   |
| cancelText | 取消按钮文字                        | String  | —                                     | 取消   |
| customIcon | 自定义标题图标                      | Object  | —                                     | —      |
| onOk       | 点击确定的回调                      | Number  | —                                     | —      |
| onCancel   | 点击取消的回调                      | Number  | —                                     | —      |
| loading    | 是否异步关闭                        | Boolean | —                                     | false  |

### Confirm Methods

| 方法名 | 说明               | 回调参数 |
| ------ | :----------------- | :------- |
| remove | 手动调用关闭对话框 | —        |
