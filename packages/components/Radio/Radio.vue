<template>
    <label class="zt-radio" :class="wrapperClass">
        <span class="zt-radio-outer">
            <span class="zt-radio-inner" :class="innerClass" v-if="!isButton"></span>
            <input style="display: none" type="radio" @click="onClick" :disabled="isDisabled" />
        </span>
        <span class="zt-radio-label">
            <slot v-if="$slots.default"></slot>
            <span v-else>{{ label }}</span>
        </span>
    </label>
</template>

<script>
export default {
    name: 'ZtRadio',
    props: {
        value: {
            type: [String, Number, Boolean]
        },
        label: {
            type: [String, Number, Boolean]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        border: {
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
            isChecked: false
        }
    },
    computed: {
        wrapperClass() {
            return {
                border: this.border,
                checked: this.isChecked,
                disabled: this.isDisabled,
                vertical: !this.isButton && this.$parent.vertical,
                [`${this.size}`]: !this.isGroup,
                [`${this.$parent.size}`]: this.isGroup
            }
        },
        innerClass() {
            return {
                checked: this.isChecked,
                disabled: this.isDisabled
            }
        },
        isDisabled() {
            if (this.isGroup && this.$parent.isDisabled) {
                return this.$parent.isDisabled
            } else {
                return this.disabled
            }
        },
        isGroup() {
            return this.$parent.$options.name === 'ZtRadioGroup'
        },
        isButton() {
            return this.isGroup && this.$parent.button
        }
    },
    methods: {
        onClick() {
            if (this.isChecked) return
            if (this.isGroup) {
                this.$parent.updateVal(this.label)
            } else {
                this.isChecked = true
                this.$emit('change', this.label)
            }
        }
    },
    watch: {
        value: {
            handler() {
                this.isChecked = (this.value && this.value === this.label) || this.value
            },
            immediate: true
        }
    }
}
</script>

<style scoped lang="less">
@import './style.less';
</style>
