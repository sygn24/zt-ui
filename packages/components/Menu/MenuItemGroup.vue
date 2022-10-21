<template>
    <div class="zt-menu-item-group" ref="ztMenuItemInstance">
        <div class="zt-menu-item-group-title ellipsis" :style="styles" v-if="$slots.title || title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="zt-menu-item-group-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import mixin from './mixin'
export default {
    name: 'ZtMenuItemGroup',
    mixins: [mixin],
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    computed: {
        styles() {
            return {
                paddingLeft: `${this.itemPaddingLeft}px`
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
