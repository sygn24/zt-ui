# Carousel 走马灯

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 基础用法

::: demo

```html
<template>
    <zt-carousel>
        <zt-carousel-item>
            <img src="https://p3.toutiaoimg.com/origin/pgc-image/113aed3457184a3798981a58f7dd2725?from=pc" />
        </zt-carousel-item>
        <zt-carousel-item>
            <img src="https://img0.baidu.com/it/u=1589274033,3560941975&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
        </zt-carousel-item>
        <zt-carousel-item>
            <img src="https://img1.baidu.com/it/u=4165142816,4057154618&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
        </zt-carousel-item>
        <zt-carousel-item>
            <img src="https://img1.baidu.com/it/u=2379429913,3995056208&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" />
        </zt-carousel-item>
    </zt-carousel>
</template>
<script>
    export default {
        data() {
            return {
                colors: ['#506b9e', '#2bb669', '#ed4014', '#ffb800']
            }
        }
    }
</script>
```

:::

## 指示器

::: demo

```html
<template>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">默认 Hover 指示器触发，显示第一张</h4>
            <zt-carousel :width="400">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
        <div class="col">
            <h4 class="row">Click 指示器触发，自定义显示第二张</h4>
            <zt-carousel :current="2" :width="400" trigger="click">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">设置指示器位置在外部</h4>
            <zt-carousel :width="400" indicator-position="outside">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
        <div class="col">
            <h4 class="row">隐藏指示器显示</h4>
            <zt-carousel :width="400" indicator-position="none">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">设置指示器类型为圆形</h4>
            <zt-carousel :width="400" indicator-type="dot">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                colors: ['#506b9e', '#2bb669', '#ed4014', '#ffb800']
            }
        }
    }
</script>
```

:::

## 箭头

::: demo

```html
<template>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">默认 Hover 显示</h4>
            <zt-carousel :width="400">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
        <div class="col">
            <h4 class="row">设置总是显示</h4>
            <zt-carousel :width="400" arrow="always">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">隐藏箭头显示</h4>
            <zt-carousel :width="400" arrow="none">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                colors: ['#506b9e', '#2bb669', '#ed4014', '#ffb800']
            }
        }
    }
</script>
```

:::

## 轮播切换

::: demo

```html
<template>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">关闭自动轮播</h4>
            <zt-carousel :width="400" :autoplay="false">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
        <div class="col">
            <h4 class="row">设置自动轮播时间间隔为1s</h4>
            <zt-carousel :width="400" :interval="1000">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
    <div class="row-flex">
        <div class="col">
            <h4 class="row">关闭循环轮播</h4>
            <zt-carousel :width="400" :loop="false">
                <zt-carousel-item v-for="item in 4" :key="item">
                    <div class="carousel-item-plac" :style="{background:colors[item-1]}">
                        <span>{{item}}</span>
                    </div>
                </zt-carousel-item>
            </zt-carousel>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                colors: ['#506b9e', '#2bb669', '#ed4014', '#ffb800']
            }
        }
    }
</script>
```

:::

## API

### Carousel Props

| 参数               | 说明                 | 类型    | 可选值                    | 默认值   |
| :----------------- | :------------------- | :------ | ------------------------- | :------- |
| current            | 默认显示第几张幻灯片 | Number  | —                         | 1        |
| height             | 走马灯的高度         | Number  | —                         | 300      |
| width              | 走马灯的宽度         | Number  | —                         | —        |
| loop               | 是否开启循环播放     | Boolean | —                         | true     |
| autoplay           | 是否开启启动切换     | Boolean | —                         | true     |
| trigger            | 指示器的触发方式     | String  | `hover` `click` `none`    | `hover`  |
| arrow              | 切换箭头的显示时机   | String  | `hover` `click` `none`    | `hover`  |
| indicator-position | 指示器的位置         | String  | `inside` `outside` `none` | `inside` |
| indicator-type     | 指示器的类型         | String  | `rect` `dot`              | `rect`   |
