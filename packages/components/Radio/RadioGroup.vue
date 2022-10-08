<template>
    <div class="zt-radio-group" :class="{ button: button }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtRadioGroup',
    props: {
        value: {
            type: [String, Number, Boolean]
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
            radios: []
        }
    },
    mounted() {
        this.getRadios()
        this.setRadioGroupVal(this.value)
    },
    methods: {
        getRadios() {
            this.radios = this.$children.filter(item => item.$options.name === 'ZtRadio')
        },
        setRadioGroupVal(val) {
            this.radios.forEach(item => {
                if (item.label === val) {
                    item.isChecked = true
                } else {
                    item.isChecked = false
                }
            })
        },
        updateVal(val) {
            this.$emit('change', val)
        }
    },
    watch: {
        value(val) {
            this.setRadioGroupVal(val)
        }
    }
}
</script>
<style scoped lang="less">
@import './style.less';
</style>
