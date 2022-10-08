<template>
    <div class="zt-checkbox-group" :class="{ button: button }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtCheckboxGroup',
    props: {
        value: {
            type: Array,
            default: () => []
        },
        disabled: {
            type: Boolean,
            default: false
        },
        button: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium',
            validator: size => {
                return ['large', 'medium', 'small'].includes(size)
            }
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    data() {
        return {
            options: this.value
        }
    },
    methods: {
        updateVal() {
            this.$emit('change', this.options)
        }
    }
}
</script>
<style scoped lang="less">
@import './style.less';
</style>
