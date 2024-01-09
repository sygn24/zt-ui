<template>
    <span
        :title="title"
        class="zt-pagination-num"
        :class="classes"
        @mouseenter="ellipsis = false"
        @mouseleave="ellipsis = true"
        @click="moreBtnClick"
    >
        <zt-icon :icon="ellipsis ? 'ellipsis' : `double-arrow-${direction}`" :size="$parent.small ? 12 : 13" />
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
        classes() {
            return {
                small: this.$parent.small,
                'bg-model': this.$parent.background && !this.$parent.border,
            }
        }
    },
    methods: {
        // 向前或向后5页
        moreBtnClick() {
            let current = this.direction == 'right' ? this.$parent.page + 5 : this.$parent.page - 5
            current = current > 0 ? current : 1
            current = current < this.$parent.lastPageNum ? current : this.$parent.lastPageNum
            this.$parent.setDynamicPage(current)
            this.$parent.updateCurrentPage(current)
        }
    }
}
</script>
