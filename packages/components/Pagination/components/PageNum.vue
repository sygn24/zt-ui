<template>
  <span class="zt-pagination-num" :class="classes" @click="pageNumClick">{{page}}</span>
</template>

<script>
export default {
  name: 'PageNum',
  inject: ['Pagination'],
  props: {
    page: Number
  },
  computed: {
    classes() {
      return {
        small: this.Pagination.small,
        bg: this.Pagination.background,
        active:
          !this.Pagination.background &&
          this.page === this.Pagination.currentPage,
        'active-bg':
          this.Pagination.background &&
          this.page === this.Pagination.currentPage
      }
    }
  },
  methods: {
    pageNumClick() {
      this.$emit('pageNumClick', this.page)
    }
  }
}
</script>