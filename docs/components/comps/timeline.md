# Timeline 时间轴

## 基础用法

基础的、简洁的标签页
::: demo

```html
<template>
    <div style="height:100px">
        <zt-tabs v-model="activeName" @tab-click="handleClick">
            <zt-tab-pane label="用户管理" name="用户管理">用户管理</zt-tab-pane>
            <zt-tab-pane label="配置管理" name="配置管理">配置管理</zt-tab-pane>
            <zt-tab-pane label="角色管理" name="角色管理">角色管理</zt-tab-pane>
            <zt-tab-pane label="定时任务补偿" name="定时任务补偿">定时任务补偿</zt-tab-pane>
        </zt-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: '配置管理'
            }
        },
        methods: {
            handleClick(tab) {
                this.$msg('切换到' + tab)
            }
        }
    }
</script>
```

:::

## 开启切换动画

设置`animated`属性即可开启切换动画
::: demo

```html
<template>
    <div style="height:100px">
        <zt-tabs v-model="activeName" @tab-click="handleClick" animated>
            <zt-tab-pane label="用户管理" name="用户管理">用户管理</zt-tab-pane>
            <zt-tab-pane label="配置管理" name="配置管理">配置管理</zt-tab-pane>
            <zt-tab-pane label="角色管理" name="角色管理">角色管理</zt-tab-pane>
            <zt-tab-pane label="定时任务补偿" name="定时任务补偿">定时任务补偿</zt-tab-pane>
        </zt-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: '配置管理'
            }
        },
        methods: {
            handleClick(tab) {
                this.$msg('切换到' + tab)
            }
        }
    }
</script>
```

:::

## API

### Tabs Props

| 参数            | 说明                      | 类型    | 可选值 | 默认值              |
| :-------------- | :------------------------ | :------ | ------ | :------------------ |
| value / v-model | 绑定值，选中选项卡的 name | String  | —      | 第一个选项卡的 name |
| animated        | 是否开启切换动画          | Boolean | —      | false               |

### Tabs Events

| 事件名    | 说明             | 回调参数           |
| --------- | :--------------- | :----------------- |
| tab-click | tab 被选中时触发 | 被选中 tab 的 name |
