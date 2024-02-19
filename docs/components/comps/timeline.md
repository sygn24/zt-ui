# Timeline 时间轴

## 基础用法

::: demo

```html
<template>
    <zt-time-line pending>
        <zt-time-line-item>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </zt-time-line-item>
        <zt-time-line-item>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </zt-time-line-item>
        <zt-time-line-item>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </zt-time-line-item>
        <zt-time-line-item>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </zt-time-line-item>
        <zt-time-line-item>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </zt-time-line-item>
    </zt-time-line>
</template>
```

:::

## 圆圈颜色

::: demo

```html
<template>
    <zt-time-line>
        <zt-time-line-item color="green">发布1.0版本</zt-time-line-item>
        <zt-time-line-item color="green">发布2.0版本</zt-time-line-item>
        <zt-time-line-item color="red">严重故障</zt-time-line-item>
        <zt-time-line-item color="blue">发布3.0版本</zt-time-line-item>
    </zt-time-line>
</template>
```

:::

## 自定义时间轴点

::: demo

```html
<template>
    <zt-time-line>
        <zt-time-line-item>
            <template #dot>
                <zt-icon icon="component" color="green"></zt-icon>
            </template>
            <span>发布里程碑版本</span>xxxxx
        </zt-time-line-item>
        <zt-time-line-item>发布1.0版本</zt-time-line-item>
        <zt-time-line-item>发布2.0版本</zt-time-line-item>
        <zt-time-line-item>发布3.0版本</zt-time-line-item>
    </zt-time-line>
</template>
```

:::

## API

### Timeline Props

| 参数    | 说明                           | 类型    | 可选值 | 默认值 |
| :------ | :----------------------------- | :------ | ------ | :----- |
| pending | 指定是否最后一个节点为幽灵节点 | Boolean | —      | false  |

### TimelineItem Props

| 参数  | 说明     | 类型   | 可选值 | 默认值  |
| :---- | :------- | :----- | ------ | :------ |
| color | 圆圈颜色 | String | —      | #2d8cf0 |

### TimelineItem Slots

| 名称 | 说明               |
| ---- | :----------------- |
| —    | 基本内容           |
| dot  | 自定义时间轴点内容 |
