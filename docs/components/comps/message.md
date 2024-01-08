# Message 消息提示

## 不同类型

不同的提示状态：信息、成功、警告、错误
::: demo

```html
<template>
    <zt-button type="primary" @click="handleClick1" icon="info">默认提示</zt-button>
    <zt-button type="success" @click="handleClick2" icon="success">成功信息</zt-button>
    <zt-button type="warning" @click="handleClick3" icon="warning">警告信息</zt-button>
    <zt-button type="danger" @click="handleClick4" icon="error">错误信息</zt-button>
</template>

<script>
    export default {
        methods: {
            handleClick1() {
                this.$msg('默认提示信息')
            },
            handleClick2() {
                this.$msg.success('成功信息')
            },
            handleClick3() {
                this.$msg.warning({ msg: '警告信息' })
            },
            handleClick4() {
                this.$msg.error({ msg: '错误信息' })
            }
        }
    }
</script>
```

:::

## 带背景色

设置属性 background 后，通知提示会显示背景色
::: demo

```html
<template>
    <zt-button type="primary" @click="handleClick1" icon="info">默认提示</zt-button>
    <zt-button type="success" @click="handleClick2" icon="success">成功信息</zt-button>
    <zt-button type="warning" @click="handleClick3" icon="warning">警告信息</zt-button>
    <zt-button type="danger" @click="handleClick4" icon="error">错误信息</zt-button>
</template>

<script>
    export default {
        methods: {
            handleClick1() {
                this.$msg({ msg: '默认信息', background: true })
            },
            handleClick2() {
                this.$msg.success({ msg: '成功信息', background: true })
            },
            handleClick3() {
                this.$msg.warning({ msg: '警告信息', background: true })
            },
            handleClick4() {
                this.$msg.error({ msg: '错误信息', background: true })
            }
        }
    }
</script>
```

:::

## 加载中

Loading 的状态，需要手动调用 `close` 方法关闭
::: demo

```html
<template>
    <zt-button @click="handleClick">加载中消息</zt-button>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$msg.loading({ msg: 'Loading...' })
                setTimeout(() => {
                    this.$msg.close()
                }, 3000)
            }
        }
    }
</script>
```

:::

## 可以手动关闭

::: demo

```html
<template>
    <zt-button @click="handleClick">可以手动关闭的消息</zt-button>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$msg({ msg: '可以手动关闭', showClose: true })
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
    <zt-button type="dashed" @click="handleClick1">自定义10秒后关闭</zt-button>
    <zt-button type="dashed" @click="handleClick2">自定义距顶部偏移距离</zt-button>
</template>

<script>
    export default {
        methods: {
            handleClick1() {
                this.$msg({ msg: '10s后关闭', dt: 10000 })
            },
            handleClick2() {
                this.$msg({ msg: '距顶部偏移200px', offsetTop: 200 })
            }
        }
    }
</script>
```

:::

## API

### Message Props

| 参数       | 说明                            | 类型    | 可选值                                | 默认值 |
| :--------- | :------------------------------ | :------ | ------------------------------------- | :----- |
| type       | 类型                            | String  | `success`、`warning`、`info`、`error` | info   |
| msg        | 提示语                          | String  | —                                     | —      |
| background | 是否显示背景色                  | Boolean | —                                     | false  |
| showClose  | 是否显示关闭按钮                | Boolean | —                                     | false  |
| dt         | 显示时间，设为 0 则不会自动关闭 | Number  | —                                     | 3000   |
| offsetTop  | Message 距离窗口顶部的偏移量    | Number  | —                                     | 30     |

### Message Methods

| 方法名 | 说明               | 回调参数 |
| ------ | :----------------- | :------- |
| close  | 关闭所有的 Message | —        |
