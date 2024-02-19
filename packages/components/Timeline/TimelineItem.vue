<template>
    <div class="zt-timeline-item">
        <div class="zt-timeline-item-line"></div>
        <div class="zt-timeline-item-circle" :style="{ borderColor: $slots.dot ? 'none' : color }">
            <slot name="dot"></slot>
        </div>
        <div class="zt-timeline-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZtTimeLineItem',
    props: {
        color: {
            type: String,
            default: 'var(--primary)'
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
