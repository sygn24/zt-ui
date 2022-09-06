<template>
    <div class="zt-tabs-pane" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtTabPane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['TabsInstance'],
    data() {
        return {
            show: false
        }
    },
    mounted() {
        this.TabsInstance.initTabs()
    },
    methods: {},
    watch: {
        name() {
            this.TabsInstance.initTabs()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
