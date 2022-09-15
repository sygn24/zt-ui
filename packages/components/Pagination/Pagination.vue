<template>
  <div class="zt-pagination">
    <span class="zt-pagination-total" v-show="showTotal">共 {{ Math.ceil(total) }} 条</span>
    <toggle-btn
      direction="left"
      :page="1"
      :disabled="currentPage === 1"
      @singleArrowClick="singleArrowClick(-1)"
    />
    <page-num :page="1" @pageNumClick="staticPageClick(1)" />
    <!-- 动态页码 -->
    <div v-show="!isOnePage" style="display:inline-block">
      <double-arrow
        title="向前5页"
        direction="left"
        v-show="!isLessThan10 && doublePrev"
        @doubleArrowClick="doubleArrowClick(-1)"
      />
      <page-num
        v-for="page in dynamicPageArr"
        :key="page"
        :page="page"
        @pageNumClick="dynamicPageClick(page)"
      />
      <double-arrow
        title="向后5页"
        direction="right"
        v-show="!isLessThan10 && doubleNext"
        @doubleArrowClick="doubleArrowClick(1)"
      />
      <!-- 最后一页 -->
      <page-num :page="lastPageNum" @pageNumClick="staticPageClick(lastPageNum)" />
    </div>
    <toggle-btn
      direction="right"
      :page="lastPageNum"
      :disabled="currentPage === lastPageNum"
      @singleArrowClick="singleArrowClick(1)"
    />
  </div>
</template>

<script>
import DoubleArrow from './components/DoubleArrows.vue'
import ToggleBtn from './components/ToggleBtn.vue'
import PageNum from './components/PageNum.vue'
export default {
  name: 'ZtPagination',
  components: { DoubleArrow, ToggleBtn, PageNum },
  props: {
    // 总条数
    total: {
      type: Number,
      require: true
    },
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页显示数量
    pageSize: {
      type: Number,
      default: 10
    },
    // 是否为分页按钮添加背景色
    background: {
      type: Boolean,
      default: false
    },
    // 是否显示总条数
    showTotal: {
      type: Boolean,
      default: false
    },
    // 是否开启小型分页样式
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      doublePrev: false, //是否显示左双箭头
      doubleNext: false, //是否显示右双箭头
      dynamicPageArr: [] //动态页码数组
    }
  },
  provide() {
    return { Pagination: this }
  },
  mounted() {
    this.initDynamicPage()
    this.initCurrent()
  },
  computed: {
    // 最后一页页码
    lastPageNum() {
      if (this.total <= 0) return 1
      return Math.ceil(this.total / this.pageSize)
    },
    // 是否为一页
    isOnePage() {
      if (this.lastPageNum > 1) return false
      return true
    },
    // 是否小于10页
    isLessThan10() {
      if (this.lastPageNum < 10) return true
      return false
    }
  },
  methods: {
    // 初始化动态页码
    initDynamicPage() {
      // 如果页数小于10页
      if (this.isLessThan10) {
        this.dynamicPageArr = Array.from(
          { length: this.lastPageNum - 2 },
          (_, index) => index + 2
        )
      } else {
        // 如果大于10页，根据当前页设置动态页码
        this.setDynamicPage(this.currentPage)
      }
    },
    // 初始化当前页码
    initCurrent() {
      if (this.currentPage > this.lastPageNum) {
        this.$emit('update:currentPage', this.lastPageNum)
      }
      if (this.currentPage < 1) {
        this.$emit('update:currentPage', 1)
      }
    },
    //根据当前页码设置动态页码
    setDynamicPage(currentPage) {
      let pageStart = currentPage - 2
      pageStart = pageStart < 2 ? 2 : pageStart
      pageStart =
        pageStart > this.lastPageNum - 5 ? this.lastPageNum - 5 : pageStart
      this.dynamicPageArr = Array.from(
        { length: 5 },
        (_, index) => index + pageStart
      )
      // 设置是否显示省略号双箭头
      let lastIndex = this.dynamicPageArr.length - 1
      this.doublePrev = this.dynamicPageArr[0] === 2 ? false : true
      this.doubleNext =
        this.dynamicPageArr[lastIndex] === this.lastPageNum - 1 ? false : true
    },
    // 更新当前页码
    updateCurrentPage(currentPage) {
      this.$emit('update:currentPage', currentPage)
      this.$emit('current-change', currentPage)
    },
    //静态页码点击，即点击第一页或最后一页
    staticPageClick(currentPage) {
      if (currentPage === this.currentPage) return
      this.updateCurrentPage(currentPage)
      if (this.doublePrev || this.doubleNext) {
        this.setDynamicPage(currentPage)
      }
    },
    // 动态页码点击
    dynamicPageClick(currentPage) {
      if (currentPage === this.currentPage) return
      this.updateCurrentPage(currentPage)
      let currentIndex = this.dynamicPageArr.findIndex(
        (page) => page === currentPage
      )
      // 如果显示向右的双箭头并且点击的是动态页码最后两项，重新设置动态页码
      if (this.doubleNext && (currentIndex === 3 || currentIndex === 4)) {
        this.setDynamicPage(currentPage)
      }
      // 如果显示向左的双箭头并且点击的是动态页码前两项，重新设置动态页码
      if (this.doublePrev && (currentIndex === 0 || currentIndex === 1)) {
        this.setDynamicPage(currentPage)
      }
    },
    //点击省略号双箭头
    doubleArrowClick(num) {
      let current = num === 1 ? this.currentPage + 5 : this.currentPage - 5
      current = current > 0 ? current : 1
      current = current < this.lastPageNum ? current : this.lastPageNum
      this.setDynamicPage(current)
      this.updateCurrentPage(current)
    },
    // 点击单箭头上一页or下一页
    singleArrowClick(num) {
      let current = num === 1 ? this.currentPage + 1 : this.currentPage - 1
      this.dynamicPageClick(current)
    }
  },
  watch: {
    total() {
      this.initDynamicPage()
    },
    pageSize() {
      this.initDynamicPage()
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
