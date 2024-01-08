# Checkbox 复选框

## 单独使用

使用 v-model 可以双向绑定数据
::: demo 使用 v-model 可以双向绑定数据，只能为`Boolean`类型

```html
<template>
    <zt-checkbox label="选项一" v-model="value" @change="change">选项一</zt-checkbox>
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
                this.$msg('选中状态' + this.value)
                console.log(val)
            }
        }
    }
</script>
```

:::

## 禁用状态

复选框不可用的状态
::: demo 只要在`zt-checkbox`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用

```html
<template>
    <zt-checkbox v-model="value1" label="禁用" disabled></zt-checkbox>
    <zt-checkbox v-model="value2" label="选中且禁用" disabled></zt-checkbox>
</template>

<script>
    export default {
        data() {
            return {
                value1: false,
                value2: true
            }
        }
    }
</script>
```

:::

## 复选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项
::: demo 结合`zt-checkbox-group`元素能把多个 `checkbox` 管理为一组，只需要在 `Group` 中使用`v-model`绑定`Array`类型的变量即可。 `zt-checkbox` 的 `label`属性是该 `checkbox` 对应的值，若该标签中无内容，则该属性也充当 `checkbox` 按钮后的介绍。label 与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<template>
    <div class="row">
        <zt-checkbox-group v-model="value1" @change="groupChange">
            <zt-checkbox label="选项四"></zt-checkbox>
            <zt-checkbox label="选项五"></zt-checkbox>
            <zt-checkbox label="选项六"></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value2" disabled>
            <zt-checkbox label="选项四"></zt-checkbox>
            <zt-checkbox label="选项五"></zt-checkbox>
            <zt-checkbox label="选项六"></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value3">
            <zt-checkbox label="选项七"></zt-checkbox>
            <zt-checkbox label="选项八" disabled></zt-checkbox>
            <zt-checkbox label="选项九"></zt-checkbox>
        </zt-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: ['选项四'],
                value2: ['选项五'],
                value3: []
            }
        },
        methods: {
            groupChange(val) {
                this.$msg('当前选中的值：' + this.value1)
                console.log(val)
            }
        }
    }
</script>
```

:::

## 带有边框

设置`border`属性可以渲染为带有边框的复选框
::: demo 设置`border`属性可以渲染为带有边框的复选框

```html
<template>
    <div class="row">
        <zt-checkbox-group v-model="value1">
            <zt-checkbox label="备选一" border></zt-checkbox>
            <zt-checkbox label="备选二" border></zt-checkbox>
            <zt-checkbox label="备选三" border></zt-checkbox>
            <zt-checkbox label="备选四" border></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value2" disabled>
            <zt-checkbox label="备选一" border></zt-checkbox>
            <zt-checkbox label="备选二" border></zt-checkbox>
            <zt-checkbox label="备选三" border></zt-checkbox>
            <zt-checkbox label="备选四" border></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value3">
            <zt-checkbox label="备选一" border></zt-checkbox>
            <zt-checkbox label="备选二" border></zt-checkbox>
            <zt-checkbox label="备选三" border disabled></zt-checkbox>
            <zt-checkbox label="备选四" border></zt-checkbox>
        </zt-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: ['备选一', '备选三'],
                value2: ['备选一'],
                value3: []
            }
        }
    }
</script>
```

:::

## 按钮样式

`zt-checkbox-group`设置`button`属性可以渲染按钮样式的复选框组
::: demo `zt-checkbox-group`设置`button`属性可以渲染按钮样式的复选框组，此时给`zt-checkbox`设置`border`属性或者给`zt-checkbox-group`设置`vertical`属性无效

```html
<template>
    <div class="row">
        <zt-checkbox-group v-model="value1" button>
            <zt-checkbox label="备选四"></zt-checkbox>
            <zt-checkbox label="备选五"></zt-checkbox>
            <zt-checkbox label="备选六"></zt-checkbox>
            <zt-checkbox label="备选七"></zt-checkbox>
            <zt-checkbox label="备选八"></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value2" button disabled>
            <zt-checkbox label="备选四"></zt-checkbox>
            <zt-checkbox label="备选五"></zt-checkbox>
            <zt-checkbox label="备选六"></zt-checkbox>
            <zt-checkbox label="备选七"></zt-checkbox>
            <zt-checkbox label="备选八"></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value3" button vertical>
            <zt-checkbox label="备选四"></zt-checkbox>
            <zt-checkbox label="备选五"></zt-checkbox>
            <zt-checkbox label="备选六"></zt-checkbox>
            <zt-checkbox label="备选七" border></zt-checkbox>
            <zt-checkbox label="备选八" disabled></zt-checkbox>
        </zt-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: ['备选四', '备选五'],
                value2: ['备选四'],
                value3: []
            }
        }
    }
</script>
```

:::

## 显示全选按钮

`zt-checkbox-group`设置`show-check-all`属性可以显示全选按钮，用于实现全选的效果
::: demo `zt-checkbox-group`设置`show-check-all`属性可以渲染按钮样式的复选框组，用于实现全选的效果

```html
<template>
    <div class="row">
        <zt-checkbox-group v-model="value1" show-check-all @checkAllChange="checkAllChange" @change="groupChange">
            <zt-checkbox v-for="item in options1" :key="item" :label="item"></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value2" show-check-all disabled>
            <zt-checkbox v-for="item in options1" :key="item" :label="item"></zt-checkbox>
        </zt-checkbox-group>
    </div>
    <div class="row">
        <zt-checkbox-group v-model="value3" show-check-all>
            <zt-checkbox label="选项七"></zt-checkbox>
            <zt-checkbox label="选项八" disabled></zt-checkbox>
            <zt-checkbox label="选项九"></zt-checkbox>
        </zt-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options1: ['选项一', '选项二', '选项三', '选项四'],
                value1: ['选项一', '选项三'],
                value2: ['选项二'],
                value3: ['选项七']
            }
        },
        methods: {
            checkAllChange(val) {
                this.$msg('当前选中的值：' + this.value1)
                console.log(val)
            },
            groupChange(val) {
                this.$msg('当前选中的值：' + this.value1)
                console.log(val)
            }
        }
    }
