<template>
    <transition name="tab-slide" v-if="animated">
        <div class="zt-tabs-panes-item" v-show="show" :class="{ reverse: isReverse }">
            <slot></slot>
        </div>
    </transition>
    <div class="zt-tabs-panes-item" v-show="show" v-else>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtTabPane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['TabsInstance'],
    data() {
        return {
            show: false,
            isReverse: false, //控制反方向动画
            animated: false
        }
    },
    mounted() {
        this.TabsInstance.initTabs()
        this.delaySetAnimate()
    },
    methods: {
        // 如果开启切换动画，延迟设置，防止加载第一个标签页出现动画
        delaySetAnimate() {
            if (this.TabsInstance.animated) {
                setTimeout(() => {
                    this.animated = this.TabsInstance.animated
                }, 500)
            } else {
                this.animated = false
            }
        }
    },
    watch: {
        name() {
            this.TabsInstance.initTabs()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
