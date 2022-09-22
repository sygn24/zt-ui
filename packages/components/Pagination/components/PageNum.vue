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
                active: this.page === this.$parent.page,
                'border-model': this.$parent.border ,
                'active-border-model': this.$parent.border && this.page === this.$parent.page,
                'bg-model': this.$parent.background && !this.$parent.border,
                'active-bg-model': this.$parent.background && this.page === this.$parent.page
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
