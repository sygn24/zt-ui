# Menu 导航菜单

## 基础

设置 `model`属性，可选值为 `vertical`（垂直）和 `horizontal`（水平）
::: demo

```html
<template>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">垂直模式</h4>
            <zt-menu v-model="activeindex" @onSelect="onSelect">
                <zt-menu-item index="1">
                    <ZtIcon icon="file" />
                    <span class="title">文章管理</span>
                </zt-menu-item>
                <zt-menu-item index="2">
                    <ZtIcon icon="comment" />
                    <span class="title">评论管理</span>
                </zt-menu-item>
                <zt-menu-item index="3">
                    <ZtIcon icon="setting" />
                    <span class="title">系统设置</span>
                </zt-menu-item>
            </zt-menu>
        </div>
        <div class="col">
            <h4 class="row">水平模式</h4>
            <zt-menu v-model="activeindex" model="horizontal" @onSelect="onSelect">
                <zt-menu-item index="1">文章管理</zt-menu-item>
                <zt-menu-item index="2">评论管理</zt-menu-item>
                <zt-menu-item index="3">系统设置</zt-menu-item>
            </zt-menu>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeindex: '1'
            }
        },
        methods: {
            onSelect(index) {
                this.$msg('当前激活' + index)
            }
        }
    }
</script>
```

:::

## 分组

使用 `ZtMenuItemGroup` 组件进行分组
::: demo

```html
<template>
    <zt-menu v-model="activeindex">
        <zt-menu-item-group>
            <span slot="title">内容管理</span>
            <zt-menu-item index="1-1">
                <ZtIcon icon="file" />
                <span class="title">文章管理</span>
            </zt-menu-item>
            <zt-menu-item index="1-2">
                <ZtIcon icon="comment" />
                <span class="title">评论管理</span>
            </zt-menu-item>
        </zt-menu-item-group>
        <zt-menu-item-group title="统计分析">
            <zt-menu-item index="2-1">
                <ZtIcon icon="like" />
                <span class="title">用户留存</span>
            </zt-menu-item>
            <zt-menu-item index="2-2">
                <ZtIcon icon="meh" />
                <span class="title">流失用户</span>
            </zt-menu-item>
        </zt-menu-item-group>
    </zt-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeindex: '2-1'
            }
        },
        methods: {
            onSelect(index) {
                this.$msg('当前激活' + index)
            }
        }
    }
</script>
```

:::

## 内嵌菜单

子菜单内嵌在菜单区域
::: demo

```html
<template>
    <div class="row-flex">
        <div class="col">
            <div class="row">
                <h5 class="row">是否只保持一个子菜单的展开</h5>
                <zt-switch v-model="unique"></zt-switch>
            </div>
            <zt-menu v-model="activeindex1" :unique-opened="unique" @onSelect="onSelect">
                <zt-submenu index="1">
                    <template slot="title">
                        <ZtIcon icon="file" />
                        <span class="title">内容管理</span>
                    </template>
                    <zt-menu-item index="1-1">
                        <ZtIcon icon="file" />
                        <span class="title">文章管理</span>
                    </zt-menu-item>
                    <zt-menu-item index="1-2">
                        <ZtIcon icon="comment" />
                        <span class="title">评论管理</span>
                    </zt-menu-item>
                </zt-submenu>
                <zt-submenu index="2">
                    <template slot="title">
                        <ZtIcon icon="edit" />
                        <span class="title">统计分析管理</span>
                    </template>
                    <zt-menu-item-group>
                        <span slot="title">内容统计</span>
                        <zt-menu-item index="2-1">
                            <ZtIcon icon="file" />
                            <span class="title">文章统计</span>
                        </zt-menu-item>
                        <zt-submenu index="2-2">
                            <template slot="title">
                                <ZtIcon icon="navigation" />
                                <span class="title">评论统计</span>
                            </template>
                            <zt-menu-item index="2-2-1"> 最新评论 </zt-menu-item>
                            <zt-menu-item index="2-2-2"> 热门评论 </zt-menu-item>
                        </zt-submenu>
                    </zt-menu-item-group>
                    <zt-menu-item-group title="人员统计">
                        <zt-menu-item index="2-3"> 新人统计 </zt-menu-item>
                        <zt-submenu index="2-4">
                            <template slot="title">
                                <ZtIcon icon="navigation" />
                                <span class="title">人员管理</span>
                            </template>
                            <zt-menu-item index="2-4-1"> 用户留存 </zt-menu-item>
                            <zt-menu-item index="2-4-2"> 流失用户 </zt-menu-item>
                            <zt-submenu index="2-4-3">
                                <template slot="title">
                                    <ZtIcon icon="navigation" />
                                    <span class="title">统计分析</span>
                                </template>
                                <zt-menu-item index="2-4-3-1">
                                    <ZtIcon icon="like" />
                                    <span class="title">用户留存</span>
                                </zt-menu-item>
                                <zt-menu-item index="2-4-3-2">
                                    <ZtIcon icon="meh" />
                                    <span class="title">流失用户</span>
                                </zt-menu-item>
                            </zt-submenu>
                        </zt-submenu>
                    </zt-menu-item-group>
                </zt-submenu>
            </zt-menu>
        </div>
        <div class="col">
            <zt-menu v-model="activeindex2" model="horizontal" @onSelect="onSelect">
                <zt-menu-item index="1">文章管理</zt-menu-item>
                <zt-menu-item index="2">评论管理</zt-menu-item>
                <zt-submenu index="3">
                    <template slot="title">
                        <span>内容管理</span>
                    </template>
                    <zt-menu-item-group title="内容管理">
                        <zt-menu-item index="3-1"> 文章管理 </zt-menu-item>
                        <zt-menu-item index="3-2"> 评论管理 </zt-menu-item>
                    </zt-menu-item-group>
                    <zt-menu-item-group title="统计分析">
                        <zt-menu-item index="3-3"> 用户留存 </zt-menu-item>
                        <zt-menu-item index="3-4"> 流失用户</zt-menu-item>
                    </zt-menu-item-group>
                </zt-submenu>
            </zt-menu>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeindex1: '1-1',
                activeindex2: '3-2',
                unique: false
            }
        },
        methods: {
            onSelect(index) {
                this.$msg('当前激活' + index)
            }
        }
    }
</script>
```

