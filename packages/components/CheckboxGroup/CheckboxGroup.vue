<template>
    <div style="display: inline-block">
        <div v-if="showCheckAll">
            <zt-checkbox
                name="zt-checkbox-all"
                :border="checkAllBorder"
                :size="size"
                label="全选"
                v-model="checkAll"
                @change="handleCheckAll"
            >
            </zt-checkbox>
        </div>
        <div class="zt-checkbox-group" :class="{ button: button }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ZtCheckbox from '../Checkbox/Checkbox.vue'
export default {
    name: 'ZtCheckboxGroup',
    components: { ZtCheckbox },
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
        border: {
            type: Boolean,
            default: false
        },
        showCheckAll: {
            type: Boolean,
            default: false
        },
        checkAllBorder: {
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
            checkboxOptions: this.value || [],
            checkboxs: [],
            checkAll: false,
            checkSome: false,
            isClickAll: false,
            isDisabled: this.disabled
        }
    },
    mounted() {
        this.getCheckboxs()
        this.setCheckbox()
        this.showCheckAll && this.setCheckAllStatus()
    },
    methods: {
        updateVal() {
            this.$emit('change', this.checkboxOptions)
            this.startValidate()
        },
        getCheckboxs() {
            this.checkboxs = this.$children.filter(item => item.$options.name === 'ZtCheckbox' && item.name !== 'zt-checkbox-all')
        },
        // 点击全选按钮
        handleCheckAll(val) {
            this.isClickAll = true
            if (val) {
                this.checkboxs.forEach(item => {
                    !item.isChecked && !item.isDisabled && item.onClick()
                })
            } else {
                this.checkboxs.forEach(item => {
                    !item.isDisabled && item.onClick()
                })
            }
            this.$emit('checkAllChange', this.checkboxOptions)
            this.startValidate()
            this.isClickAll = false
        },
        // 设置全选按钮状态
        setCheckAllStatus() {
            let noDisabled = this.checkboxs.filter(item => !item.isDisabled)
            if (noDisabled.length > 0) {
                this.checkAll = noDisabled.every(item => item.isChecked)
                this.checkSome = noDisabled.some(item => item.isChecked)
            } else {
                this.checkAll = false
                this.checkSome = false
            }
        },
        // 设置复选框是否选中
        setCheckbox() {
            this.checkboxs.forEach(item => {
                item.isChecked = this.checkboxOptions.includes(item.label)
            })
        },
        startValidate() {
            if (this.$parent.$options.name === 'ZtFormItem' && this.$parent.isRequired) {
                this.$parent.startValidate()
            }
        }
    },
    watch: {
        value() {
            this.setCheckbox()
            this.setCheckAllStatus()
        }
    }
}
</script>
<style scoped lang="less">
@import './style.less';
</style>