</script>
```

:::

## 不同尺寸

设置`size`属性渲染不同尺寸的复选框，默认`medium`，只在边框或按钮模式下生效
::: demo 设置`size`属性渲染不同尺寸的复选框，默认`medium`，只在边框或按钮模式下生效

```html
<template>
    <div class="row-flex">
        <div class="col">
            <div class="row">
                <zt-checkbox-group v-model="value1" button size="large">
                    <zt-checkbox label="备选四"></zt-checkbox>
                    <zt-checkbox label="备选五"></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="row">
                <zt-checkbox-group v-model="value1" button size="medium">
                    <zt-checkbox label="备选四"></zt-checkbox>
                    <zt-checkbox label="备选五"></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="row">
                <zt-checkbox-group v-model="value1" button size="small">
                    <zt-checkbox label="备选四"></zt-checkbox>
                    <zt-checkbox label="备选五"></zt-checkbox>
                </zt-checkbox-group>
            </div>
        </div>
        <div class="col">
            <div class="row">
                <zt-checkbox-group v-model="value2" size="large">
                    <zt-checkbox label="备选一" border></zt-checkbox>
                    <zt-checkbox label="备选二" border></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="row">
                <zt-checkbox-group v-model="value2">
                    <zt-checkbox label="备选一" border></zt-checkbox>
                    <zt-checkbox label="备选二" border></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="row">
                <zt-checkbox-group v-model="value2" size="small">
                    <zt-checkbox label="备选一" border></zt-checkbox>
                    <zt-checkbox label="备选二" border></zt-checkbox>
                </zt-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: ['备选五'],
                value2: ['备选一']
            }
        }
    }
</script>
```

:::

## 垂直显示

`zt-checkbox-group`设置`vertical`属性可以垂直显示，按钮样式下无效
::: demo `zt-checkbox-group`设置`vertical`属性可以垂直显示，按钮样式下无效

```html
<template>
    <div class="row-flex ">
        <div class="col">
            <zt-checkbox-group v-model="value1" vertical>
                <zt-checkbox label="选项四">选项四</zt-checkbox>
                <zt-checkbox label="选项五">选项五</zt-checkbox>
                <zt-checkbox label="选项六">选项六</zt-checkbox>
            </zt-checkbox-group>
        </div>
        <div class="col">
            <zt-checkbox-group v-model="value2" vertical border>
                <zt-checkbox label="选项四">选项四</zt-checkbox>
                <zt-checkbox label="选项五">选项五</zt-checkbox>
                <zt-checkbox label="选项六">选项六</zt-checkbox>
            </zt-checkbox-group>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value1: ['选项四'],
                value2: ['选项四']
            }
        }
    }
</script>
```

:::

## API

### Checkbox Props

| 参数     | <div style="width:250px">说明</div> | <div style="width:200px"> 类型</div> | <div style="width:200px"> 可选值</div> | 默认值 |
| :------- | :---------------------------------- | :----------------------------------- | :------------------------------------- | :----- |
| value    | 绑定值,只能为Boolean类型，可使用 v-model | Boolean           | —                                      | — |
| label    | checkbox 的 value                   | string / number / boolean            | —                                      | —      |
| size     | 尺寸,只在边框或按钮模式下生效       | String                               | `large`, `medium`, `small`             | medium |
| disabled | 是否禁用状态                        | Boolean                              | —                                      | false  |
| border   | 是否显示边框                        | Boolean                              | —                                      | false  |

### Checkbox Events

| 事件名 | 说明                                         | 回调参数     |
| ------ | :------------------------------------------- | :----------- |
| change | 只在单独使用时有效，在选项状态发生改变时触发 | true / false |

### Checkbox-group Attributes

| <div style="width:120px">参数</div> | <div style="width:250px">说明</div> | <div style="width:200px"> 类型</div> | <div style="width:200px"> 可选值</div> | 默认值 |
| :---------------------------------- | :---------------------------------- | :----------------------------------- | :------------------------------------- | :----- |
| value                               | 绑定值,可使用 v-model               | string / number / boolean            | —                                      | —      |
| size                                | 尺寸,只在边框或按钮模式下生效       | String                               | `large`, `medium`, `small`             | medium |
| show-check-all                      | 是否显示全选按钮                    | Boolean                              | —                                      | false  |
| disabled                            | 是否禁用状态                        | Boolean                              | —                                      | false  |
| border                              | 是否显示边框                        | Boolean                              | —                                      | false  |
| button                              | 是否开启按钮样式                    | Boolean                              | —                                      | false  |
| vertical                            | 是否垂直显示                        | Boolean                              | —                                      | false  |

### Checkbox-group Events

| 事件名 | 说明                                     | 回调参数 |
| ------ | :--------------------------------------- | :------- |
| change | 绑定值变化时触发的事件，返回已选中的数组 | [...]    |
| checkAllChange | 点击全选按钮时触发，返回已选中的数组 | [...]    |
