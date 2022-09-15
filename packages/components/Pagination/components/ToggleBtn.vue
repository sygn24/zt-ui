<template>
  <button
    type="button"
    class="zt-pagination-toggle"
    :class="classes"
    :style="styles"
    :disabled="disabled"
    @click="singleArrowClick"
  >
    <ZtIcon :icon="`arrow-${direction}-bold`" :size="Pagination.small ? 12 : 13" />
  </button>
</template>

<script>
import ZtIcon from '../../Icon'
export default {
  name: 'ToggleBtn',
  components: { ZtIcon },
  inject: ['Pagination'],
  props: {
    page: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    direction: {
      validator: (item) => {
        return ['left', 'right'].includes(item)
      }
    }
  },
  computed: {
    styles() {
      return {
        cursor:
          this.Pagination.currentPage === this.page ? 'not-allowed' : 'pointer',
        background: this.Pagination.background ? '#f4f4f5' : ''
      }
    },
    classes() {
      return {
        allowed: this.Pagination.currentPage !== this.page,
        small: this.Pagination.small
      }
    }
  },
  methods: {
    singleArrowClick() {
      this.$emit('singleArrowClick')
    }
  }
}
</script>