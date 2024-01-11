<template>
    <div>
        <div class="row">
            <h3>不同类型</h3>
            <div class="col">
                <zt-button>默认按钮</zt-button>
                <zt-button type="dashed">虚线按钮</zt-button>
                <zt-button type="text">文字按钮</zt-button>
                <zt-button type="primary" @click="handleClick()">主要按钮</zt-button>
                <zt-button type="info">信息按钮</zt-button>
                <zt-button type="success" icon="success">成功按钮</zt-button>
                <zt-button type="warning">警告按钮</zt-button>
                <zt-button type="danger">危险按钮</zt-button>
            </div>
        </div>
        <div class="row">
            <h3>不同尺寸</h3>
            <div class="col">
                <zt-button size="large">超大按钮</zt-button>
                <zt-button type="primary" size="medium">中等按钮</zt-button>
                <zt-button type="success" size="small">小型按钮</zt-button>
                <zt-button type="danger" size="mini">超小按钮</zt-button>
            </div>
        </div>
        <div class="row">
            <h3>圆角按钮</h3>
            <div class="col">
                <zt-button round>默认按钮</zt-button>
                <zt-button round type="primary" size="medium">中等按钮</zt-button>
                <zt-button round type="success" size="small">小型按钮</zt-button>
                <zt-button round type="danger" size="mini">超小按钮</zt-button>
            </div>
        </div>
        <div class="row">
            <h3>图标按钮</h3>
            <div class="col">
                <zt-button circle @click="handleClick()" size="large">好</zt-button>
                <zt-button circle icon="success" size="medium" type="primary"></zt-button>
                <zt-button circle icon="good" size="small" type="success"></zt-button>
                <zt-button circle icon="close" size="mini" type="danger"></zt-button>
                <zt-button circle icon="upload" type="dashed"></zt-button>
            </div>
        </div>
        <div class="row">
            <h3>加载中</h3>
            <div class="col">
                <zt-button type="info" :loading="loading" @click="loadingClick">信息按钮</zt-button>
                <zt-button type="success" loading>成功按钮</zt-button>
                <zt-button type="warning" loading>警告按钮</zt-button>
                <zt-button type="danger" loading>危险按钮</zt-button>
                <zt-button circle loading></zt-button>
            </div>
        </div>
        <div class="row">
            <h3>按钮组</h3>
            <zt-button-group>
                <zt-button icon="arrow-left-bold">上一页</zt-button>
                <zt-button>下一页<zt-icon icon="arrow-right-bold" style="margin-left: 5px" /></zt-button>
            </zt-button-group>
            <zt-button-group>
                <zt-button type="primary" icon="arrow-left-bold">上一页</zt-button>
                <zt-button>下一页<zt-icon icon="arrow-right-bold" style="margin-left: 5px" /></zt-button>
            </zt-button-group>
            <zt-button-group>
                <zt-button type="dashed" icon="arrow-left-bold">上一页</zt-button>
                <zt-button type="primary">下一页<zt-icon icon="arrow-right-bold" style="margin-left: 5px" /></zt-button>
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
                <zt-button icon="share" type="dashed">分享</zt-button>
                <zt-button icon="good" type="dashed">点赞</zt-button>
            </zt-button-group>
            <zt-button-group>
                <zt-button type="primary" round icon="edit">编辑</zt-button>
                <zt-button type="primary" round icon="share">分享</zt-button>
                <zt-button type="primary" round icon="good">点赞</zt-button>
            </zt-button-group>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <div class="col">
                <zt-button disabled @click="handleClick()">默认按钮</zt-button>
                <zt-button disabled type="dashed">虚线按钮</zt-button>
                <zt-button disabled type="text">文字按钮</zt-button>
                <zt-button disabled type="primary" @click="handleClick()">主要按钮</zt-button>
                <zt-button disabled type="info">信息按钮</zt-button>
                <zt-button disabled type="success">成功按钮</zt-button>
                <zt-button disabled type="warning">警告按钮</zt-button>
                <zt-button disabled type="danger">危险按钮</zt-button>
            </div>
        </div>
        <div class="row">
            <h3>自定义</h3>
            <div class="col">
                <zt-button padding="15px" icon="success"></zt-button>
                <zt-button type="success" font-size="20px" icon="upload">自定义字体大小</zt-button>
                <zt-button background-color="#666" color="yellow" border-color="red">自定义颜色</zt-button>
                <zt-button type="primary">
                    <zt-icon icon="eyeoff" color="red" />
                    自定义图标
                    <zt-icon icon="eye" />
                </zt-button>
            </div>
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
    .col {
        .zt-button {
            margin-right: 10px;
        }
    }
    .zt-button-group{
        margin:10px 10px 0 0;
    }
}
</style>
