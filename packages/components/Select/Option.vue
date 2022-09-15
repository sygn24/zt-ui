<template>
  <div class="zt-select-option" @click="selectCurrent">
    <span>{{label}}</span>
  </div>
</template>

<script>
export default {
  name: 'ZtOption',
  props: {
    label: String,
    value: [String, Number]
  },
  data() {
    return {}
  },
  methods: {
    selectCurrent() {
      if (this.$parent.$options.name === 'ZtSelect') {
        this.$parent.updateVal(this.label, this.value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>