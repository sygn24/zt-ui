<template>
    <div class="zt-menu" ref="ztMenuInstance" :style="styles" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtMenu',
    props: {
        activeIndex: {
            type: [String, Number],
            default: ''
        },
        model: {
            type: String,
            validator: model => {
                return ['vertical', 'horizontal'].includes(model)
            },
            default: 'vertical'
        },
        uniqueOpened: {
            type: Boolean,
            default: true
        },
        showActiveLine: {
            type: Boolean,
            default: true
        },
        router: {
            type: Boolean,
            default: false
        },
        showBorder: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
            default: '200px'
        },
        height: {
            type: String,
            default: '50px'
        },
        backgroundColor: {
            type: String,
            default: '#fff'
        },
        textColor: {
            type: String,
            default: 'var(--primary-text)'
        },
        activeTextColor: {
            type: String,
            default: 'var(--primary)'
        },
        activeLineColor: {
            type: String,
            default: 'var(--primary)'
        },
        activeBackgroundColor: {
            type: String,
            default: 'var(--hover-bg)'
        }
    },
    model: {
        prop: 'activeIndex',
        event: 'onSelect'
    },
    provide() {
        return {
            Menu: this
        }
    },
    mounted() {
        this.setActiveMenuItem()
    },
    computed: {
        styles() {
            return {
                width: this.model === 'vertical' ? this.width : '',
                height: this.model === 'horizontal' ? this.height : '',
                '--backgroundColor': this.backgroundColor,
                '--textColor': this.textColor,
                '--activeTextColor': this.activeTextColor,
                '--activeLineColor': this.activeLineColor,
                '--activeBackgroundColor': this.activeBackgroundColor
            }
        },
        classes() {
            return {
                vertical: this.model === 'vertical',
                horizontal: this.model === 'horizontal',
                'no-border': !this.showBorder
            }
        }
    },
    methods: {
        // 设置激活的menuItem
        setActiveMenuItem() {
            let getMenuItem = vm => {
                vm.$children.forEach(child => {
                    if (child.$options.name !== 'ZtMenuItem') {
                        getMenuItem(child)
                    }
                    if (child.$options.name === 'ZtMenuItem') {
                        // 设置menuItem激活状态
                        child.isActive = this.activeIndex === child.index
                    }
                    if (child.$options.name === 'ZtSubmenu') {
                        // 设置submenu激活状态
                        child.setActiveSubMenu()
                    }
                })
            }
            getMenuItem(this)
        },
        updateActiveMenuItem(index) {
            this.$emit('onSelect', index)
        }
    },
    watch: {
        activeIndex() {
            this.setActiveMenuItem()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
