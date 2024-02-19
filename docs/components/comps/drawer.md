# Drawer 抽屉

## 基础用法

::: demo

```html
<template>
    <zt-button type="primary" @click="show = true" append-to-body>打开抽屉</zt-button>
    <zt-drawer :visible.sync="show" title="提示" @on-ok="onOk" @on-cancel="onCancel">这是一段信息</zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            onOk() {
                this.$msg.success('点击了确认')
            },
            onCancel() {
                this.$msg.warning('点击了取消')
            }
        }
    }
</script>
```

:::

## 其他方向

::: demo

```html
<template>
    <zt-button type="primary" @click="show1 = true">左边</zt-button>
    <zt-drawer :visible.sync="show1" title="左边" direction="left"> 这是左边打开的抽屉</zt-drawer>
    <zt-button type="primary" @click="show2 = true">上边</zt-button>
    <zt-drawer :visible.sync="show2" title="上边" direction="top">这是上边打开的抽屉</zt-drawer>
    <zt-button type="primary" @click="show3 = true">下边</zt-button>
    <zt-drawer :visible.sync="show3" title="下边" direction="bottom">这是下边打开的抽屉</zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show1: false,
                show2: false,
                show3: false
            }
        }
    }
</script>
```

:::

## 隐藏头部和底部

::: demo

```html
<template>
    <zt-button type="primary" @click="show = true">打开抽屉</zt-button>
    <zt-drawer :visible.sync="show" title="提示" :show-header="false" :show-footer="false">隐藏头部和底部</zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>
```

:::

## 自定义头部、内容、底部

::: demo

```html
<template>
    <zt-button type="success" @click="show = true">自定义头部、内容、底部</zt-button>
    <zt-drawer :visible.sync="show">
        <template #title>
            <div>
                <zt-icon icon="info" color="#2d8cf0" size="20" />
                <span>自定义标题</span>
            </div>
        </template>
        <zt-form :model="form" label-width="120px">
            <zt-form-item label="活动区域">
                <zt-select v-model="form.region" placeholder="请选择活动区域">
                    <zt-option label="区域一" value="shanghai"></zt-option>
                    <zt-option label="区域二" value="beijing"></zt-option>
                </zt-select>
            </zt-form-item>
            <zt-form-item label="活动名称">
                <zt-input v-model="form.name" placeholder="请输入活动名称"></zt-input>
            </zt-form-item>
        </zt-form>
        <template #footer>
            <div>
                <zt-button size="small" @click="onCancel">取 消</zt-button>
                <zt-button type="primary" size="small" @click="sumbit" :loading="loading">提 交</zt-button>
            </div>
        </template>
    </zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                loading: false,
                form: {
                    name: '',
                    region: ''
                }
            }
        },
        methods: {
            sumbit() {
                this.loading = true
                setTimeout(() => {
                    this.show = false
                    this.loading = false
                    this.$msg('提交成功')
                }, 1000)
            },
            onCancel() {
                this.$msg.warning('点击了取消')
                this.show = false
            }
        }
    }
</script>
```

:::

## 打开和关闭的回调

::: demo

```html
<template>
    <zt-button type="primary" @click="show = true">打开和关闭的回调</zt-button>
    <zt-drawer :visible.sync="show" title="回调" @open="open" @close="close" @opened="opened" @closed="closed">打开和关闭的回调</zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            open() {
                this.$msg.success('打开抽屉')
            },
            opened() {
                this.$msg.success('打开抽屉动画结束的回调')
            },
            close() {
                this.$msg('关闭抽屉')
            },
            closed() {
                this.$msg('关闭抽屉动画结束的回调')
            }
        }
    }
</script>
```

:::

## 禁用遮罩层关闭

::: demo

```html
<template>
    <zt-button type="info" @click="show = true">禁用遮罩层关闭</zt-button>
    <zt-drawer :visible.sync="show" title="禁用" :mask-closable="false">禁用遮罩层关闭</zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>
```

:::

## 隐藏遮罩层

::: demo

```html
<template>
    <zt-button type="info" @click="show = true">隐藏遮罩层</zt-button>
    <zt-drawer :visible.sync="show" title="隐藏遮罩层" :show-mask="false">隐藏遮罩层</zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>
```

:::

## 嵌套抽屉

::: demo

```html
<template>
    <zt-button type="primary" @click="show1 = true">嵌套抽屉</zt-button>
    <zt-drawer :visible.sync="show1" title="外层抽屉" width="50%" :show-footer="false">
        <div>我是外层抽屉</div>
        <zt-button type="primary" size="small" @click="show2 = true">打开内层抽屉</zt-button>
        <zt-drawer :visible.sync="show2" title="内层抽屉">内层抽屉</zt-drawer>
    </zt-drawer>
</template>
<script>
    export default {
        data() {
            return {
                show1: false,
                show2: false
            }
        }
    }
</script>
```

:::

## API

### Drawer Props

| 参数           | 说明                                                  | 类型    | 可选值                           | 默认值  |
| :------------- | :---------------------------------------------------- | :------ | -------------------------------- | :------ |
| visible        | 是否显示抽屉，支持 .sync 修饰符                       | Boolean | —                                | false   |
| title          | 抽屉标题，也可通过具名 slot 传入                    | String  | —                                | —       |
| direction      | 抽屉打开的方向                                        | String  | `top`, `right`, `bottom`, `left` | `right` |
| width          | 抽屉宽度，仅在 `direction` 为 `right`和 `left` 时有效 | String  | —                                | 30%     |
| height         | 抽屉高度，仅在 `direction` 为 `top`和 `bottom` 时有效 | String  | —                                | 50%     |
| mask-closable  | 是否禁用遮罩层关闭                                    | Boolean | —                                | true    |
| show-mask  | 是否显示遮罩层                                    | Boolean | —                                | true    |
| show-close     | 是否显示关闭按钮                                      | Boolean | —                                | true    |
| show-header    | 是否显示头部                                          | Boolean | —                                | true    |
| show-footer    | 是否显示底部                                          | Boolean | —                                | true    |
| append-to-body | 是否插入至 body 元素上                                | Boolean | —                                | false   |

### Drawer Slots

| 名称   | 说明                   |
| ------ | :--------------------- |
| —      | 抽屉的内容           |
| title  | 抽屉标题区的内容     |
| footer | 抽屉按钮操作区的内容 |

### Drawer Events

| 事件名    | 说明                       | 回调参数 |
| --------- | :------------------------- | :------- |
| open      | 抽屉打开的回调           | —        |
| opend     | 抽屉打开动画结束时的回调 | —        |
| close     | 抽屉关闭的回调           | —        |
| closed    | 抽屉关闭动画结束时的回调 | —        |
| on-ok     | 点击确定的回调             | —        |
| on-cancel | 点击取消的回调             | —        |
