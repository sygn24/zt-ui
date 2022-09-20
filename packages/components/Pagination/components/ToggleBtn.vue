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
                cursor: this.$parent.currentPage === this.page ? 'not-allowed' : 'pointer',
                background: this.$parent.background ? 'var(--darker-bg4)' : ''
            }
        },
        classes() {
            return {
                allowed: this.$parent.currentPage !== this.page,
                small: this.$parent.small
            }
        }
    },
    methods: {
        togglePageNum() {
            this.$emit('togglePageNum')
        }
    }
}
</script>
