<template>
  <div class="zt-timeline-item">
    <div class="zt-timeline-item-line"></div>
    <div class="zt-timeline-item-circle" :style="{borderColor:color}"></div>
    <div class="zt-timeline-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineItem',
  props:{
    color:{
      type:String,
      default:'var(--primary)'
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>