<template>
  <div class="zt-pagination">
    <!-- 总条数 -->
    <span class="zt-pagination-total" v-show="showTotal">共 {{Math.ceil(total)}} 条</span>
    <!-- 上一页按钮 -->
    <button
      type="button"
      class="zt-pagination-prev"
      :class="{allowed:currentPage!==1,small:small}"
      :style="{cursor: this.currentPage === 1 ? 'not-allowed' : 'pointer',background: this.background ? '#f4f4f5' : ''}"
      :disabled="currentPage===1"
      @click="singleArrowClick(-1)"
    >
      <ZtIcon icon="arrow-left-bold" :size="small?12:13" />
    </button>
    <!-- 页码 -->
    <div class="zt-pagination-pager">
      <!-- 第一页 -->
      <span class="zt-pagination-pager-num" :class="pageNumClass(1)" @click="staticPageClick(1)">1</span>
      <!-- 动态页码按钮 -->
      <div class="zt-pagination-pager-btns" v-show="!isOnePage">
        <!-- 省略号or双箭头left -->
        <span
          title="向前5页"
          class="zt-pagination-pager-num"
          :class="{small:small}"
          :style="background?'background:#f4f4f5':''"
          v-show="!isLessThan10 && doublePrev"
          @mouseenter="ellipsisPrev=false"
          @mouseleave="ellipsisPrev=true"
          @click="doubleArrowClick(-1)"
        >
          <ZtIcon :icon="ellipsisPrev?'ellipsis':'double-arrow-left'" />
        </span>
        <!-- 动态页码 -->
        <span
          v-for="page in dynamicPageArr"
          :key="page"
          class="zt-pagination-pager-num"
          :class="pageNumClass(page)"
          @click="dynamicPageClick(page)"
        >{{page}}</span>
        <!-- 省略号or双箭头right -->
        <span
          title="向后5页"
          class="zt-pagination-pager-num"
          :class="{small:small}"
          :style="background?'background:#f4f4f5':''"
          v-show="!isLessThan10 && doubleNext"
          @mouseenter="ellipsisNext=false"
          @mouseleave="ellipsisNext=true"
          @click="doubleArrowClick(1)"
        >
          <ZtIcon :icon="ellipsisNext?'ellipsis':'double-arrow-right'" />
        </span>
      </div>
      <!-- 最后一页 -->
      <span
        class="zt-pagination-pager-num"
        :class="pageNumClass(lastPageNum)"
        style="margin-right:0"
        v-show="!isOnePage"
        @click="staticPageClick(lastPageNum)"
      >{{lastPageNum}}</span>
    </div>
    <!-- 下一页按钮 -->
    <button
      type="button"
      class="zt-pagination-next"
      :class="{allowed:currentPage!==lastPageNum,small:small}"
      :style="{cursor: this.currentPage === lastPageNum ? 'not-allowed' : 'pointer',background: this.background ? '#f4f4f5' : ''}"
      :disabled="currentPage===lastPageNum"
      @click="singleArrowClick(1)"
    >
      <ZtIcon icon="arrow-right-bold" :size="small?12:13" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ZtPagination',
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
      ellipsisPrev: true, //省略号or左双箭头
      ellipsisNext: true, //省略号or右双箭头
      dynamicPageArr: [] //动态页码数组
    }
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
      let arrLength = this.isLessThan10 ? this.lastPageNum - 2 : 5
      this.dynamicPageArr = Array.from(
        { length: arrLength },
        (_, index) => index + 2
      )
      // 如果大于10页，根据当前页设置动态页码
      !this.isLessThan10 && this.setDynamicPage(this.currentPage)
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
      // 如果显示向右的双箭头并且点击的是动态页码最后两项，重新设置动态页码
      if (this.doubleNext) {
        let lastIndex = this.dynamicPageArr.length - 1
        if (
          currentPage === this.dynamicPageArr[lastIndex] ||
          currentPage === this.dynamicPageArr[lastIndex - 1]
        ) {
          this.setDynamicPage(currentPage)
        }
      }
      //如果显示向左的双箭头并且点击的是动态页码前两项，重新设置动态页码
      if (this.doublePrev) {
        if (
          currentPage === this.dynamicPageArr[0] ||
          currentPage === this.dynamicPageArr[1]
        ) {
          this.setDynamicPage(currentPage)
        }
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
    },
    // 动态设置页码类名
    pageNumClass(page) {
      return {
        bg: this.background,
        active: !this.background && page === this.currentPage,
        'active-bg': this.background && page === this.currentPage,
        small: this.small
      }
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