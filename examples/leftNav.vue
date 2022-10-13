<template>
    <aside class="leftNav">
        <router-link :to="item.path" v-for="(item, index) in list" :key="index">
            <div @click="handleClick(item)" :class="[currentPath == item.path ? 'action' : '']">{{ item.name }}</div>
        </router-link>
    </aside>
</template>
<script>
export default {
    name: 'LeftNav',
    data() {
        return {
            list: [
                { name: 'Button按钮', path: '/button' },
                { name: 'Icon图标', path: '/icon' },
                { name: 'Progress进度条', path: '/progress' },
                { name: 'Message消息提示', path: '/message' },
                { name: 'Tooltip文字提示', path: '/tooltip' },
                { name: 'Modal对话框', path: '/modal' },
                { name: 'Confirm确认框', path: '/confirm' },
                { name: 'Loading加载中', path: '/loading' },
                { name: 'Tabs标签页', path: '/tabs' },
                { name: 'Pagination分页', path: '/pagination' },
                { name: 'Rate评分', path: '/rate' },
                { name: 'Switch开关', path: '/switch' },
                { name: 'Select选择器', path: '/select' },
                { name: 'Input输入框', path: '/input' },
                { name: 'Radio单选框', path: '/radio' },
                { name: 'Checkbox复选框', path: '/checkbox' },
                { name: 'From表单', path: '/form' },
                { name: 'Timeline时间轴', path: '/timeline' }
                // { name: 'poptip气泡提示', path: '/poptip' },
                // { name: 'circle进度环', path: '/circle' },
                // { name: 'swiper轮播图', path: '/swiper' },
                // { name: 'tag标签', path: '/tag' },
                // { name: 'avatar头像', path: '/avatar' },
                // { name: 'menu导航栏', path: '/menu' },
                // { name: 'scroll滚动', path: '/scroll' },
                // { name: 'list列表', path: '/list' },
                // { name: 'table表格', path: '/table' }
            ],
            currentPath: ''
        }
    },
    methods: {
        handleClick(item) {
            this.currentPath = item.path
        }
    },
    watch: {
        $route(to) {
            this.currentPath = to.path
        }
    }
}
</script>
<style lang="less" scoped>
.leftNav {
    width: 240px;
    height: calc(100vh - 80px);
    border-right: 1px solid #eee;
    font-size: 17px;
    cursor: pointer;
    font-weight: bolder;
    overflow: auto;
}

.leftNav div {
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
}
a {
    text-decoration: none;
    color: #1f4e79;
}
.action {
    color: var(--primary);
}
</style>
