<template>
  <div class="zt-select">
    <div class="zt-select-content" :class="{plac:label==''}" @click="showSelect=!showSelect">
      <div class="zt-select-content-label">{{label==""?placeholder:label}}</div>
      <ZtIcon icon="arrow-down-bold" class="zt-select-content-trangle" />
    </div>
    <transition name="select-down">
      <div class="zt-select-list" v-show="showSelect" @click="showSelect=!showSelect">
        <slot v-if="$slots.default"></slot>
        <div v-else class="no-data">暂无数据</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ZtSelect',
  props: {
    value: {
      type: [String, Number],
      require: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    labelInValue: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'valueChange'
  },
  data() {
    return {
      showSelect: false,
      label: '',
      options: []
    }
  },
  mounted() {
    this.getOptions()
    this.setLabel()
  },
  methods: {
    setLabel() {
      const option = this.options.find((item) => item.value == this.value)
      if (option !== undefined) {
        this.label = option.label
      }
    },
    getOptions() {
      this.options = this.$children.filter(
        (item) => item.$options.name === 'ZtOption'
      )
    },
    updateVal(label, value) {
      this.$emit('valueChange', value)
      this.$emit('onChange', label)
    }
  },
  watch: {
    value() {
      this.setLabel()
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>