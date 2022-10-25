<template>
    <div class="switch">
        <div class="row">
            <h3>基础使用</h3>
            <zt-switch v-model="value" @change="toggle"></zt-switch>
        </div>
        <div class="row">
            <h3>不同尺寸</h3>
            <zt-switch v-model="value2" size="large"></zt-switch>
            <zt-switch v-model="value2" size="medium"></zt-switch>
            <zt-switch v-model="value2" size="small"></zt-switch>
        </div>
        <div class="row">
            <h3>显示默认文字</h3>
            <zt-switch v-model="value2" size="large" default-text></zt-switch>
            <zt-switch v-model="value2" size="medium" default-text></zt-switch>
            <zt-switch v-model="value2" size="small" default-text></zt-switch>
        </div>
        <div class="row">
            <h3>自定义文字</h3>
            <zt-switch v-model="value2">
                <template #open>
                    <span>ON</span>
                </template>
                <template #close>
                    <span>OFF</span>
                </template>
            </zt-switch>
            <zt-switch v-model="value2">
                <template #open>
                    <ZtIcon icon="select" />
                </template>
                <template #close>
                    <ZtIcon icon="close" />
                </template>
            </zt-switch>
        </div>
        <div class="row">
            <h3>自定义颜色</h3>
            <zt-switch v-model="value2" size="large" true-color="var(--success)" false-color="var(--danger)" default-text></zt-switch>
        </div>
        <div class="row">
            <h3>加载状态</h3>
            <zt-switch v-model="value2" size="large" loading></zt-switch>
            <zt-switch v-model="value" size="medium" loading default-text></zt-switch>
            <zt-switch v-model="value" size="small" loading default-text></zt-switch>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <zt-switch v-model="value2" size="large" disabled></zt-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: 'zSwitch',
    data() {
        return {
            value: false,
            value2: true,
            loading: false
        }
    },
    methods: {
        toggle(val) {
            this.$msg('开关状态:' + this.value)
            console.log(val)
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
    .zt-switch {
        margin-right: 5px;
    }
}
</style>
