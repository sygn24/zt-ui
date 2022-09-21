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
            if (this.page === 1 || this.page === this.$parent.lastPageNum) {
                this.$parent.staticPageClick(this.page)
            } else {
                this.$parent.dynamicPageClick(this.page)
            }
        }
    }
}
</script>
