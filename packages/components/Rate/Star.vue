<template>
  <ZtIcon class="star" :icon="starIcon" :color="starColor" size="18" @mouseenter="enterStar" @click="clickStar" />
</template>

<script>
export default {
  name: 'Star',
  props: {
    index: {
      type: Number
    }
  },
  inject: ['rateInstance'],
  data() {
    return {
      starIcon: 'star',
      starColor: 'var(--info)'
    }
  },
  methods: {
    // 鼠标进入，设置对应星星高亮
    enterStar() {
      this.rateInstance.setLightStar(this.index)
    },
    clickStar() {
      this.rateInstance.score = this.index
      this.rateInstance.setLightStar(this.index)
    }
  }
}
</script>
