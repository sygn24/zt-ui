<template>
  <transition name="base-fade">
    <div
      class="zt-loading"
      :class="isFull? 'zt-loading-full': 'zt-loading-notfull' "
      :style="{background:bgColor}"
      v-if="show"
    >
      <div class="zt-loading-content">
        <ZtIcon :icon="icon" :size="iconSize" :color="color" class="loading-loop" v-if="icon!==''" />
        <component :is="loadingAnimation" :color="color" v-else></component>
        <div class="zt-loading-content-text" :style="{color:color}" v-if="text!==''">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import ZtIcon from '../Icon'
import LoadingCircle from './LoadingAnimation/LoadingCircle.vue'
import LoadingDots from './LoadingAnimation/LoadingDots.vue'
import LoadingRectangles from './LoadingAnimation/LoadingRectangles.vue'
export default {
  name: 'ZtLoading',
  components: { LoadingCircle, LoadingDots, LoadingRectangles, ZtIcon },
  props: {
    text: {
      type: String,
      default: '拼命加载中...'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: [String, Number],
      default: '28'
    },
    color: {
      type: String,
      default: 'var(--primary)'
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.7)'
    },
    // 加载动画类型
    animationType: {
      type: String,
      default: 'circle',
      validator: (type) => {
        return ['circle', 'dot', 'rectangle'].includes(type)
      }
    }
  },
  computed: {
    loadingAnimation() {
      let animation
      if (this.animationType === 'circle') {
        animation = 'LoadingCircle'
      } else if (this.animationType === 'dot') {
        animation = 'LoadingDots'
      } else {
        animation = 'LoadingRectangles'
      }
      return animation
    }
  },
  data() {
    return {
      show: false,
      isFull: false
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>