<template>
    <button class="zt-pagination-toggle" :class="classes" :style="styles" :disabled="disabled" @click="togglePageNum">
        <ZtIcon :icon="`arrow-${direction}-bold`" :size="$parent.small ? 12 : 13" />
    </button>
</template>

<script>
import ZtIcon from '../../Icon'
export default {
    name: 'ToggleBtn',
    components: { ZtIcon },
    props: {
        page: Number,
        disabled: {
            type: Boolean,
            default: false
        },
        direction: {
            validator: item => {
                return ['left', 'right'].includes(item)
            }
        }
    },
    computed: {
        styles() {
            return {
                cursor: this.disabled ? 'not-allowed' : 'pointer'
            }
        },
        classes() {
            return {
                allowed: !this.disabled,
                small: this.$parent.small,
                'bg-model': this.$parent.background && !this.$parent.border,
                'border-model': this.$parent.border,
                'border-allowed': !this.disabled
            }
        }
    },
    methods: {
        // 点击上一页或下一页按钮
        togglePageNum() {
            let current = this.direction == 'right' ? this.$parent.page + 1 : this.$parent.page - 1
            this.$parent.dynamicPageClick(current)
        }
    }
}
</script>
