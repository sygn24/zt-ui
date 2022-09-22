<template>
    <span>
        <span>前往 </span>
        <zt-input
            style="width: 50px; height: 30px"
            type="number"
            v-model="pageNum"
            :placeholder="placeholder"
            @blur="tooglePage"
            @keyupEnter="tooglePage"
        ></zt-input>
        <span> 页</span>
    </span>
</template>

<script>
import ZtInput from '../../Input'
export default {
    name: 'PageNumJumper',
    components: { ZtInput },
    props: {
        page: Number
    },
    data() {
        return {
            placeholder: '',
            pageNum: this.page
        }
    },
    methods: {
        tooglePage() {
            let page = Number(this.pageNum)
            if (page == this.$parent.page) return
            page = page > 0 ? page : 1
            page = page < this.$parent.lastPageNum ? page : this.$parent.lastPageNum
            this.pageNum = page
            this.$parent.updateCurrentPage(page)
            this.$parent.setDynamicPage(page)
        }
    },
    watch: {
        page(val) {
            this.pageNum = val
        }
    }
}
</script>

<style lang="less" scoped></style>
