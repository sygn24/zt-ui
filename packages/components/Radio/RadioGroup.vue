<template>
    <div class="zt-radio-group">
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
        }
    },
    provide() {
        return { RadioGroup: this }
    }
}
</script>
