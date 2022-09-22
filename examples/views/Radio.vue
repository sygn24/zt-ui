<template>
    <div>
        <div class="row">
            <div class="col">
                <h3>单独使用</h3>
                <zt-radio label="选项一" v-model="value1" @input="change">选项一</zt-radio>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>禁用</h3>
                <zt-radio label="2" v-model="value2" disabled>选项二</zt-radio>
            </div>
            <div class="col">
                <h3>选中且禁用</h3>
                <zt-radio :label="2" v-model="value2" disabled>选项二</zt-radio>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <zt-radio-group>
                    <zt-radio label="选项四" v-model="value1" @input="change">选项四</zt-radio>
                    <zt-radio label="选项五" v-model="value1" @input="change">选项五</zt-radio>
                </zt-radio-group>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Radio',

    data() {
        return {
            value1: 1,
            value2: 2,
            value3: 3,
            value4: 4,
            value5: 5
        }
    },
    methods: {
        change(val) {
            this.$msg(val)
            console.log(this.value1)
        }
    }
}
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
    display: flex;
    .col {
        margin-right: 20px;
    }
    h3 {
        padding: 10px 0;
    }
}
</style>
