<template>
    <div class="page">
        <div class="row">
            <h3>基础用法</h3>
            <h4>页数少于10</h4>
            <zt-pagination :total="60" :current-page.sync="currentPage1" :page-size.sync="pageSize1"></zt-pagination>
            <h4>页数大于10</h4>
            <zt-pagination :total="150" :current-page.sync="currentPage2"></zt-pagination>
        </div>
        <div class="row">
            <h3>小型分页</h3>
            <zt-pagination :total="60" :current-page.sync="currentPage6" small></zt-pagination>
        </div>
        <div class="row">
            <h3>带有背景色</h3>
            <zt-pagination :total="200" :current-page.sync="currentPage3" background show-total></zt-pagination>
        </div>
        <div class="row">
            <h3>自定义当前页码和每页数量，显示总条数</h3>
            <h4>每页数量：{{ pageSize6 }}</h4>
            <zt-pagination
                :total="1200"
                :current-page.sync="currentPage4"
                :page-size.sync="pageSize6"
                background
                show-total
            ></zt-pagination>
        </div>
        <div class="row">
            <h3>当前页改变的回调</h3>
            <zt-pagination
                :total="1200"
                :current-page.sync="currentPage5"
                :page-size.sync="pageSize6"
                @current-change="pageChange"
                background
                show-total
            ></zt-pagination>
        </div>
        <div class="row">
            <h3>可设置每页显示数量,不传page-sizes，默认[10,20,30,40,50]</h3>
            <zt-pagination :total="1200" :current-page.sync="currentPage7" background show-total show-sizes></zt-pagination>
        </div>
        <div class="row">
            <h3>
                可设置每页显示数量,传page-sizes[100,200,300,400,500],显示跳转
                <zt-button size="small" type="primary" @click="total += 200">总条数增加200</zt-button>
            </h3>
            <zt-pagination
                :total="total"
                :current-page.sync="currentPage8"
                :page-size.sync="pageSize8"
                :page-sizes="[100, 200, 300, 400, 500]"
                @size-change="pageSzieChange2"
                @current-change="pageChange2"
                background
                show-total
                show-sizes
                show-jumper
            ></zt-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    data() {
        return {
            currentPage1: 1,
            currentPage2: 1,
            currentPage3: 1,
            currentPage4: 1,
            currentPage5: 8,
            currentPage6: 2,
            currentPage7: 4,
            currentPage8: 6,
            pageSize1: 10,
            pageSize6: 60,
            pageSize8: 100,
            total: 1200
        }
    },
    methods: {
        pageChange(page) {
            this.$msg('第' + this.currentPage5 + '页')
            console.log(page)
        },
        pageSzieChange2(size) {
            this.$msg(size + '条/页')
        },
        pageChange2(page) {
            this.currentPage8 = page
            this.$msg('第' + page + '页')
        }
    }
}
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
    h3,
    h4 {
        padding: 10px;
    }
}
</style>
