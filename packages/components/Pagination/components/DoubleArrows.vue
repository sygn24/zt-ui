<template>
  <span
    :title="title"
    class="zt-pagination-num"
    :class="classes"
    :style="styles"
    @mouseenter="ellipsis = false"
    @mouseleave="ellipsis = true"
    @click="doubleArrowClick"
  >
    <ZtIcon :icon="ellipsis ? 'ellipsis' : `double-arrow-${direction}`" :size="Pagination.small ? 12 : 13"/>
  </span>
</template>

<script>
import ZtIcon from '../../Icon'
export default {
  name: 'DoubleArrow',
  components: { ZtIcon },
  inject: ['Pagination'],
  props: {
    title: String,
    direction: {
      validator: (item) => {
        return ['left', 'right'].includes(item)
      }
    }
  },
  data() {
    return {
      ellipsis: true
    }
  },
  computed: {
    styles() {
      return {
        background: this.Pagination.background ? 'var(--darker-bg4)' : ''
      }
    },
    classes() {
      return { small: this.Pagination.small }
    }
  },
  methods: {
    doubleArrowClick() {
      this.$emit('doubleArrowClick')
    }
  }
}
</script>