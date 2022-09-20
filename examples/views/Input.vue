<template>
    <div>
        <div class="row">
            <h3>基础用法</h3>
            <zt-input></zt-input>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <zt-input disabled></zt-input>
        </div>
        <div class="row">
            <h3>带Icon的输入框</h3>
            <zt-input style="margin-right: 10px" prefix-icon="user-fill"></zt-input>
            <zt-input suffix-icon="search"></zt-input>
        </div>
        <div class="row">
            <h3>可清空</h3>
            <zt-input clearable v-model="value1"></zt-input>
            {{ value1 }}
        </div>
        <div class="row">
            <h3>密码框</h3>
            <zt-input type="password" show-password v-model="value2"></zt-input>
        </div>
        <div class="row">
            <h3>输入长度限制</h3>
            <zt-input v-model="value3" maxlength="10" show-limit></zt-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            value1: '双向绑定',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: ''
        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
    h3 {
        padding: 10px 0;
    }
}
</style>
