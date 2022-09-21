<template>
    <span>
        <span>前往 </span>
        <zt-input
            style="width: 50px; height: 30px"
            type="number"
            @blur="tooglePage"
            @keyupEnter="tooglePage"
            v-model="page"
            :placeholder="placeholder"
        ></zt-input>
        <span> 页</span>
    </span>
</template>

<script>
import ZtInput from '../../Input'
export default {
    name: 'PageNumJumper',
    components: { ZtInput },
    data() {
        return {
            placeholder: '',
            page: this.$parent.currentPage
        }
    },
    methods: {
        tooglePage() {
            let page = Number(this.page)
            if (page == this.$parent.currentPage) return
            page = page > 0 ? page : 1
            page = page < this.$parent.lastPageNum ? page : this.$parent.lastPageNum
            this.page = page
            this.$parent.updateCurrentPage(page)
            this.$parent.setDynamicPage(page)
        }
    }
}
</script>

<style lang="less" scoped></style>
