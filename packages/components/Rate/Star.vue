<template>
  <span class="half">
    <ZtIcon class="star" :icon="starIcon" :color="starColor" size="18" />
    <span
      class="mask1"
      @mouseenter="enterHalfStar"
      @mouseleave="leaveHalfStar"
      @click.stop="clickHalfStar"
      v-if="allowHalf"
    ></span>
    <span class="mask2" v-if="showHalf" @mouseenter="showHalf = false">
      <ZtIcon icon="star-fill" color="var(--border)" size="18" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'Star',
  props: {
    allowHalf: {
      type: Boolean,
      default: false
    },
    num: {
      type: Number
    }
  },
  data() {
    return {
      starIcon: 'star',
      starColor: 'var(--border)',
      showHalf: false,
      select: false
    }
  },
  methods: {
    enterHalfStar() {
      this.showHalf = true
    },
    leaveHalfStar() {
      if (!this.select) {
        this.showHalf = false
      }
    },
    clickHalfStar() {
      this.select = true //点击选择半星标识，当鼠标离开时不清空选择
      this.$emit('clickHalfStar', this.num - 0.5)
    }
  }
}
</script>
<style lang="less" scoped>
.half {
  position: relative;
  cursor: pointer;
  .mask1 {
    height: 20px;
    width: 12px;
    background: transparent;
    position: absolute;
    left: 0px;
  }
  .mask2 {
    height: 18px;
    width: 10px;
    overflow: hidden;
    background: #fff;
    position: absolute;
    left: 12px;
    .zt-icon {
      position: absolute;
      left: -9px;
      transition: all 0.3s ease-out;
    }
  }
}
.star {
  padding: 0 3px;
  transition: all 0.3s ease-out;
}
</style>
