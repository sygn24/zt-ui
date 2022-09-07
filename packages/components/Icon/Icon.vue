<template>
  <i :class="classes" :style="styles" @click="handleClick" @mouseenter="handleMouseEnter"></i>
</template>
<script>
const prefixCls = 'zt-icon'
export default {
  name: 'ZtIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: [Number, String],
    color: String,
    custom: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.icon}`]: this.icon !== '',
          [`${this.custom}`]: this.custom !== ''
        }
      ]
    },
    styles() {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleMouseEnter() {
      this.$emit('mouseenter')
    }
  }
}
</script>
<style lang="less" scoped></style>
