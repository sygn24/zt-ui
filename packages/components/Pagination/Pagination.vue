<template>
    <div class="zt-pagination">
        <span class="zt-pagination-total" v-show="showTotal">共 {{ Math.ceil(total) }} 条</span>
        <page-size-select v-show="showSizes" @pageSizeChange="pageSizeChange" />
        <toggle-btn direction="left" :page="1" :disabled="page === 1" />
        <page-num :page="1" />
        <div v-show="!isOnePage" style="display: inline-block">
            <more-btn title="向前5页" direction="left" v-show="!isLessThan10 && showPrevMore" />
            <page-num v-for="item in dynamicPageArr" :key="item" :page="item" />
            <more-btn title="向后5页" direction="right" v-show="!isLessThan10 && showNextMore" />
            <page-num :page="lastPageNum" />
        </div>
        <toggle-btn direction="right" :page="lastPageNum" :disabled="page === lastPageNum" />
        <page-num-jumper :page="page" v-show="showJumper" />
    </div>
</template>

<script>
import MoreBtn from './components/MoreBtn.vue'
import ToggleBtn from './components/ToggleBtn.vue'
import PageNum from './components/PageNum.vue'
import PageSizeSelect from './components/PageSizeSelect.vue'
import PageNumJumper from './components/PageNumJumper.vue'
export default {
    name: 'ZtPagination',
    components: { MoreBtn, ToggleBtn, PageNum, PageSizeSelect, PageNumJumper },
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
        // 每页显示数量选择器的选项设置
        pageSizes: {
            type: Array,
            default: () => [10, 20, 30, 40, 50]
        },
        // 是否为分页按钮添加背景色
        background: {
            type: Boolean,
            default: false
        },
        // 是否为分页按钮添加边框
        border: {
            type: Boolean,
            default: false
        },
        // 是否开启小型分页样式
        small: {
            type: Boolean,
            default: false
        },
        // 是否显示总条数
        showTotal: {
            type: Boolean,
            default: false
        },
        // 是否显示每页数量选择器
        showSizes: {
            type: Boolean,
            default: false
        },
          // 是否显示输入框跳转
        showJumper: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showPrevMore: false, //是否显示向后5页按钮
            showNextMore: false, //是否显示向前5页按钮
            dynamicPageArr: [], //动态页码数组
            limit: this.pageSize,
            page: this.currentPage
        }
    },
    created() {
        this.initPagination()
    },
    computed: {
        // 最后一页页码
        lastPageNum() {
            if (this.total <= 0) return 1
            return Math.ceil(this.total / this.limit)
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
        // 初始化
        initPagination() {
            // 先隐藏向前或向后5页按钮（设置动态页码时会重新赋值）
            this.showPrevMore = false
            this.showNextMore = false
            // 如果页数小于10页
            if (this.isLessThan10) {
                this.dynamicPageArr = Array.from({ length: this.lastPageNum - 2 }, (_, index) => index + 2)
            } else {
                // 如果大于10页，根据当前页设置动态页码
                this.setDynamicPage(this.page)
            }
            // 初始化当前页码
            if (this.page > this.lastPageNum) {
                this.page = this.lastPageNum
                this.$emit('update:currentPage', this.lastPageNum)
            }
            if (this.page < 1) {
                this.page = 1
                this.$emit('update:currentPage', 1)
            }
        },
        // 根据当前页设置动态页码
        setDynamicPage(currentPage) {
            let pageStart = currentPage - 2
            pageStart = pageStart < 2 ? 2 : pageStart
            pageStart = pageStart > this.lastPageNum - 5 ? this.lastPageNum - 5 : pageStart
            this.dynamicPageArr = Array.from({ length: 5 }, (_, index) => index + pageStart)
            // 设置是否显示向前or向后5页按钮
            let lastIndex = this.dynamicPageArr.length - 1
            this.showPrevMore = this.dynamicPageArr[0] === 2 ? false : true
            this.showNextMore = this.dynamicPageArr[lastIndex] === this.lastPageNum - 1 ? false : true
        },
        // 更新当前页
        updateCurrentPage(currentPage) {
            this.page = currentPage
            this.$emit('update:currentPage', currentPage)
            this.$emit('current-change', currentPage)
        },
        // 静态页码点击
        staticPageClick(pageNum) {
            if (pageNum === this.page) return
            this.updateCurrentPage(pageNum)
            // 如果显示向前or向后5页按钮时，点击第一页or最后一页设置动态页码
            if (this.showPrevMore || this.showNextMore) {
                this.setDynamicPage(pageNum)
            }
        },
        // 动态页码点击
        dynamicPageClick(pageNum) {
            if (pageNum === this.page) return
            this.updateCurrentPage(pageNum)
            let currentIndex = this.dynamicPageArr.findIndex(page => page === pageNum)
            // 如果显示向后5页按钮并且点击的是动态页码最后两项，重新设置动态页码
            if (this.showNextMore && (currentIndex === 3 || currentIndex === 4)) {
                this.setDynamicPage(pageNum)
            }
            // 如果显示向前5页按钮并且点击的是动态页码前两项，重新设置动态页码
            if (this.showPrevMore && (currentIndex === 0 || currentIndex === 1)) {
                this.setDynamicPage(pageNum)
            }
        },
        // 每页显示数量改变
        pageSizeChange(pageSize) {
            this.limit = pageSize
            this.initPagination()
            this.$emit('update:pageSize', pageSize)
            this.$emit('size-change', pageSize)
        }
    },
    watch: {
        total() {
            this.initPagination()
        },
        pageSize(val) {
            val !== this.limit && this.initPagination()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
