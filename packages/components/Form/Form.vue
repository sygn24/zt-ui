<template>
    <div class="zt-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtForm',
    props: {
        model: {
            type: Object
        },
        rules: {
            type: Object
        },
        labelWidth: {
            type: String
        },
        labelPosition: {
            type: String,
            default: 'right'
        },
        inline: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    provide() {
        return {
            ZtForm: this
        }
    },
    methods: {
        validate(cb) {
            let promise = this.$children.filter(item => item.prop).map(child => child.startValidate())
            Promise.all(promise)
                .then(data => {
                    cb(true)
                })
                .catch(err => cb(false))
        },
        clearValidate() {
            this.$children.filter(item => item.prop).map(child => child.clearValidate())
        }
    }
}
</script>
