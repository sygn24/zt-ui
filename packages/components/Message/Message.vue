<template>
    <div class="zt-message-box" :style="{ top: top + 'px' }">
        <transition name="message-fade" @after-leave="handleAfterLeave">
            <div class="zt-message" :class="backgroundColor" v-show="show">
                <ZtIcon :icon="type" :color="iconColor" />
                <span class="zt-message-text">{{ msg }}</span>
                <ZtIcon icon="close" class="zt-message-close" v-if="showClose" @click="handleClose" />
            </div>
        </transition>
    </div>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'Message',
    components: { ZtIcon },
    props: {
        type: {
            type: String,
            default: 'info'
        },
        msg: {
            type: String,
            default: ''
        },
        dt: {
            type: Number,
            default: 3000
        },
        background: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: false
        },
        offsetTop: {
            type: Number,
            default: 30
        }
    },
    data() {
        return {
            show: false,
            top: this.offsetTop,
            timer: null
        }
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.handleClose()
        }, this.dt)
    },
    computed: {
        backgroundColor() {
            return { [`zt-message-${this.type}`]: this.background }
        },
        iconColor() {
            let color = 'var(--primary) '
            if (this.type == 'success') {
                color = 'var(--success)'
            }
            if (this.type == 'error') {
                color = 'var(--danger)'
            }
            if (this.type == 'warning') {
                color = 'var(--warning)'
            }
            return color
        }
    },
    methods: {
        handleClose() {
            this.show = false
            this.onClose && this.onClose()
            clearTimeout(this.timer)
            this.timer = null
        },
        handleAfterLeave() {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
