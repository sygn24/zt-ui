<template>
    <div class="zt-form-item-wrapper">
        <div class="zt-form-item">
            <label class="zt-form-item-label" :style="{ width: ZtForm.labelWidth }">
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
        }
    },
    data() {
        return {
            error: ''
        }
    },
    computed: {
        isRequired() {
            return this.required || (this.ZtForm.rules && this.prop && (this.ZtForm.rules[this.prop] || []).some(con => con.required))
        },
        getTrigger() {
            return this.ZtForm.rules && this.ZtForm.rules[this.prop] && this.ZtForm.rules[this.prop][0].trigger
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
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
