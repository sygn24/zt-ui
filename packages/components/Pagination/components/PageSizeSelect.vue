<template>
  <div style="display:inline-block">
    <zt-select v-model="value" width="100" height="30" @onChange="pageSizeChange">
      <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
  </div>
</template>

<script>
import { Select, Option } from '../../Select'
export default {
  name: 'PageSizeSelect',
  components: { Select, Option },
  props: {
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100]
    }
  },
  mounted() {
    this.initPageSizes()
  },
  data() {
    return {
      value: '',
      options: []
    }
  },
  methods: {
    initPageSizes() {
      this.value = this.pageSizes[0]
      this.pageSizes.forEach((page) => {
        let pageItem = {
          value: page,
          label: `${page}条/页`
        }
        this.options.push(pageItem)
      })
    },
    pageSizeChange() {
      this.$emit('pageSizeChange', this.value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>