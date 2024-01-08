# Modal 对话框

## 基础用法

::: demo

```html
<template>
    <zt-button type="primary" @click="show = true">打开对话框</zt-button>
    <zt-modal :visible.sync="show" title="提示" @on-ok="onOk" @on-cancel="onCancel">这是一个基础对话框</zt-modal>
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

## 自定义

自定义标题、内容、底部、宽度、距顶部偏移量
::: demo

```html
<template>
    <zt-button type="success" @click="show = true">自定义</zt-button>
    <zt-modal :visible.sync="show" width="40%" top="25vh">
        <template #title>
            <div>
                <ZtIcon icon="info" color="#2d8cf0" size="20" />
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
    </zt-modal>
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

## 禁用

::: demo

```html
<template>
    <zt-button type="info" @click="show1 = true">禁用关闭按钮</zt-button>
    <zt-modal :visible.sync="show1" title="禁用关闭按钮" :show-close="false">禁用关闭按钮</zt-modal>
    <zt-button type="info" @click="show2 = true">禁用遮罩层关闭</zt-button>
    <zt-modal :visible.sync="show2" title="禁用遮罩层关闭" :mask-closable="false">禁用遮罩层关闭</zt-modal>
    <zt-button type="info" @click="show3 = true">禁用底部</zt-button>
    <zt-modal :visible.sync="show3" title="禁用底部" :show-footer="false">禁用底部</zt-modal>
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

## 嵌套对话框

::: demo

```html
<template>
    <zt-button type="primary" @click="show1 = true">嵌套对话框</zt-button>
    <zt-modal :visible.sync="show1" title="外层对话框" width="50%" :append-to-body="true">
        <div>我是外层对话框</div>
        <zt-modal :visible.sync="show2" title="内层对话框" top="20vh">内层对话框</zt-modal>
        <template #footer>
            <div>
                <zt-button size="small" @click="show1 = false">取 消</zt-button>
                <zt-button type="primary" size="small" @click="show2 = true">打开内层对话框</zt-button>
            </div>
        </template>
    </zt-modal>
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

## 事件回调

::: demo

```html
<template>
    <zt-button type="primary" @click="show = true">打开和关闭的回调</zt-button>
    <zt-modal 
      :visible.sync="show" 
      title="事件回调" 
      @open="open" 
      @close="close" 
      @opened="opened" 
      @closed="closed"
    >打开和关闭的回调</zt-modal>
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
                this.$msg.success('打开对话框')
            },
            opened() {
                this.$msg.success('打开对话框动画结束的回调')
            },
            close() {
                this.$msg('关闭对话框')
            },
            closed() {
                this.$msg('关闭对话框动画结束的回调')
            }
        }
    }
</script>
```
:::

## API

### Modal Props

| 参数             | 说明                               | 类型    | 可选值 | 默认值 |
| :--------------- | :--------------------------------- | :------ | ------ | :----- |
| visible          | 是否显示对话框，支持 .sync 修饰符  | Boolean | —      | false  |
| title            | 对话框标题，也可通过具名 slot 传入 | String  | —      | —      |
| width            | 对话框宽度                         | String  | —      | 30%    |
| top              | 对话框距离顶部偏移量               | String  | —      | 15vh   |
| mask-closable    | 是否禁用遮罩层关闭                 | Boolean | —      | true   |
| show-close       | 是否显示关闭按钮                   | Boolean | —      | true   |
| show-footer      | 是否显示底部                       | Boolean | —      | true   |
| append-to-body   | 是否插入至 body 元素上             | Boolean | —      | false  |

### Modal Slots

| 名称   | 说明                   |
| ------ | :--------------------- |
| —      | 对话框的内容           |
| title  | 对话框标题区的内容     |
| footer | 对话框按钮操作区的内容 |

### Modal Events

| 事件名    | 说明                       | 回调参数 |
| --------- | :------------------------- | :------- |
| open      | 对话框打开的回调           | —        |
| opend     | 对话框打开动画结束时的回调 | —        |
| close     | 对话框关闭的回调           | —        |
| closed    | 对话框关闭动画结束时的回调 | —        |
| on-ok     | 点击确定的回调             | —        |
| on-cancel | 点击取消的回调             | —        |
