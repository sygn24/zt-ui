<template>
    <aside class="leftMenu" ref="leftMenu">
        <zt-menu v-model="defaultActive" router width="200px" :show-border="false" style="padding: 15px 0">
            <zt-menu-item-group v-for="(item, index) in allList" :key="index" :title="item.title" style="font-size: 14px">
                <zt-menu-item v-for="(item2, index2) in item.list" :key="index2" :index="item2.index" style="font-size: 16px">
                    <ZtIcon icon="component" />
                    <span class="title">{{ item2.name }}</span>
                </zt-menu-item>
            </zt-menu-item-group>
        </zt-menu>
    </aside>
</template>
<script>
export default {
    name: 'leftMenu',
    data() {
        return {
            defaultActive: '',
            allList: [
                {
                    title: '基础组件',
                    icon: 'element',
                    list: [
                        { name: 'Button按钮', index: '/button' },
                        { name: 'Icon图标', index: '/icon' }
                    ]
                },
                {
                    title: '表单组件',
                    icon: 'file',
                    list: [
                        { name: 'Input输入框', index: '/input' },
                        { name: 'Radio单选框', index: '/radio' },
                        { name: 'Checkbox复选框', index: '/checkbox' },
                        { name: 'Rate评分', index: '/rate' },
                        { name: 'Switch开关', index: '/switch' },
                        { name: 'Select选择器', index: '/select' },
                        { name: 'From表单', index: '/form' }
                    ]
                },
                {
                    title: '消息视图',
                    icon: 'comment',
                    list: [
                        { name: 'Message消息提示', index: '/message' },
                        { name: 'Tooltip文字提示', index: '/tooltip' },
                        { name: 'Modal对话框', index: '/modal' },
                        { name: 'Confirm确认框', index: '/confirm' },
                        { name: 'Drawer抽屉', index: '/drawer' },
                        { name: 'Carousel走马灯', index: '/carousel' }
                    ]
                },
                {
                    title: '导航组件',
                    icon: 'navigation',
                    list: [
                        { name: 'Menu导航菜单', index: '/menu' },
                        { name: 'Tabs标签页', index: '/tabs' },
                        { name: 'Pagination分页', index: '/pagination' }
                    ]
                },
                {
                    title: '其他组件',
                    icon: 'other',
                    list: [
                        { name: 'Progress进度条', index: '/progress' },
                        { name: 'Loading加载中', index: '/loading' },
                        { name: 'Timeline时间轴', index: '/timeline' }
                    ]
                }
            ],
        }
    },
    watch: {
        $route(to) {
            this.defaultActive = to.path
            document.querySelector('.rightContent').scrollTo(0, 0);
        }
    }
}
</script>
<style lang="less" scoped>
.leftMenu {
    height: calc(100vh - 80px);
    width: 201px;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 16px;
    &::-webkit-scrollbar {
        display: none;
    }
}
.title {
    margin-left: 5px;
}
</style>
