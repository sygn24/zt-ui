<template>
  <div class="zt-rate" @mouseleave="mLeave">
    <Star v-for="(item, index) in count" :key="index" :index="item" />
    <span style="margin-left: 10px">{{ score }} 星</span>
  </div>
</template>

<script>
import Star from './Star.vue'
export default {
  name: 'ZtRate',
  components: { Star },
  props: {
    count: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0
    }
  },
  provide() {
    return { rateInstance: this }
  },
  data() {
    return {
      score: this.value
    }
  },
  mounted() {
    this.setLightStar(this.score)
  },
  methods: {
    getStars() {
      return this.$children
    },
    // 设置对应星星高亮
    setLightStar(score) {
      const stars = this.getStars()
      stars.forEach((item, index) => {
        if (index < score) {
          item.starIcon = 'star-fill'
          item.starColor = 'var(--warning)'
        } else {
          item.starIcon = 'star'
          item.starColor = 'var(--info)'
        }
      })
    },
    mLeave() {
      this.setLightStar(this.score)
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
