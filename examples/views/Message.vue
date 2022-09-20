<template>
    <div>
        <div class="row">
            <h3>不同类型,默认3s自动后关闭</h3>
            <zt-button type="primary" @click="handleClick1()">默认提示</zt-button>
            <zt-button type="success" @click="handleClick2()" icon="zt-icon-success">成功信息</zt-button>
            <zt-button type="warning" @click="handleClick3()" icon="zt-icon-warning">警告信息</zt-button>
            <zt-button type="danger" @click="handleClick4()" icon="zt-icon-error" textColor="#fff">错误信息</zt-button>
        </div>
        <div class="row">
            <h3>带有背景颜色</h3>
            <zt-button type="primary" @click="handleClick8()">默认提示</zt-button>
            <zt-button type="success" @click="handleClick9()" icon="zt-icon-success">成功信息</zt-button>
            <zt-button type="warning" @click="handleClick10()" icon="zt-icon-warning">警告信息</zt-button>
            <zt-button type="danger" @click="handleClick11()" icon="zt-icon-error" textColor="#fff">错误信息</zt-button>
        </div>
        <div class="row">
            <h3>手动关闭，自定义几秒后关闭</h3>
            <zt-button @click="handleClick5()">可以手动关闭的消息</zt-button>
            <zt-button type="dashed" @click="handleClick6()">自定义10秒后关闭</zt-button>
            <zt-button round @click="handleClick7()">自定义距顶部偏移距离</zt-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    methods: {
        handleClick1() {
            this.$msg('默认提示信息')
        },
        handleClick2() {
            this.$msg.success('成功信息')
        },
        handleClick3() {
            this.$msg.warning({ msg: '警告信息' })
        },
        handleClick4() {
            this.$msg.error({ msg: '错误信息' })
        },
        handleClick5() {
            this.$msg.info({ msg: '可以手动关闭', showClose: true })
        },
        handleClick6() {
            this.$msg.info({ msg: '10s后关闭', dt: 10000 })
        },
        handleClick7() {
            this.$msg.info({ msg: '距顶部偏移200px', offsetTop: 200 })
        },
        handleClick8() {
            this.$msg({ msg: '默认信息', background: true })
        },
        handleClick9() {
            this.$msg.success({ msg: '成功信息', background: true })
        },
        handleClick10() {
            this.$msg.warning({ msg: '警告信息', background: true })
        },
        handleClick11() {
            this.$msg.error({ msg: '错误信息', background: true })
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
