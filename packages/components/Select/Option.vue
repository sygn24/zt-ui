<template>
    <div class="zt-select-option ellipsis" :class="calsses" @click="selectCurrent" :title="!disabled ? label : ''">
        <span>{{ label }}</span>
    </div>
</template>

<script>
export default {
    name: 'ZtOption',
    props: {
        label: String,
        value: [String, Number],
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        calsses() {
            return {
                current: this.label == this.$parent.label,
                disabled: this.disabled
            }
        }
    },
    methods: {
        selectCurrent() {
            if (!this.disabled && this.$parent.$options.name === 'ZtSelect') {
                this.$parent.updateVal(this.label, this.value)
                this.$parent.toggleSelect()
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
