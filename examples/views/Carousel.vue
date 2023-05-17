<template>
    <div>
        <div class="row">
            <div style="width:100%">
                <h3>基础使用</h3>
                <zt-carousel :height="320" indicatorPosition="outside">
                    <zt-carousel-item>
                        <img src="https://p3.toutiaoimg.com/origin/pgc-image/113aed3457184a3798981a58f7dd2725?from=pc" />
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <img
                            src="https://img0.baidu.com/it/u=1589274033,3560941975&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        />
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <img
                            src="https://img1.baidu.com/it/u=4165142816,4057154618&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        />
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <img
                            src="https://img1.baidu.com/it/u=2379429913,3995056208&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                        />
                    </zt-carousel-item>
                </zt-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>默认 Hover 指示器触发，显示第一张</h3>
                <zt-carousel>
                    <zt-carousel-item>
                        <div class="bg">
                            <span>1</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: pink">
                            <span>2</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: 7db9e8">
                            <span>3</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: red">
                            <span>4</span>
                        </div>
                    </zt-carousel-item>
                </zt-carousel>
            </div>
            <div class="col">
                <h3>Click 指示器触发，自定义显示第三张</h3>
                <zt-carousel :initial-index="3" trigger="click">
                    <zt-carousel-item>
                        <div class="bg">
                            <span>1</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: pink">
                            <span>2</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: 7db9e8">
                            <span>3</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: red">
                            <span>4</span>
                        </div>
                    </zt-carousel-item>
                </zt-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>设置箭头总是显示</h3>
                <zt-carousel arrow="always">
                    <zt-carousel-item>
                        <div class="bg">
                            <span>1</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: pink">
                            <span>2</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: 7db9e8">
                            <span>3</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: red">
                            <span>4</span>
                        </div>
                    </zt-carousel-item>
                </zt-carousel>
            </div>
            <div class="col">
                <h3>隐藏箭头显示</h3>
                <zt-carousel arrow="never">
                    <zt-carousel-item>
                        <div class="bg">
                            <span>1</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: pink">
                            <span>2</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: 7db9e8">
                            <span>3</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: red">
                            <span>4</span>
                        </div>
                    </zt-carousel-item>
                </zt-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>设置自动轮播时间间隔为1s</h3>
                <zt-carousel :interval="1000">
                    <zt-carousel-item>
                        <div class="bg">
                            <span>1</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: pink">
                            <span>2</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: 7db9e8">
                            <span>3</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: red">
                            <span>4</span>
                        </div>
                    </zt-carousel-item>
                </zt-carousel>
            </div>
            <div class="col">
                <h3>关闭自动轮播，自定义宽高</h3>
                <zt-carousel :autoplay="false" :width="300" :height="180">
                    <zt-carousel-item>
                        <div class="bg">
                            <span>1</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: pink">
                            <span>2</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: 7db9e8">
                            <span>3</span>
                        </div>
                    </zt-carousel-item>
                    <zt-carousel-item>
                        <div class="bg" style="background: red">
                            <span>4</span>
                        </div>
                    </zt-carousel-item>
                </zt-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style lang="less" scoped>
.row {
    display: flex;
    margin-bottom: 20px;
    img {
        width: 100%;
        height: 100%;
    }
    .col {
        margin-right: 20px;
        width: 460px;
    }
    .bg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 100%;
    }
}
</style>
