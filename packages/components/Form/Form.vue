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
        }
    },
    provide() {
        return {
            ZtForm: this
        }
    },
    data() {
        return {}
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

<style lang="less" scoped>
@import './style.less';
</style>
