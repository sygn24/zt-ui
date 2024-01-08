# Button 按钮

## 不同类型

不同类型的按钮，使用`type`属性来定义按钮类型
::: demo 不同类型的按钮，使用`type`属性来定义按钮类型

```html
<zt-button @click="handleClick">默认按钮</zt-button>
<zt-button type="dashed">虚线按钮</zt-button>
<zt-button type="text">文字按钮</zt-button>
<zt-button type="primary">主要按钮</zt-button>
<zt-button type="info">信息按钮</zt-button>
<zt-button type="success">成功按钮</zt-button>
<zt-button type="warning">警告按钮</zt-button>
<zt-button type="danger">危险按钮</zt-button>
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

## 圆角按钮

设置`round`属性，开启圆角模式
::: demo 设置`round`属性，开启圆角模式

```html
<zt-button round>默认按钮</zt-button>
<zt-button round type="primary" size="medium">中等按钮</zt-button>
<zt-button round type="success" size="small">小型按钮</zt-button>
<zt-button round type="danger" size="mini">超小按钮</zt-button>
```

:::

## 图标按钮

设置`icon`和`circle`属性，开启圆形图标按钮
::: demo 设置`icon`和`circle`属性，开启圆形图标按钮

```html
<zt-button circle icon="select" @click="handleClick"></zt-button>
<zt-button circle icon="success" type="primary"></zt-button>
<zt-button circle icon="good" type="success"></zt-button>
<zt-button circle icon="close" type="danger"></zt-button>
<zt-button circle icon="upload" type="dashed"></zt-button>
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

## 按钮组

以按钮组的方式出现，常用于多项类似操作。
::: demo 使用`<zt-button-group>`标签来嵌套你的按钮。

```html
<zt-button-group>
    <zt-button type="primary" icon="arrow-left-bold">上一页</zt-button>
    <zt-button type="primary">下一页<ZtIcon icon="arrow-right-bold" style="margin-left: 5px" /></zt-button>
</zt-button-group>
<zt-button-group>
    <zt-button type="primary" icon="edit">编辑</zt-button>
    <zt-button type="primary" icon="share">分享</zt-button>
    <zt-button type="primary" icon="good">点赞</zt-button>
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

## 禁用状态

按钮不可用状态。
::: demo 设置`disabled`属性来定义按钮是否可用，接受一个`Boolean`值。

```html
<zt-button disabled @click="handleClick()">默认按钮</zt-button>
<zt-button disabled type="dashed">虚线按钮</zt-button>
<zt-button disabled type="text">文字按钮</zt-button>
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

## 自定义

可以设置`padding`、`background`、`textColor`、`borderColor`、`fontSize`属性
::: demo 可以设置`padding`、`background`、`textColor`、`borderColor`、`fontSize`属性

```html
<zt-button padding="15px 15px" icon="success"></zt-button>
<zt-button type="success" font-size="20px" icon="upload">自定义字体大小</zt-button>
<zt-button background="#666" text-color="yellow" border-color="red">自定义颜色</zt-button>
<zt-button type="primary">
    <ZtIcon icon="eyeoff" color="red" />
    使用icon组件
    <ZtIcon icon="eye" />
</zt-button>
```

:::

## API

### Button Props

| 参数       | <div style="width:120px">说明</div> | 类型    | <div style="width:400px"> 可选值</div>                       | 默认值  |
| :--------- | :---------------------------------- | :------ | :----------------------------------------------------------- | :------ |
| type       | 类型                                | String  | `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、 | default |
| size       | 尺寸                                | String  | `large`, `medium`, `small`, `mini`                           | medium  |
| round      | 是否圆角按钮                        | Boolean | —                                                            | false   |
| circle     | 是否圆形按钮                        | Boolean | —                                                            | false   |
| loading    | 是否加载中状态                      | Boolean | —                                                            | false   |
| disabled   | 是否禁用状态                        | Boolean | —                                                            | false   |
| shake      | 点击后是否抖动                      | Boolean | —                                                            | false   |
| icon       | 图标名称                            | String  | —                                                            | —       |
| customIcon | 自定义图标类名                      | String  | —                                                            | —       |

### Button Events

| 事件名 | 说明       | 回调参数 |
| ------ | :--------- | :------- |
| click  | 点击时触发 | event    |