:::

## 自定义

::: demo

```html
<template>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">自定义颜色和宽度,隐藏边框和激活状态线条</h4>
            <zt-menu
                v-model="activeindex1"
                background-color="#101117"
                text-color="#babbbd"
                active-text-color="#ffffff"
                active-background-color="#2d8cf0"
                width="220px"
                :show-border="false"
                :show-active-line="false"
            >
                <zt-menu-item index="1">
                    <ZtIcon icon="file" />
                    <span class="title">文章管理</span>
                </zt-menu-item>
                <zt-menu-item index="2">
                    <ZtIcon icon="comment" />
                    <span class="title">评论管理</span>
                </zt-menu-item>
                <zt-menu-item index="3">
                    <ZtIcon icon="setting" />
                    <span class="title">系统设置</span>
                </zt-menu-item>
            </zt-menu>
        </div>
        <div class="col">
            <h4 class="row">自定义颜色和高度,隐藏边框</h4>
            <zt-menu
                v-model="activeindex2"
                model="horizontal"
                background-color="#545c64"
                text-color="#babbbd"
                active-background-color="#434a50"
                active-text-color="#ffb800"
                active-line-color="#ffb800"
                height="80px"
                :show-border="false"
            >
                <zt-menu-item index="1">
                    <ZtIcon icon="file" />
                    <span class="title">文章管理</span>
                </zt-menu-item>
                <zt-menu-item index="2">
                    <ZtIcon icon="comment" />
                    <span class="title">评论管理</span>
                </zt-menu-item>
                <zt-submenu index="3">
                    <template slot="title">
                        <span>内容管理</span>
                    </template>
                    <zt-menu-item-group title="内容管理">
                        <zt-menu-item index="3-1"> 文章管理 </zt-menu-item>
                        <zt-menu-item index="3-2"> 评论管理 </zt-menu-item>
                    </zt-menu-item-group>
                    <zt-menu-item-group title="统计分析">
                        <zt-menu-item index="3-3"> 用户留存 </zt-menu-item>
                        <zt-menu-item index="3-4"> 流失用户流失用户</zt-menu-item>
                    </zt-menu-item-group>
                </zt-submenu>
                <zt-menu-item index="4">人员管理 </zt-menu-item>
            </zt-menu>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeindex1: '1',
                activeindex2: '2'
            }
        }
    }
</script>
```

:::

## API

### Menu Props

| 参数                    | <div style="width:150px">说明</div>                   | 类型          | <div style="width:200px">可选值</div> | 默认值   |
| :---------------------- | :---------------------------------------------------- | :------------ | ------------------------------------- | :------- |
| activeIndex             | 激活菜单的`index`值，使用`v-modal`双向绑定            | String,Number | —                                     | —        |
| model                   | 菜单类型                                              | String        | `horizontal`、 `vertical`             | vertical |
| unique-opened           | 是否只保持一个子菜单的展开                            | Boolean       | —                                     | false    |
| show-active-line        | 是否显示激活状态下划线                                | Boolean       | —                                     | true     |
| show-border             | 是否显示边框                                          | Boolean       | —                                     | true     |
| router                  | 是否使用路由模式，会以 `index` 作为 path 进行路由跳转 | Boolean       | —                                     | false    |
| width                   | 导航菜单的宽度，只在 mode="vertical" 时有效           | String        | —                                     | 200px    |
| height                  | 导航菜单的高度，只在 mode="horizontal" 时有效         | String        | —                                     | 50px     |
| background-color        | 导航菜单的背景颜色                                    | String        | —                                     | #fff     |
| active-background-color | 当前激活菜单的背景颜色                                | String        | —                                     | #f5f7fa  |
| text-color              | 导航菜单文字颜色                                      | String        | —                                     | #303133  |
| active-text-color       | 当前激活菜单的文字颜色                                | String        | —                                     | #2d8cf0  |
| active-line-color       | 当前激活菜单的下划线颜色                              | String        | —                                     | #2d8cf0  |

### Menu Events

| 事件名   | 说明                         | 回调参数 |
| :------- | :--------------------------- | -------- |
| onSelect | 选择菜单（MenuItem）时触发 | index    |

### MenuItem Props

| 参数  | 说明     | 类型            | 可选值 | 默认值 |
| :---- | :------- | :-------------- | ------ | :----- |
| index | 唯一标识 | String / Number | —      | —      |

### SubMenu Props

| 参数  | 说明       | 类型            | 可选值 | 默认值 |
| :---- | :--------- | :-------------- | ------ | :----- |
| index | 唯一标识   | String / Number | —      | —      |
| title | 子菜单标题 | String          | —      | —      |

### SubMenu Slots

| 名称  | 说明       |
| :---- | :--------- |
| —     | 子菜单项   |
| title | 子菜单标题 |

### MenuItemGroup Props

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| :---- | :------- | :----- | ------ | :----- |
| title | 分组标题 | String | —      | —      |

### MenuItemGroup Slots

| 名称  | 说明     |
| :---- | :------- |
| —     | 菜单项   |
| title | 分组标题 |
