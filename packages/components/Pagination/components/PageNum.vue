<template>
    <span class="zt-pagination-num" :class="classes" @click="pageNumClick">{{ page }}</span>
</template>

<script>
export default {
    name: 'PageNum',
    props: {
        page: Number
    },
    computed: {
        classes() {
            return {
                small: this.$parent.small,
                active: !this.$parent.background && this.page === this.$parent.currentPage,
                'bg-color': this.$parent.background,
                'active-bg-color': this.$parent.background && this.page === this.$parent.currentPage
            }
        }
    },
    methods: {
        pageNumClick() {
            this.$emit('pageNumClick')
        }
    }
}
</script>
