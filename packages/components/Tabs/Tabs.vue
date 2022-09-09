<template>
    <div class="zt-tabs">
        <div class="zt-tabs-nav" ref="tabsNav">
            <div
                class="zt-tabs-nav-item"
                :style="{ color: activeKey === item.name ? 'var(--primary)' : '' }"
                v-for="(item, index) in navList"
                :key="index"
                @click="handleChange(item, index)"
            >
                {{ item.label }}
            </div>
            <div class="zt-tabs-nav-active-line" :style="activeLineStyle"></div>
        </div>
        <div class="zt-tabs-panes">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZtTabs',
    props: {
        // 当前激活tab面板的name
        value: {
            type: [String, Number]
        },
        // 是否开启切换动画
        animated: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'value',
        event: 'onClick'
    },
    provide() {
        return { TabsInstance: this }
    },
    data() {
        return {
            navList: [],
            activeKey: this.value, //当前激活的tab面板
            lineWidth: '',
            lineOffset: 0
        }
    },
    computed: {
        // 当前激活tabPane下划线
        activeLineStyle() {
            return {
                width: `${this.lineWidth}px`,
                left: `${this.lineOffset}px`,
                transition: this.animated ? 'all .3s ease-out' : 'none'
            }
        }
    },
    methods: {
        // 初始化Tabs
        initTabs() {
            this.setNavList()
            this.setActivePane()
            this.setActiveLine()
        },
        // 获取tabs下的tabPane实例
        getTabs() {
            return this.$children.filter(item => item.$options.name === 'ZtTabPane')
        },
        // 获取tabsPane组件用户传入的props,设置navList数组，用于渲染
        setNavList() {
            this.navList = []
            const tabs = this.getTabs()
            tabs.forEach((pane, index) => {
                this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                })
                //如果不传value,默认选中第一项
                if (index === 0 && !this.activeKey) {
                    this.activeKey = pane.name
                }
            })
        },
        //设置当前激活的tabPane
        setActivePane() {
            const tabs = this.getTabs()
            // 遍历每个tabPane组件实例，设置显示或隐藏（当前绑定的value与tabPane的name相等时）
            tabs.forEach(tabPane => (tabPane.show = tabPane.name === this.activeKey))
        },
        // 设置当前激活tabPane的下划线
        setActiveLine() {
            //等待dom更新完毕后获取dom节点
            this.$nextTick(() => {
                //当前选中的activeKey下标
                const index = this.navList.findIndex(nav => nav.name === this.activeKey)
                // 获取所有tabs-nav-item
                const allTabPane = this.$refs.tabsNav.querySelectorAll('.zt-tabs-nav-item')
                // 获取当前激活的tabPane
                const activeTabPane = allTabPane[index]
                // 设置宽度
                this.lineWidth = activeTabPane ? activeTabPane.offsetWidth : 0
                // 设置偏移量
                if (index > 0) {
                    let offset = 0
                    for (let i = 0; i < index; i++) {
                        offset += allTabPane[i].offsetWidth
                    }
                    this.lineOffset = offset
                } else {
                    this.lineOffset = 0
                }
            })
        },
        // 点击tabNavItem,更改activeKey为当前点击的name
        handleChange(item, index) {
            if (!item.name) return
            if (this.animated) {
                // 获取点击前的索引
                const lastIndex = this.navList.findIndex(nav => nav.name === this.activeKey)
                // 如果当前点击的索引号小于上一个索引，就设置反向动画
                this.$children.forEach(child => {
                    index < lastIndex ? (child.isReverse = true) : (child.isReverse = false)
                })
            }
            this.activeKey = item.name
            this.$emit('onClick', item.name)
        }
    },
    watch: {
        // 监听绑定值的变化，赋值给activeKey，设置当前激活的tabPane
        value(val) {
            this.activeKey = val
        },
        // 监听activeKey变化，设置当前激活的tabPane,设置激活的下划线
        activeKey() {
            this.setActivePane()
            this.setActiveLine()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
