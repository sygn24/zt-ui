<template>
  <div class="zt-select" :class="{ disabled: disabled }" :style="styles">
    <div
      ref="selectContent"
      class="zt-select-content"
      @click="toggleSelect"
      @mouseenter="showClear=true"
      @mouseleave="showClear=false"
    >
      <div
        class="zt-select-content-label ellipsis"
        :class="{ plac: label == '' }"
        :title="label"
      >{{ label == '' ? placeholder : label }}</div>
      <ZtIcon
        icon="clear"
        :size="fontSize"
        class="zt-select-content-icon"
        v-if="clearable && showClear && label!==''"
        @click.stop="updateVal('', '')"
      />
      <ZtIcon
        icon="arrow-down-bold"
        :size="fontSize"
        class="zt-select-content-icon"
        :class="{ flip: showSelect, 'reverse-flip': !showSelect }"
        v-else
      />
    </div>
    <transition name="select-down">
      <div class="zt-select-drop" v-show="showSelect" ref="selectList">
        <div class="zt-select-drop-list">
          <slot v-if="$slots.default"></slot>
          <div v-else class="no-data">暂无数据</div>
        </div>
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
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 240
    },
    height: {
      type: [String, Number],
      default: 40
    },
    fontSize: {
      type: [String, Number],
      default: 14
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
      options: [],
      showClear: false
    }
  },
  mounted() {
    this.getOptions()
    this.setLabel()
    this.mouseupCloseSelect()
  },
  updated() {
    this.getOptions()
    this.setLabel()
  },
  computed: {
    styles() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
        lineHeight: this.height + 'px',
        fontSize: this.fontSize + 'px'
      }
    }
  },
  methods: {
    setLabel() {
      const option = this.options.find((item) => item.value == this.value)
      if (option !== undefined && option.label) {
        this.label = option.label
      } else {
        this.label = ''
      }
    },
    getOptions() {
      this.options = this.$children.filter(
        (item) => item.$options.name === 'ZtOption'
      )
    },
    updateVal(label, value) {
      this.$emit('valueChange', value)
      label !== '' && this.$emit('onChange', label)
    },
    toggleSelect() {
      if (this.disabled) return
      this.showSelect = !this.showSelect
    },
    // 点击页面其他部分关闭下拉框
    mouseupCloseSelect() {
      document.addEventListener('mouseup', (e) => {
        let selectContent = this.$refs.selectContent
        let selectList = this.$refs.selectList
        if (selectContent || selectList) {
          if (selectContent.contains(e.target) || selectList.contains(e.target))
            return
          else {
            this.showSelect = false
          }
        }
      })
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
