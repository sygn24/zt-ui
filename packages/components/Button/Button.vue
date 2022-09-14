<template>
  <button :class="btnClass" :style="btnStyle" :disabled="disabled" @click="handleClick">
    <ZtIcon class="loading-loop" icon="loading" v-if="loading" />
    <ZtIcon :icon="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading" />
    <span style="padding:0 2px" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import ZtIcon from '../Icon'
const prefixCls = 'zt-button'
export default {
  name: 'ZtButton',
  components: { ZtIcon },
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (type) => {
        return [
          'default',
          'dashed',
          'text',
          'primary',
          'info',
          'success',
          'warning',
          'danger'
        ].includes(type)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (size) => {
        return ['large', 'medium', 'small', 'mini'].includes(size)
      }
    },
    // 圆角
    round: {
      type: Boolean,
      default: false
    },
    // 圆形
    circle: {
      type: Boolean,
      default: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 点击后是否抖动
    shake: {
      type: Boolean,
      default: true
    },
    // 图标
    icon: {
      type: String,
      default: ''
    },
    customIcon: {
      type: String,
      default: ''
    },
    // loading
    loading: {
      type: Boolean,
      default: false
    },
    // 自定义
    padding: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnClass() {
      return [
        `${prefixCls}`,
        `${prefixCls}--${this.type}`,
        `${prefixCls}--${this.size}`,
        {
          [`${prefixCls}-hover`]: !this.disabled && !this.loading,
          [`${prefixCls}-focus`]: !this.disabled && !this.loading,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-shake': this.shake && !this.disabled && !this.loading,
          'is-disabled': this.disabled,
          'is-loading': this.loading
        }
      ]
    },
    btnStyle() {
      return {
        padding: this.padding,
        backgroundColor: this.background,
        color: this.textColor,
        borderColor: this.borderColor || this.background,
        fontSize: this.fontSize
      }
    }
  },
  methods: {
    handleClick(e) {
      !this.loading && this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
