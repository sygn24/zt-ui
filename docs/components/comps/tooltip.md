# Tooltip 文字提示

## 基础用法

::: demo

```html
<template>
    <div class="tooltip-box">
        <div class="top">
            <zt-tooltip content="top-start上左上左" placement="top-start" theme="light">
                <zt-button>上左</zt-button>
            </zt-tooltip>
            <zt-tooltip content="top上边上边" placement="top" theme="light">
                <zt-button>上边</zt-button>
            </zt-tooltip>
            <zt-tooltip content="top-end上右上右" placement="top-end">
                <zt-button>上右</zt-button>
            </zt-tooltip>
        </div>
        <div class="center">
            <div class="left">
                <zt-tooltip content="left-start左上" placement="left-start">
                    <zt-button>左上</zt-button>
                </zt-tooltip>
                <zt-tooltip content="left左边左边" placement="left" theme="light">
                    <zt-button>左边</zt-button>
                </zt-tooltip>
                <zt-tooltip content="left-end左下" placement="left-end">
                    <zt-button>左下</zt-button>
                </zt-tooltip>
            </div>
            <div class="right">
                <zt-tooltip content="right-start右上" placement="right-start">
                    <zt-button>右上</zt-button>
                </zt-tooltip>
                <zt-tooltip content="right右边右边" placement="right" theme="light">
                    <zt-button>右边</zt-button>
                </zt-tooltip>
                <zt-tooltip content="right-end右下" placement="right-end">
                    <zt-button>右下</zt-button>
                </zt-tooltip>
            </div>
        </div>
        <div class="bottom">
            <zt-tooltip content="top-start下左下左" placement="bottom-start" theme="light">
                <zt-button>下左</zt-button>
            </zt-tooltip>
            <zt-tooltip content="bot下边下边bot" placement="bottom">
                <zt-button>下边</zt-button>
            </zt-tooltip>
            <zt-tooltip content="top-end下右下右" placement="bottom-end">
                <zt-button>下右</zt-button>
            </zt-tooltip>
        </div>
    </div>
</template>
```

:::

## 使用插槽

::: demo

```html
<template>
    <zt-tooltip placement="right">
        <zt-button>测试插槽使用</zt-button>
        <div slot="content">
            测试测试测试测试测试测试
            <br />第二行信息
        </div>
    </zt-tooltip>
</template>
```

:::

## 延时显示

::: demo

```html
<template>
    <zt-tooltip placement="top" :delay="1000" content="延时1s显示">
        <zt-button>延时1s显示</zt-button>
    </zt-tooltip>
</template>
```

:::

## API

### Tooltip Props

| 参数      | 说明               | 类型   | 可选值                                                                                                                            | 默认值 |
| :-------- | :----------------- | :----- | --------------------------------------------------------------------------------------------------------------------------------- | :----- |
| content   | 显示的内容         | String | —                                                                                                                                 | —      |
| placement | Tooltip 的出现位置 | String | `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end` | top    |
| theme     | 默认提供的主题     | String | `dark` `light`                                                                                                                    | dark   |
| delay     | 延时显示时长       | Number | —                                                                                                                                 | 0      |

