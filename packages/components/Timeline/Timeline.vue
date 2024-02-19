<template>
    <div class="zt-timeline" :class="{ 'zt-timeline-item-line-pending': pending }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtTimeLine',
    props: {
        pending: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
