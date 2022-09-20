<template>
    <div class="rate">
        <div class="row">
            <h3>基础</h3>
            <zt-rate v-model="value" :count="8"></zt-rate>
        </div>
        <div class="row">
            <h3>自定义文字</h3>
            <zt-rate v-model="value2" :count="8">
                <span style="color: var(--warning)">{{ value2 }} 分</span>
            </zt-rate>
        </div>
        <div class="row">
            <h3>隐藏文字</h3>
            <zt-rate v-model="value3" :count="5" :show-text="false"></zt-rate>
        </div>
        <div class="row">
            <h3>半星选择</h3>
            <zt-rate v-model="value4" :count="5" half>
                <span style="color: var(--warning)">{{ value4 }} 分</span>
            </zt-rate>
        </div>
        <div class="row">
            <h3>只读</h3>
            <zt-rate v-model="value3" :count="5" disabled>
                <span style="color: var(--warning)">{{ value3 }} 分</span>
            </zt-rate>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rate',
    data() {
        return {
            value: 3,
            value2: 5,
            value3: 2,
            value4: 3.5
        }
    },
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
