<template>
    <transition name="base-fade" @after-leave="handleAfterLeave">
        <div class="zt-loading" :class="classes" :style="styles" v-show="show">
            <div class="zt-loading-content">
                <zt-icon :icon="icon" :size="iconSize" :color="color" class="loading-loop" v-if="icon !== ''" />
                <component :is="loadingAnimation" :color="color" v-else></component>
                <div class="zt-loading-content-text" :style="{ color: color }" v-if="text !== ''">{{ text }}</div>
            </div>
        </div>
    </transition>
</template>

<script>
import ZtIcon from '../Icon'
import LoadingCircle from './LoadingAnimation/LoadingCircle.vue'
import LoadingDots from './LoadingAnimation/LoadingDots.vue'
import LoadingRectangles from './LoadingAnimation/LoadingRectangles.vue'
export default {
    name: 'ZtLoading',
    components: { LoadingCircle, LoadingDots, LoadingRectangles, ZtIcon },
    props: {
        text: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        iconSize: {
            type: [String, Number],
            default: '28'
        },
        color: {
            type: String,
            default: 'var(--primary)'
        },
        bgColor: {
            type: String,
            default: 'hsla(0,0%,100%,.9)'
        },
        // 加载动画类型
        animationType: {
            type: String,
            default: 'circle',
            validator: type => {
                return ['circle', 'dot', 'rectangle'].includes(type)
            }
        }
    },

    data() {
        return {
            show: false,
            isFull: false
        }
    },
    computed: {
        classes() {
            return this.isFull ? 'zt-loading-full' : 'zt-loading-notfull'
        },
        styles() {
            return { background: this.bgColor }
        },
        loadingAnimation() {
            let animation
            if (this.animationType === 'circle') {
                animation = 'LoadingCircle'
            }
            if (this.animationType === 'dot') {
                animation = 'LoadingDots'
            }
            if (this.animationType === 'rectangle') {
                animation = 'LoadingRectangles'
            }
            return animation
        }
    },
    methods: {
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
