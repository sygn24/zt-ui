<template>
    <label class="zt-checkbox" :class="wrapperClass">
        <span class="zt-checkbox-outer">
            <span class="zt-checkbox-inner" :class="innerClass" v-if="!isButton">
                <zt-icon icon="select" :color="iconColor" size="12"></zt-icon>
            </span>
            <input style="display: none" type="checkbox" @click="onClick" :disabled="isDisabled" />
        </span>
        <span class="zt-checkbox-label" :class="{ disabled: isDisabled }">
            <slot v-if="$slots.default"></slot>
            <span v-else>{{ label }}</span>
        </span>
    </label>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'ZtCheckbox',
    components: { ZtIcon },
    props: {
        value: {
            type: Boolean
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
    mounted() {
        this.init()
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
        iconColor() {
            let color = 'transparent'
            if (this.isChecked) {
                color = '#fff'
            }
            if (this.isChecked && this.isDisabled) {
                color = 'var(--disabled-text)'
            }
            return color
        },
        isDisabled() {
            if (this.isGroup && this.$parent.disabled) {
                return this.$parent.disabled
            } else {
                return this.disabled
            }
        },
        isGroup() {
            return this.$parent.$options.name === 'ZtCheckboxGroup'
        },
        isButton() {
            return this.isGroup && this.$parent.button
        }
    },
    methods: {
        init() {
            if (this.isGroup) {
                this.isChecked = this.$parent.options.includes(this.label)
            } else {
                this.isChecked = this.value
            }
        },
        onClick() {
            if (this.isGroup) {
                this.isChecked = !this.isChecked
                if (this.isChecked) {
                    this.$parent.options.push(this.label)
                } else {
                    let index = this.$parent.options.findIndex(item => item == this.label)
                    this.$parent.options.splice(index, 1)
                }
                this.$parent.updateVal()
            } else {
                if (typeof this.value == 'boolean') {
                    this.isChecked = !this.isChecked
                    this.$emit('change', this.isChecked)
                }
            }
        }
    },
    watch: {
        value: {
            handler() {
                if (!this.isGroup) {
                    this.isChecked = this.value
                }
            },
            immediate: true
        }
    }
}
</script>

<style scoped lang="less">
@import './style.less';
</style>
