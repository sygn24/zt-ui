<template>
    <span
        :title="title"
        class="zt-pagination-num"
        :class="classes"
        :style="styles"
        @mouseenter="ellipsis = false"
        @mouseleave="ellipsis = true"
        @click="moreBtnClick"
    >
        <ZtIcon :icon="ellipsis ? 'ellipsis' : `double-arrow-${direction}`" :size="$parent.small ? 12 : 13" />
    </span>
</template>

<script>
import ZtIcon from '../../Icon'
export default {
    name: 'MoreBtn',
    components: { ZtIcon },
    props: {
        title: String,
        direction: {
            validator: item => {
                return ['left', 'right'].includes(item)
            }
        }
    },
    data() {
        return {
            ellipsis: true
        }
    },
    computed: {
        styles() {
            return {
                background: this.$parent.background ? 'var(--darker-bg4)' : ''
            }
        },
        classes() {
            return { small: this.$parent.small }
        }
    },
    methods: {
        moreBtnClick() {
            this.$emit('moreBtnClick')
        }
    }
}
</script>
