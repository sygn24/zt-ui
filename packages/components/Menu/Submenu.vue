<template>
    <div class="zt-menu-submenu">
        <div ref="ztMenuItemInstance" class="zt-menu-submenu-title ellipsis" :style="styles" :class="titleClass" @click="showMoreMenu">
            <slot name="title">{{ title }}</slot>
            <ZtIcon icon="arrow-down-bold" size="12" class="zt-menu-submenu-icon" :class="iconClass" />
            <span
                class="zt-menu-item-line"
                :class="horizontalModel ? 'horizontal' : ''"
                :style="horizontalModel ? { top: offsetTop + 'px' } : ''"
                v-if="horizontalModel"
                v-show="Menu.showActiveLine && isActive"
            ></span>
        </div>
        <transition
            v-if="verticalModel"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
        >
            <div class="zt-menu-submenu-vertical" v-show="showMore">
                <slot></slot>
            </div>
        </transition>

        <transition name="select-down" v-if="horizontalModel">
            <div
                ref="dropdownList"
                class="zt-menu-submenu-horizontal"
                :style="horizontalModel ? { top: offsetTop + 5 + 'px' } : ''"
                v-show="showMore"
                @click="dropdownListSelect"
            >
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import ZtIcon from '../Icon'
import mixin from './mixin'
export default {
    name: 'ZtSubmenu',
    mixins: [mixin],
    components: { ZtIcon },
    props: {
        index: {
            type: [String, Number]
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            showMore: false,
            isActive: false,
            parentIndexArr: []
        }
    },
    mounted() {
        this.horizontalModel && document.addEventListener('mouseup', e => this.mouseupCloseDropdownList(e))
    },
    beforeDestroy() {
        this.horizontalModel && document.removeEventListener('mouseup', e => this.mouseupCloseDropdownList(e))
    },
    computed: {
        titleClass() {
            return {
                active: this.isActive,
                vertical: this.verticalModel,
                horizontal: this.horizontalModel
            }
        },
        iconClass() {
            return {
                vertical: this.verticalModel,
                horizontal: this.horizontalModel,
                flip: this.showMore,
                'reverse-flip': !this.showMore
            }
        }
    },
    methods: {
        // 设置submenu标题的激活状态
        setActiveSubMenu() {
            let childActiveArr = []
            let getMenuItem = vm => {
                vm.$children.forEach(child => {
                    if (child.$options.name !== 'ZtMenuItem') {
                        getMenuItem(child)
                    } else {
                        childActiveArr.push(child.isActive)
                    }
                })
            }
            getMenuItem(this)
            this.isActive = childActiveArr.some(item => item == true)
        },
        // 显示子菜单
        showMoreMenu() {
            this.showMore = !this.showMore
            if (this.horizontalModel) {
                // 如果在水平模式下,需要关闭其他menuItem的激活状态
                this.Menu.$children.forEach(child => {
                    if (child.$options.name === 'ZtMenuItem') {
                        child.isActive = false
                    }
                })
                if (this.showMore) {
                    this.isActive = true
                } else {
                    this.Menu.setActiveMenuItem()
                }
            }
            // 如果在垂直模式下并且设置只能展开一个子菜单时
            if (this.verticalModel && this.Menu.uniqueOpened) {
                this.getParentSubMenu()
                this.closeBrotherSubMenu()
            }
        },
        // 获取当前点击submenu的所有父级submenu
        getParentSubMenu() {
            let getParentSub = vm => {
                let parent = vm.$parent
                if (parent.$options.name === 'ZtMenuItemGroup') {
                    getParentSub(parent)
                }
                if (parent.$options.name === 'ZtSubmenu') {
                    this.parentIndexArr.push(parent.index)
                    getParentSub(parent)
                }
                if (parent.$options.name === 'ZtMenu') return
            }
            getParentSub(this)
        },
        // 关闭当前点击submenu的兄弟submenu
        closeBrotherSubMenu() {
            let getBrotherSubMenu = vm => {
                vm.$children.forEach(child => {
                    if (child.$options.name === 'ZtMenuItemGroup') {
                        getBrotherSubMenu(child)
                    }
                    if (child.$options.name === 'ZtSubmenu' && child.index !== this.index) {
                        getBrotherSubMenu(child)
                        if (this.parentIndexArr.indexOf(child.index) < 0) {
                            child.showMore = false
                        }
                    }
                })
            }
            getBrotherSubMenu(this.Menu)
        },
        // 垂直模式下子菜单展开的过渡动画
        beforeEnter(el) {
            el.style.height = 0
            el.style.overflow = 'hidden'
            el.style.transition = 'all .3s ease-out'
        },
        enter(el) {
            el.style.height = el.scrollHeight + 'px'
        },
        afterEnter(el) {
            el.style.overflow = ''
            el.style.height = ''
        },
        beforeLeave(el) {
            el.style.height = el.scrollHeight + 'px'
            el.style.overflow = 'hidden'
            el.style.transition = 'all .3s ease-out'
        },
        leave(el) {
            setTimeout(() => {
                el.style.height = 0
            })
        },
        afterLeave(el) {
            el.style.overflow = ''
            el.style.height = ''
        },
        // 水平模式下选择子菜单里的menuItem
        dropdownListSelect() {
            this.showMore = false
            this.Menu.setActiveMenuItem()
        },
        // 点击其他区域关闭水平模式下的子菜单
        mouseupCloseDropdownList(e) {
            let dropdown = this.$refs.ztMenuItemInstance
            let dropdownList = this.$refs.dropdownList
            if (dropdown || dropdownList) {
                if (dropdown.contains(e.target) || dropdownList.contains(e.target)) return
                else {
                    this.dropdownListSelect()
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
