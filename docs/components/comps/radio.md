# Radio 单选框

## 单独使用

使用 v-model 可以双向绑定数据
::: demo 使用 v-model 可以双向绑定数据

```html
<template>
    <zt-radio label="选项一" v-model="value" @change="change">选项一</zt-radio>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {
            change(val) {
                this.$msg(this.value)
                console.log(val)
            }
        }
    }
</script>
```

:::

## 禁用状态

单选框不可用的状态
::: demo 只要在`zt-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用

```html
<template>
    <zt-radio v-model="value1" label="禁用" disabled>禁用</zt-radio>
    <zt-radio v-model="value2" label="选中且禁用" disabled>选中且禁用</zt-radio>
</template>

<script>
    export default {
        data() {
            return {
                value1: '',
                value2: '选中且禁用'
            }
        }
    }
</script>
```

:::

## 单选框组

适用于在多个互斥的选项中选择的场景
::: demo 结合 `zt-radio-group` 元素和子元素 `zt-radio` 可以实现单选组，在 `zt-radio-group` 中绑定 `v-model`，在`zt-radio`中设置好 `label` 即可，无需再给每一个 `zt-radio` 绑定变量，另外，还提供了 `change` 事件来响应变化，它会传入一个参数 `value`

```html
<template>
    <div class="row">
        <zt-radio-group v-model="value1" @change="groupChange">
            <zt-radio label="选项四"></zt-radio>
            <zt-radio label="选项五"></zt-radio>
            <zt-radio label="选项六"></zt-radio>
        </zt-radio-group>
    </div>
    <div class="row">
        <zt-radio-group v-model="value2" disabled>
            <zt-radio label="选项四"></zt-radio>
            <zt-radio label="选项五"></zt-radio>
            <zt-radio label="选项六"></zt-radio>
        </zt-radio-group>
    </div>
    <div class="row">
        <zt-radio-group v-model="value3">
            <zt-radio label="选项七"></zt-radio>
            <zt-radio label="选项八" disabled></zt-radio>
            <zt-radio label="选项九"></zt-radio>
        </zt-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '选项四',
                value2: '选项五',
                value3: ''
            }
        },
        methods: {
            groupChange(val) {
                this.$msg(this.value1)
                console.log(val)
            }
        }
    }
</script>
```

:::

## 带有边框

设置`border`属性可以渲染为带有边框的单选框
::: demo 设置`border`属性可以渲染为带有边框的单选框

```html
<template>
    <div class="row">
        <zt-radio-group v-model="value1">
            <zt-radio label="备选一" border></zt-radio>
            <zt-radio label="备选二" border></zt-radio>
            <zt-radio label="备选三" border></zt-radio>
            <zt-radio label="备选四" border></zt-radio>
        </zt-radio-group>
    </div>
    <div class="row">
        <zt-radio-group v-model="value2" disabled>
            <zt-radio label="备选一" border></zt-radio>
            <zt-radio label="备选二" border></zt-radio>
            <zt-radio label="备选三" border></zt-radio>
            <zt-radio label="备选四" border></zt-radio>
        </zt-radio-group>
    </div>
    <div class="row">
        <zt-radio-group v-model="value3">
            <zt-radio label="备选一" border></zt-radio>
            <zt-radio label="备选二" border></zt-radio>
            <zt-radio label="备选三" border disabled></zt-radio>
            <zt-radio label="备选四" border></zt-radio>
        </zt-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '',
                value2: '备选二',
                value3: ''
            }
        }
    }
</script>
```

:::

## 按钮样式

`zt-radio-group`设置`button`属性可以渲染按钮样式的单选框组
::: demo `zt-radio-group`设置`button`属性可以渲染按钮样式的单选框组，此时给`zt-radio`设置`border`属性或者给`zt-radio-group`设置`vertical`属性无效

```html
<template>
    <div class="row">
        <zt-radio-group v-model="value1" button>
            <zt-radio label="备选四"></zt-radio>
            <zt-radio label="备选五"></zt-radio>
            <zt-radio label="备选六"></zt-radio>
            <zt-radio label="备选七"></zt-radio>
            <zt-radio label="备选八"></zt-radio>
        </zt-radio-group>
    </div>
    <div class="row">
        <zt-radio-group v-model="value2" button disabled>
            <zt-radio label="备选四"></zt-radio>
            <zt-radio label="备选五"></zt-radio>
            <zt-radio label="备选六"></zt-radio>
            <zt-radio label="备选七"></zt-radio>
            <zt-radio label="备选八"></zt-radio>
        </zt-radio-group>
    </div>
    <div class="row">
        <zt-radio-group v-model="value3" button>
            <zt-radio label="备选四"></zt-radio>
            <zt-radio label="备选五"></zt-radio>
            <zt-radio label="备选六"></zt-radio>
            <zt-radio label="备选七" border></zt-radio>
            <zt-radio label="备选八" disabled></zt-radio>
        </zt-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '备选四',
                value2: '备选五',
                value3: ''
            }
        }
    }
