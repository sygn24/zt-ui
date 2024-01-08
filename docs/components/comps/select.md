# Select 选择器

## 基本用法

适用广泛的基础单选

::: demo 适用广泛的基础单选

```html
<template>
    <zt-select v-model="value" placeholder="请选择食物">
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '龙须面'
                    },
                    {
                        value: '选项4',
                        label: '北京烤鸭'
                    }
                ],
                value: ''
            }
        }
    }
</script>
```

:::

## 禁用状态

选择器不可用状态

::: demo 为 `zt-select` 设置 `disabled` 属性，则整个选择器不可用

```html
<template>
    <zt-select v-model="value" disabled>
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '龙须面'
                    },
                    {
                        value: '选项4',
                        label: '北京烤鸭'
                    }
                ],
                value: ''
            }
        }
    }
</script>
```

:::

## 有禁用选项

适用广泛的基础单选

::: demo 适用广泛的基础单选

```html
<template>
    <zt-select v-model="value">
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></zt-option>
    </zt-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶',
                        disabled: true
                    },
                    {
                        value: '选项3',
                        label: '龙须面'
                    },
                    {
                        value: '选项4',
                        label: '北京烤鸭'
                    }
                ],
                value: ''
            }
        }
    }
</script>
```

:::

## 可清空单选

包含清空按钮，可将选择器清空为初始状态

::: demo 为 `zt-select` 设置 `clearable` 属性，则可将选择器清空

```html
<template>
    <zt-select v-model="value" clearable @change="change">
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    },
                    {
                        value: '选项3',
                        label: '龙须面'
                    },
                    {
                        value: '选项4',
                        label: '北京烤鸭'
                    }
                ],
                value: '选项1'
            }
        },
        methods: {
            change(label) {
                this.$msg('选中: ' + this.value + '--' + label)
            }
        }
    }
</script>
```

:::

## 自定义

自定义宽、高、字体大小

::: demo 通过设置 `width`、`height`、`font-size`属性来自定义宽、高、字体大小

```html
<template>
    <zt-select v-model="value" width="100" height="30" font-size="13">
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [
                    {
                        value: 10,
                        label: '10条/页'
                    },
                    {
                        value: 20,
                        label: '20条/页'
                    },
                    {
                        value: 30,
                        label: '30条/页'
                    },
                    {
                        value: 40,
                        label: '40条/页'
                    }
                ],
                value: 20
            }
        }
    }
</script>
```

:::

## 没有选项数据

::: demo

```html
<template>
    <zt-select v-model="value" placeholder="请选择食物">
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
</template>

<script>
    export default {
        data() {
            return {
                options: [],
                value: ''
            }
        }
    }
</script>
```

:::

## API

### Select Props

| 参数        | 说明           | 类型            | 可选值 | 默认值 |
| :---------- | :------------- | :-------------- | ------ | :----- |
| value       | 绑定值         | String / Number | —      | —      |
| placeholder | 占位符         | String          | —      | 请选择 |
| disabled    | 是否禁用状态   | Boolean         | —      | false  |
| clearable   | 是否可清空选项 | Boolean         | —      | false  |
| width       | 宽度           | String / Number | —      | 240    |
| height      | 高度           | String / Number | —      | 40     |
| font-size   | 字体大小       | String / Number | —      | 14     |

### Select Events

| 事件名 | 说明           | 回调参数              |
| ------ | :------------- | :-------------------- |
| change | 选项改变时触发 | 目前的选中的 label 值 |

### Option Props

| 参数     | 说明           | 类型            | 可选值 | 默认值 |
| :------- | :------------- | :-------------- | ------ | :----- |
| value    | 选项的值       | String / Number | —      | —      |
| label    | 选项的标签     | String          | —      | —      |
| disabled | 是否禁用该选项 | Boolean         | —      | false  |
