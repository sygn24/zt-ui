# Input输入框

## 基础用法

使用 `v-model` 可以双向绑定数据
::: demo 使用 `v-model` 可以双向绑定数据

```html
<template>
    <zt-input v-model="input" placeholder="请输入内容"></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
```

:::

## 自定义大小

可以直接设置 `style` 来改变输入框的宽、高
::: demo 可以直接设置 `style` 来改变输入框的宽、高

```html
<template>
    <zt-input v-model="input" placeholder="请输入内容" style="width: 150px; height: 30px" clearable></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件
::: demo 通过 `disabled` 属性指定是否禁用 input 组件

```html
<template>
    <zt-input v-model="input" placeholder="请输入内容" disabled></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
```

:::

## 可清空

设置 `clearable` 属性即可得到一个可清空的输入框
::: demo 设置 `clearable` 属性即可得到一个可清空的输入框

```html
<template>
    <zt-input v-model="input" placeholder="请输入内容" clearable></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input: '可清空'
            }
        }
    }
</script>
```

:::

## 密码框

设置 `show-password` 属性即可得到一个可切换显示隐藏的密码框
::: demo 设置`show-password`属性即可得到一个可切换显示隐藏的密码框，同时也可以设置 `clearable` 属性

```html
<template>
    <zt-input v-model="input1" type="password" placeholder="请输入内容" show-password></zt-input>
    <zt-input v-model="input2" type="password" placeholder="请输入内容" show-password clearable></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input1: '',
                input2: ''
            }
        }
    }
</script>
```

:::

## 带 icon 的输入框

带有图标标记输入类型
::: demo 带有图标标记输入类型

```html
<template>
    <div class="row-flex" style="align-items:center">
        <h4>属性方式：</h4>
        <div class="col">
            <zt-input placeholder="请输入内容" v-model="value1" style="width:180px" prefix-icon="user-fill"> </zt-input>
            <zt-input placeholder="请输入内容" v-model="value2" style="width:180px" suffix-icon="search"></zt-input>
        </div>
    </div>
    <div class="row-flex" style="align-items:center">
        <h4>slot 方式：</h4>
        <div class="col">
            <zt-input placeholder="请输入内容" v-model="value1" style="width:180px">
                <span slot="prefix">
                    <zt-icon icon="user-fill"></zt-icon>
                </span>
            </zt-input>
            <zt-input placeholder="请输入内容" v-model="value2" style="width:180px">
                <span slot="suffix">
                    <zt-icon icon="search"></zt-icon>
                </span>
            </zt-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '',
                value2: ''
            }
        }
    }
</script>
```

:::

## 限制输入长度

开启属性 `show-limit` 可以显示字数统计，需配合 `maxlength` 属性来限制输入长度。
::: demo 开启属性 `show-limit` 可以显示字数统计，需配合 `maxlength` 属性来限制输入长度。

```html
<template>
    <zt-input placeholder="请输入内容" v-model="input" maxlength="10" show-limit></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
```

:::

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`
::: demo 用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`，可以设置 `rows` 属性指定文本域行数

```html
<template>
    <zt-input :rows="2" type="textarea" maxlength="100" show-limit v-model="input"></zt-input>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
```

:::

## 聚焦

::: demo

```html
<template>
    <div class="row">
        <div class="row">
            <h4>方法</h4>
        </div>
        <div class="row">
            <zt-button size="small" type="primary" @click="onFocus">获取焦点</zt-button>
            <zt-button size="small" type="primary" @click="onBlur">失去焦点</zt-button>
            <zt-button size="small" type="primary" @click="onSelect">选中</zt-button>
        </div>
        <zt-input ref="input" placeholder="聚焦的方法" v-model="value1" @keyupEnter="keyupEnter"></zt-input>
    </div>
    <div class="row">
        <div class="row">
            <h4>事件回调</h4>
        </div>
        <zt-input
            @input="onInput"
            @focus="foucs"
            @blur="blur"
            @change="change"
            @keyupEnter="keyupEnter"
            v-model="value2"
            placeholder="事件的回调"
        ></zt-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '聚焦的方法',
                value2: '事件的回调'
            }
        },
        methods: {
            onFocus() {
                this.$refs.input.focus()
            },
            onBlur() {
                this.$refs.input.blur()
            },
            onSelect() {
                this.$refs.input.select()
            },
            keyupEnter(e) {
                this.$msg('按下回车键')
            },
            onInput(val) {
                this.$msg('输入的值:' + val)
            },
            foucs(val) {
                this.$msg('聚焦时的值:' + val)
            },
            blur(val) {
                this.$msg('失焦时的值:' + val)
            },
            change(val) {
                this.$msg('改变后的值:' + val)
            }
        }
    }
</script>
```

:::

## API

### Input Props

| <div style="width:120px">参数</div> | <div style="width:120px">说明</div>     | <div style="width:120px">类型</div> | <div style="width:400px"> 可选值</div>                                   | 默认值 |
| :---------------------------------- | :-------------------------------------- | :---------------------------------- | :----------------------------------------------------------------------- | :----- |
| type                                | 类型                                    | String                              | `text` 、`password`、`textarea`、`url`、`email`、`date`、`number`、`tel` | text   |
| value                               | 绑定值                                  | String / Number                     | —                                                                        | —      |
| disabled                            | 是否禁用状态                            | Boolean                             | —                                                                        | false  |
| clearable                           | 是否可清空                              | Boolean                             | —                                                                        | false  |
| show-password                       | 是否显示切换密码图标                    | Boolean                             | —                                                                        | false  |
| show-limit                          | 是否显示输入字数统计                    | Boolean                             | —                                                                        | false  |
| prefix-icon                         | 输入框头部图标                          | String                              | —                                                                        | —      |
| suffix-icon                         | 输入框尾部图标                          | String                              | —                                                                        | —      |
| rows                                | 输入框行数，只对 `type="textarea"` 有效 | Number                              | —                                                                        | 2      |
| maxlength                           | 最大输入长度                            | Number                              | —                                                                        | —      |

### Input Events

| 事件名     | 说明                                   | 回调参数 |
| :--------- | :------------------------------------- | -------- |
| blur       | 在 Input 失去焦点时触发                | value    |
| focus      | 在 Input 获得焦点时触发                | value    |
| change     | 仅在输入框失去焦点或用户按下回车时触发 | value    |
| input      | 在 Input 值改变时触发                  | value    |
| keyupEnter | 按下回车键触发                         | value    |

### Input Methods

| 方法名 | 说明                |
| :----- | :------------------ |
| focus  | 使 input 获取焦点   |
| blur   | 使 input 失去焦点   |
| select | 选中 input 中的文字 |

### Input Slots

| 名称   | 说明           |
| :----- | :------------- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
