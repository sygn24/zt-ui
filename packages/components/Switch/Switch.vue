<template>
    <div :style="styles" :class="classes" @click="toggle">
        <span :class="open" v-if="isChecked">
            <slot name="open">
                <span v-if="defaultText">{{ size == 'small' ? '开' : '开启' }}</span>
            </slot>
        </span>
        <span :class="close" v-else>
            <slot name="close">
                <span v-if="defaultText">{{ size == 'small' ? '关' : '关闭' }}</span>
            </slot>
        </span>
    </div>
</template>

<script>
const prefixCls = 'zt-switch'
export default {
    name: 'ZtSwitch',
    props: {
        value: {
            type: Boolean
        },
        size: {
            type: String,
            default: 'medium',
            validator: size => {
                return ['large', 'medium', 'small'].includes(size)
            }
        },
        defaultText: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        trueColor: {
            type: String,
            default: 'var(--primary)'
        },
        falseColor: {
            type: String,
            default: 'var(--darker-bg1)'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'value',
        event: 'onChange'
    },
    data() {
        return {
            isChecked: this.value
        }
    },
    computed: {
        styles() {
            return {
                backgroundColor: this.isChecked ? this.trueColor : this.falseColor
            }
        },
        classes() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.size}`,
                {
                    [`${prefixCls}-disabled`]: this.disabled,
                    checked: this.isChecked,
                    loading: this.loading
                }
            ]
        },
        open() {
            return `${prefixCls}-${this.size}-open`
        },
        close() {
            return `${prefixCls}-${this.size}-close`
        }
    },
    methods: {
        toggle() {
            if (this.disabled) return
            if (this.loading) return
            this.isChecked = !this.isChecked
            this.$emit('onChange', this.isChecked)
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
