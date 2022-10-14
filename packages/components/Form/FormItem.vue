<template>
    <div class="zt-form-item-wrapper" :class="{ inline: ZtForm.inline }">
        <div class="zt-form-item" :style="{ display: ZtForm.labelPosition === 'top' ? 'block' : 'flex' }">
            <label class="zt-form-item-label" :style="labelStyle">
                <span class="required-star" v-if="isRequired">*</span>
                <span>{{ label }}</span>
            </label>
            <slot></slot>
        </div>
        <transition name="error-fade">
            <div v-if="error" class="error-tips" :style="{ marginLeft: ZtForm.labelWidth }">
                {{ error }}
            </div>
        </transition>
    </div>
</template>

<script>
import schema from 'async-validator'
export default {
    name: 'ZtFormItem',
    inject: ['ZtForm'],
    props: {
        label: {
            type: String
        },
        prop: {
            type: String
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            error: ''
        }
    },
    mounted() {
        this.setIsDisabled(this.isDisabled)
    },
    computed: {
        isRequired() {
            return this.required || (this.ZtForm.rules && this.prop && (this.ZtForm.rules[this.prop] || []).some(con => con.required))
        },
        isDisabled() {
            return this.ZtForm.disabled || this.disabled
        },
        getTrigger() {
            return this.ZtForm.rules && this.ZtForm.rules[this.prop] && this.ZtForm.rules[this.prop][0].trigger
        },
        labelStyle() {
            return {
                width: this.ZtForm.labelWidth,
                textAlign: this.ZtForm.labelPosition === 'top' ? 'left' : this.ZtForm.labelPosition,
                display: this.ZtForm.labelPosition === 'top' ? 'block' : '',
                marginBottom: this.ZtForm.labelPosition === 'top' ? '5px' : ''
            }
        }
    },
    methods: {
        startValidate() {
            let rules = this.ZtForm.rules
            let model = this.ZtForm.model
            let descriptor = rules[this.prop]
                ? {
                      [`${this.prop}`]: rules[this.prop]
                  }
                : {}
            let validator = new schema(descriptor)

            return validator.validate(
                {
                    [`${this.prop}`]: model[this.prop]
                },
                (errors, fileds) => {
                    if (errors) {
                        this.error = errors[0].message
                        if (this.$children.length && !this.$children[0].validate) {
                            this.$children[0].validate = true
                        }
                    } else {
                        this.clearValidate()
                    }
                }
            )
        },
        clearValidate() {
            this.error = ''
            if (this.$children.length && this.$children[0].validate) {
                this.$children[0].validate = false
            }
        },
        setIsDisabled(val) {
            if (this.$children.length) {
                this.$children.forEach(item => {
                    item.isDisabled = val
                })
            }
        }
    },
    watch: {
        isDisabled(val) {
            this.setIsDisabled(val)
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
