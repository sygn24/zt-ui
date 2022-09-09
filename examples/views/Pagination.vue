<template>
  <div>
    <zt-pagination :total="100" :limit="10" :page="1" @pageChange="pageChange"></zt-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  data() {
    return {}
  },
  methods: {
    pageChange(page) {
      this.$msg('第' + page + '页')
    }
  }
}
</script>

<style lang="less" scoped>
</style>