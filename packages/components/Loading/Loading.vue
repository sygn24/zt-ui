<template>
  <transition name="base-fade">
    <div class="zt-loading" :class="isFull? 'zt-loading-full': 'zt-loading-notfull' " :style="{background:bgColor}" v-if="show">
      <div class="zt-loading-content">
        <ZtIcon :icon="icon" :size="iconSize" :color="color" class="loading-loop" />
        <div class="zt-loading-content-text" :style="{color:color}">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ZtLoading',
  props: {
    text: {
      type: String,
      default: '拼命加载中...'
    },
    icon: {
      type: String,
      default: 'loading'
    },
    iconSize: {
      type: [String, Number],
      default: '25'
    },
    color: {
      type: String,
      default: 'var(--primary)'
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.3)'
    },
    isFull: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>