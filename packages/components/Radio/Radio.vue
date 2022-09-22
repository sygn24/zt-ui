<template>
    <label class="zt-radio" :class="{ disabled: disabled }">
        <span class="zt-radio-outer">
            <span class="zt-radio-inner" :class="clasees"></span>
            <input class="zt-radio-native" type="radio" @click="onClick" :disabled="disabled" />
        </span>
        <span class="zt-radio-label" :class="{ disabled: disabled }">
            <slot>Radio</slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'ZtRadio',
    props: {
        value: {
            type: [String, Number]
        },
        label: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isChecked: false
        }
    },
    computed: {
        clasees() {
            return {
                checked: this.isChecked,
                disabled: this.disabled
            }
        }
    },
    methods: {
        onClick() {
            this.isChecked = true
            this.$emit('input', this.label)
        }
    },
    watch: {
        value: {
            handler() {
                this.isChecked = this.value && this.value === this.label
            },
            immediate: true
        }
    }
}
</script>

<style scoped lang="less">
@import './style.less';
</style>
