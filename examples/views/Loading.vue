<template>
    <div>
        <div class="row">
            <h3>使用全局方法，全屏加载，内置三种加载动画</h3>
            <zt-button type="primary" @click="loadingC">圆圈动画</zt-button>
            <zt-button type="success" @click="loadingD">圆点动画</zt-button>
            <zt-button type="warning" @click="loadingR">长条动画</zt-button>
        </div>
        <div class="row">
            <h3>自定义加载图标、背景色、文字内容</h3>
            <zt-button type="success" @click="loading2">自定义文字</zt-button>
            <zt-button type="warning" @click="loading3">自定义图标</zt-button>
            <zt-button type="danger" @click="loading4">自定义颜色</zt-button>
        </div>
        <div class="row">
            <h3>使用指令局部加载,绑定指令的元素必须有宽高</h3>
            <zt-switch v-model="loading" default-text size="large"></zt-switch>
            <div class="box" v-loading="loading">
                <ul>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <h3>使用指令局部加载,自定义加载图标、背景色、文字</h3>
            <zt-switch v-model="loadingOptions.loading" default-text false-color="red" true-color="var(--success)" size="large"></zt-switch>
            <div class="box2" v-loading="loadingOptions">
                <ul>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                    <li>我是列表内容</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
    data() {
        return {
            loading: false,
            loadingOptions: {
                loading: false,
                bgColor: 'rgba(0,0,0,.8)',
                icon: 'loading',
                text: 'Loading'
            }
        }
    },
    methods: {
        loadingC() {
            this.$loading()
            setTimeout(() => {
                this.$loading.close()
            }, 2000)
        },
        loadingD() {
            this.$loading({
                animationType: 'dot',
                color: 'var(--success)'
            })
            setTimeout(() => {
                this.$loading.close()
            }, 2000)
        },
        loadingR() {
            this.$loading({
                animationType: 'rectangle',
                color: 'var(--joker)'
            })
            setTimeout(() => {
                this.$loading.close()
            }, 2000)
        },
        loading2() {
            this.$loading({
                text: 'Loading...'
            })
            setTimeout(() => {
                this.$loading.close()
            }, 2000)
        },
        loading3() {
            this.$loading({
                text: '加载中...',
                icon: 'loading',
                iconSize: '32'
            })
            setTimeout(() => {
                this.$loading.close()
            }, 2000)
        },
        loading4() {
            this.$loading({
                bgColor: 'hsla(0,0%,100%,.9)',
                color: 'green'
            })
            setTimeout(() => {
                this.$loading.close()
            }, 2000)
        },
        start1() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        start2() {
            this.loadingOptions.loading = true
            setTimeout(() => {
                this.loadingOptions.loading = false
            }, 2000)
        }
    }
}
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
    h3 {
        padding: 10px 0;
    }
    .zt-button {
        margin: 10px 10px 10px 0;
    }
}
.box,
.box2 {
    height: 300px;
    width: 500px;
    background: var(--success);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    ul li {
        list-style: none;
    }
}
</style>
