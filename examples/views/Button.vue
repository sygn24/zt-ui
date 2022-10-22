<template>
    <div>
        <div class="row">
            <h3>不同类型</h3>
            <zt-button>默认按钮</zt-button>
            <zt-button type="dashed">虚线按钮</zt-button>
            <zt-button type="text">文字按钮</zt-button>
            <zt-button type="primary" @click="handleClick()">主要按钮</zt-button>
            <zt-button type="info">信息按钮</zt-button>
            <zt-button type="success" icon="success">成功按钮</zt-button>
            <zt-button type="warning">警告按钮</zt-button>
            <zt-button type="danger">危险按钮</zt-button>
        </div>
        <div class="row">
            <h3>不同尺寸</h3>
            <zt-button size="large">超大按钮</zt-button>
            <zt-button type="primary" size="medium">中等按钮</zt-button>
            <zt-button type="success" size="small">小型按钮</zt-button>
            <zt-button type="danger" size="mini">超小按钮</zt-button>
        </div>
        <div class="row">
            <h3>圆角按钮</h3>
            <zt-button round>默认按钮</zt-button>
            <zt-button round type="primary" size="medium">中等按钮</zt-button>
            <zt-button round type="success" size="small">小型按钮</zt-button>
            <zt-button round type="danger" size="mini">超小按钮</zt-button>
        </div>
        <div class="row">
            <h3>图标按钮</h3>
            <zt-button circle icon="select" @click="handleClick()"></zt-button>
            <zt-button circle icon="success" type="primary"></zt-button>
            <zt-button circle icon="good" type="success"></zt-button>
            <zt-button circle icon="close" type="danger"></zt-button>
            <zt-button circle icon="upload" type="dashed"></zt-button>
        </div>
        <div class="row">
            <h3>加载中</h3>
            <zt-button type="info" :loading="loading" @click="loadingClick">信息按钮</zt-button>
            <zt-button type="success" loading>成功按钮</zt-button>
            <zt-button type="warning" loading>警告按钮</zt-button>
            <zt-button type="danger" loading>危险按钮</zt-button>
            <zt-button circle loading></zt-button>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <zt-button disabled @click="handleClick()">默认按钮</zt-button>
            <zt-button disabled type="dashed">虚线按钮</zt-button>
            <zt-button disabled type="text">文字按钮</zt-button>
            <zt-button disabled type="primary" @click="handleClick()">主要按钮</zt-button>
            <zt-button disabled type="info">信息按钮</zt-button>
            <zt-button disabled type="success">成功按钮</zt-button>
            <zt-button disabled type="warning">警告按钮</zt-button>
            <zt-button disabled type="danger">危险按钮</zt-button>
        </div>
        <div class="row">
            <h3>自定义</h3>
            <zt-button padding="15px" icon="success"></zt-button>
            <zt-button type="success" font-size="20px" icon="upload">自定义字体大小</zt-button>
            <zt-button background="#666" text-color="yellow" border-color="red">自定义颜色</zt-button>
            <zt-button type="primary">
                <ZtIcon icon="eyeoff" color="red" />
                自定义图标
                <ZtIcon icon="eye" />
            </zt-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',

    data() {
        return {
            loading: false
        }
    },

    methods: {
        handleClick() {
            this.$msg('点击了')
        },
        loadingClick() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
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
</style>