</script>
```

:::

## 不同尺寸

设置`size`属性渲染不同尺寸的单选框，默认`medium`，只在边框或按钮模式下生效
::: demo 设置`size`属性渲染不同尺寸的单选框，默认`medium`，只在边框或按钮模式下生效

```html
<template>
    <div class="row-flex">
        <div class="col">
            <div class="row">
                <zt-radio-group v-model="value1" button size="large">
                    <zt-radio label="备选四"></zt-radio>
                    <zt-radio label="备选五"></zt-radio>
                </zt-radio-group>
            </div>
            <div class="row">
                <zt-radio-group v-model="value1" button size="medium">
                    <zt-radio label="备选四"></zt-radio>
                    <zt-radio label="备选五"></zt-radio>
                </zt-radio-group>
            </div>
            <div class="row">
                <zt-radio-group v-model="value1" button size="small">
                    <zt-radio label="备选四"></zt-radio>
                    <zt-radio label="备选五"></zt-radio>
                </zt-radio-group>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <zt-radio-group v-model="value2" size="large">
                    <zt-radio label="备选一" border></zt-radio>
                    <zt-radio label="备选二" border></zt-radio>
                </zt-radio-group>
            </div>
            <div class="row">
                <zt-radio-group v-model="value2">
                    <zt-radio label="备选一" border></zt-radio>
                    <zt-radio label="备选二" border></zt-radio>
                </zt-radio-group>
            </div>
            <div class="row">
                <zt-radio-group v-model="value2" size="small">
                    <zt-radio label="备选一" border></zt-radio>
                    <zt-radio label="备选二" border></zt-radio>
                </zt-radio-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '备选五',
                value2: '备选一'
            }
        }
    }
</script>
```

:::

## 垂直显示

`zt-radio-group`设置`vertical`属性可以垂直显示，按钮样式下无效
::: demo `zt-radio-group`设置`vertical`属性可以垂直显示，按钮样式下无效

```html
<template>
    <div class="row-flex ">
        <div class="col">
            <zt-radio-group v-model="value1" vertical>
                <zt-radio label="选项四">选项四</zt-radio>
                <zt-radio label="选项五">选项五</zt-radio>
                <zt-radio label="选项六">选项六</zt-radio>
            </zt-radio-group>
        </div>
        <div class="col">
            <zt-radio-group v-model="value2" vertical border>
                <zt-radio label="选项四">选项四</zt-radio>
                <zt-radio label="选项五">选项五</zt-radio>
                <zt-radio label="选项六">选项六</zt-radio>
            </zt-radio-group>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: '选项四',
                value2: '选项四'
            }
        }
    }
</script>
```

:::

## API

### Radio Props

| 参数     | <div style="width:250px">说明</div> | <div style="width:200px"> 类型</div> | <div style="width:200px"> 可选值</div> | 默认值 |
| :------- | :---------------------------------- | :----------------------------------- | :------------------------------------- | :----- |
| value    | 绑定值,可使用 v-model               | string / number / boolean            | —                                      | —      |
| label    | Radio 的 value                      | string / number / boolean            | —                                      | —      |
| size     | 尺寸,只在边框或按钮模式下生效       | String                               | `large`, `medium`, `small`             | medium |
| disabled | 是否禁用状态                        | Boolean                              | —                                      | false  |
| border   | 是否显示边框                        | Boolean                              | —                                      | false  |

### Radio Events

| 事件名 | 说明                   | 回调参数              |
| ------ | :--------------------- | :-------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### Radio-group Attributes

| 参数     | <div style="width:250px">说明</div> | <div style="width:200px"> 类型</div> | <div style="width:200px"> 可选值</div> | 默认值 |
| :------- | :---------------------------------- | :----------------------------------- | :------------------------------------- | :----- |
| value    | 绑定值,可使用 v-model               | string / number / boolean            | —                                      | —      |
| size     | 尺寸,只在边框或按钮模式下生效       | String                               | `large`, `medium`, `small`             | medium |
| disabled | 是否禁用状态                        | Boolean                              | —                                      | false  |
| border   | 是否显示边框                        | Boolean                              | —                                      | false  |
| button   | 是否开启按钮样式                    | Boolean                              | —                                      | false  |
| vertical | 是否垂直显示                        | Boolean                              | —                                      | false  |

### Radio-group Events

| 事件名 | 说明                   | 回调参数              |
| ------ | :--------------------- | :-------------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
