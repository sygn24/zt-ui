# Button 按钮

## 基础用法

基础的按钮用法。
::: demo 使用 `type`、`round` 和 `circle` 属性来定义 Button 的样式。

```html
<div class="row">
    <zt-button @click="handleClick">默认按钮</zt-button>
    <zt-button type="dashed">虚线按钮</zt-button>
    <zt-button type="primary">主要按钮</zt-button>
    <zt-button type="info">信息按钮</zt-button>
    <zt-button type="success">成功按钮</zt-button>
    <zt-button type="warning">警告按钮</zt-button>
    <zt-button type="danger">危险按钮</zt-button>
</div>
<div class="row">
    <zt-button round>圆角按钮</zt-button>
    <zt-button round type="dashed">虚线按钮</zt-button>
    <zt-button round type="primary">主要按钮</zt-button>
    <zt-button round type="info">信息按钮</zt-button>
    <zt-button round type="success">成功按钮</zt-button>
    <zt-button round type="warning">警告按钮</zt-button>
    <zt-button round type="danger">危险按钮</zt-button>
</div>
<div class="row">
    <zt-button circle icon="search"></zt-button>
    <zt-button circle icon="good" type="success"></zt-button>
    <zt-button circle icon="close" type="danger"></zt-button>
    <zt-button circle icon="upload" type="dashed"></zt-button>
    <zt-button circle>好</zt-button>
</div>
<script>
    export default {
        methods: {
            handleClick() {
                this.$msg('点击了')
            }
        }
    }
</script>
```

:::

## 禁用状态

按钮不可用状态。
::: demo 设置`disabled`属性来定义按钮是否可用，接受一个`Boolean`值。

```html
<zt-button disabled @click="handleClick()">默认按钮</zt-button>
<zt-button disabled type="dashed">虚线按钮</zt-button>
<zt-button disabled type="primary">主要按钮</zt-button>
<zt-button disabled type="info">信息按钮</zt-button>
<zt-button disabled type="success">成功按钮</zt-button>
<zt-button disabled type="warning">警告按钮</zt-button>
<zt-button disabled type="danger">危险按钮</zt-button>
<script>
    export default {
        methods: {
            handleClick() {
                this.$msg('点击了')
            }
        }
    }
</script>
```

:::

## 文字按钮

没有边框和背景色的按钮。
::: demo 设置`type`属性值为`text`即可。

```html
<zt-button type="text">文字按钮</zt-button> <zt-button type="text" disabled>文字按钮</zt-button>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
::: demo 设置 `icon` 属性即可，`icon` 的列表可以参考 `icon` 组件，也可以设置在文字右边的 `icon` ，只要使用`zt-icon`标签即可，可以使用自定义图标。

```html
<div class="row">
    <zt-button icon="share" type="primary"></zt-button>
    <zt-button icon="good" type="primary"></zt-button>
    <zt-button icon="search" type="primary">搜索</zt-button>
    <zt-button type="primary">上传 <zt-icon icon="upload" style="margin-left: 5px"></zt-icon></zt-button>
</div>
<div class="row">
    <zt-button circle icon="success" size="large" type="primary"></zt-button>
    <zt-button circle icon="good" size="medium" type="success"></zt-button>
    <zt-button circle icon="close" size="small" type="danger"></zt-button>
    <zt-button circle icon="upload" size="mini" type="dashed"></zt-button>
</div>
```

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。
::: demo 使用`<zt-button-group>`标签来嵌套你的按钮。

```html
<zt-button-group>
    <zt-button type="primary" icon="arrow-left-bold">上一页</zt-button>
    <zt-button type="primary">下一页<zt-icon icon="arrow-right-bold" style="margin-left: 5px" /></zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button icon="arrow-left-bold" disabled>上一页</zt-button>
    <zt-button>下一页<zt-icon icon="arrow-right-bold" style="margin-left: 5px" /></zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button>取消</zt-button>
    <zt-button type="primary">确定</zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button type="primary" icon="edit">编辑</zt-button>
    <zt-button type="primary" icon="share">分享</zt-button>
    <zt-button type="primary" icon="good">点赞</zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button icon="edit">编辑</zt-button>
    <zt-button icon="share">分享</zt-button>
    <zt-button icon="good">点赞</zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button icon="edit" type="primary">编辑</zt-button>
    <zt-button icon="share">分享</zt-button>
    <zt-button icon="good" type="dashed">点赞</zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button type="primary" round icon="edit">编辑</zt-button>
    <zt-button type="primary" round icon="share">分享</zt-button>
    <zt-button type="primary" round icon="good">点赞</zt-button>
</zt-button-group>
```

:::

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。
::: demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<zt-button type="info" :loading="loading" @click="loadingClick">信息按钮</zt-button>
<zt-button type="success" loading>成功按钮</zt-button>
<zt-button type="warning" loading>警告按钮</zt-button>
<zt-button type="danger" loading>危险按钮</zt-button>
<zt-button circle loading></zt-button>
<script>
    export default {
        data() {
            return {
                loading: false
            }
        },
        methods: {
            loadingClick() {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                }, 2000)
            }
        }
    }
</script>
```

:::

## 不同尺寸

不同尺寸的按钮，使用`size`属性来定义按钮尺寸，默认`medium`
::: demo 不同尺寸的按钮，使用`size`属性来定义按钮尺寸，默认`medium`

```html
<zt-button size="large">超大按钮</zt-button>
<zt-button type="primary" size="medium">中等按钮</zt-button>
<zt-button type="success" size="small">小型按钮</zt-button>
<zt-button type="danger" size="mini">超小按钮</zt-button>
```

:::


## 自定义

可以设置`padding`、`backgroundColor`、`color`、`borderColor`、`fontSize`属性
::: demo 可以设置`padding`、`backgroundColor`、`color`、`borderColor`、`fontSize`属性

```html
<zt-button padding="15px 15px" icon="success"></zt-button>
<zt-button type="success" font-size="20px" icon="upload">自定义字体大小</zt-button>
<zt-button background-color="#666" color="yellow" border-color="red">自定义颜色</zt-button>
<zt-button type="primary">
    <zt-icon icon="eyeoff" color="red" />
    使用icon组件
    <zt-icon icon="eye" />
</zt-button>
```

:::

## API

### Button Props

| 参数       | <div style="width:120px">说明</div> | 类型    | <div style="width:400px"> 可选值</div>                                 | 默认值  |
| :--------- | :---------------------------------- | :------ | :--------------------------------------------------------------------- | :------ |
| type       | 类型                                | String  | `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、 | default |
| size       | 尺寸                                | String  | `large`, `medium`, `small`, `mini`                                     | medium  |
| round      | 是否圆角按钮                        | Boolean | —                                                                      | false   |
| circle     | 是否圆形按钮                        | Boolean | —                                                                      | false   |
| loading    | 是否加载中状态                      | Boolean | —                                                                      | false   |
| disabled   | 是否禁用状态                        | Boolean | —                                                                      | false   |
| shake      | 点击后是否抖动                      | Boolean | —                                                                      | false   |
| icon       | 图标名称                            | String  | —                                                                      | —       |
| customIcon | 自定义图标类名                      | String  | —                                                                      | —       |

### Button Events

| 事件名 | 说明       | 回调参数 |
| ------ | :--------- | :------- |
| click  | 点击时触发 | event    |
