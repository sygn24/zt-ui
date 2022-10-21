<template>
    <div class="zt-menu-item" ref="ztMenuItemInstance" :class="classes" :style="styles" @click="menuItemClick">
        <div class="ellipsis" style="width: 100%">
            <slot></slot>
        </div>
        <span
            class="zt-menu-item-line"
            :class="verticalModel ? 'vertical' : 'horizontal'"
            :style="verticalModel ? '' : { top: offsetTop + 'px' }"
            v-show="isActive"
            v-if="Menu.showActiveLine && !notHorizontalModelMenu"
        ></span>
    </div>
</template>

<script>
import mixin from './mixin'
export default {
    name: 'ZtMenuItem',
    mixins: [mixin],
    props: {
        index: {
            type: [String, Number]
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        classes() {
            return {
                active: this.isActive,
                vertical: this.verticalModel,
                horizontal: this.horizontalModel,
                'in-submenu': this.notHorizontalModelMenu
            }
        },
        notHorizontalModelMenu() {
            return this.$parent.$options.name !== 'ZtMenu' && this.horizontalModel
        }
    },
    methods: {
        menuItemClick() {
            this.Menu.updateActiveMenuItem(this.index)
            if (this.Menu.router) {
                this.$router.push(this.index)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
