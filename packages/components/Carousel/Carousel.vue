<template>
    <div
        class="zt-carousel-wrapper"
        :style="style"
        ref="carousel"
        @mouseenter="carouselEnter"
        @mouseleave="carouselLeave"
    >
        <div class="zt-carousel-content" ref="content">
            <slot></slot>
        </div>
        <template v-if="childLen">
            <transition name="base-fade">
                <div class="zt-carousel-arrow zt-carousel-arrow-prev" @click="toggleItem(-1)" v-show="showArrow">
                    <zt-icon icon="arrow-left-bold" color="#fff" />
                </div>
            </transition>
            <transition name="base-fade">
                <div class="zt-carousel-arrow zt-carousel-arrow-next" @click="toggleItem(1)" v-show="showArrow">
                    <zt-icon icon="arrow-right-bold" color="#fff" />
                </div>
            </transition>
        </template>
        <div class="zt-carousel-indicator" v-if="childLen" :style="indicatorStyle">
            <div
                class="zt-carousel-indicator-item"
                v-for="i in childLen"
                :key="i"
                @mouseenter="indicatorEnter(i)"
                @mouseleave="indicatorLeave(i)"
                @click="indicatorClick(i)"
            >
                <span class="zt-carousel-indicator-item-rect" :class="indicatorClass(i)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'ZtCarousel',
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 200
        },
        current: {
            type: Number,
            default: 1
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        loop: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 3000
        },
        trigger: {
            type: String,
            default: 'hover',
            validator: trigger => {
                return ['click', 'hover'].includes(trigger)
            }
        },
        arrow: {
            type: String,
            default: 'hover',
            validator: arrow => {
                return ['always', 'hover', 'never'].includes(arrow)
            }
        },
        indicatorPosition: {
            type: String,
            default: 'inside',
            validator: type => {
                return ['inside', 'outside', 'none'].includes(type)
            }
        },
        indicatorType: {
            type: String,
            default: 'rect',
            validator: type => {
                return ['rect', 'dot'].includes(type)
            }
        }
    },
    components: { ZtIcon },
    data() {
        return {
            childComp: [],
            childLen: 0,
            carouselWidth: 0,
            currentIndex: 0,
            hoverIndex: -1,
            prevent: false,
            showArrow: false,
            timer: null
        }
    },
    computed: {
        style() {
            let style = {
                height: this.height + 'px'
            }
            if (this.width) style.width = this.width + 'px'
            return style
        },
        indicatorStyle() {
            if (this.indicatorPosition === 'outside') return { bottom: 0 }
            if (this.indicatorPosition === 'none') return { display: 'none' }
        },
        indicatorClass() {
            return i => {
                return {
                    active: this.loop ? this.currentIndex === i : this.currentIndex === i - 1,
                    hover: this.hoverIndex === i,
                    dot: this.indicatorType === 'dot'
                }
            }
        }
    },
    methods: {
        getChildComp() {
            this.childComp = this.$children.filter(child => child.$options.name === 'ZtCarouselItem')
            this.childLen = this.childComp.length
        },
        // 克隆首尾元素，用于循环滚动
        cloneDom() {
            if (this.childLen && this.loop) {
                const itemDoms = this.$refs.content.querySelectorAll('.zt-carousel-item')
                const firstCloneDom = itemDoms[0].cloneNode(true)
                const lastCloneDom = itemDoms[itemDoms.length - 1].cloneNode(true)
                this.$refs.content.insertBefore(lastCloneDom, this.$refs.content.children[0])
                this.$refs.content.appendChild(firstCloneDom)
            }
        },
        // 设置轮播图内容宽度和每个轮播图元素的宽度
        setCarouselWidth() {
            if (this.childLen) {
                this.carouselWidth = this.width ? this.width : this.$refs.carousel.getBoundingClientRect().width || 460
                const itemDoms = this.$refs.content.querySelectorAll('.zt-carousel-item')
                this.$refs.content.style.width = this.carouselWidth * (this.childLen + 2) + 'px'
                itemDoms.forEach(item => {
                    item.style.width = this.carouselWidth + 'px'
                })
            }
        },
        // 初始化显示第几个元素
        initCurrent() {
            this.currentIndex = this.current - 1
            this.currentIndex = this.currentIndex < 0 ? 0 : this.currentIndex
            this.currentIndex = this.currentIndex > this.childLen ? this.childLen : this.currentIndex
            this.currentIndex = this.loop ? this.currentIndex + 1 : this.currentIndex
            this.moveItem(false)
            this.showArrow = this.arrow === 'always' //初始化箭头显示
        },
        // 移动元素
        moveItem(animation) {
            if (animation) this.$refs.content.style.transition = 'all .5s'
            else this.$refs.content.style.transition = 'none'
            const x = this.currentIndex * this.carouselWidth
            this.$refs.content.style.transform = `translateX(-${x}px)`
        },
        // 自动轮播
        autoPlay() {
            if (this.childLen && this.autoplay) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.toggleItem(1)
                }, this.interval)
            }
        },
        // 停止轮播
        stopPlay() {
            this.timer && clearInterval(this.timer)
            this.timer = null
        },
        // 切换元素
        toggleItem(step) {
            if (this.loop) {
                if (this.prevent) return
                this.currentIndex = this.currentIndex + step
                this.moveItem(true)
                if (this.currentIndex === this.childLen + 1) {
                    this.currentIndex = 1
                    this.prevent = true
                    setTimeout(() => {
                        this.moveItem(false)
                        this.prevent = false
                    }, 500)
                }
                if (this.currentIndex === 0) {
                    this.currentIndex = this.childLen
                    this.prevent = true
                    setTimeout(() => {
                        this.moveItem(false)
                        this.prevent = false
                    }, 500)
                }
            } else {
                this.currentIndex = this.currentIndex + step
                this.currentIndex = this.currentIndex > this.childLen - 1 ? 0 : this.currentIndex
                this.currentIndex = this.currentIndex < 0 ? this.childLen - 1 : this.currentIndex
                this.moveItem(true)
            }
        },
        carouselEnter() {
            this.stopPlay()
            if (this.arrow === 'hover') this.showArrow = true
        },
        carouselLeave() {
            this.autoPlay()
            if (this.arrow === 'hover') this.showArrow = false
        },
        // 指示器按钮相关事件
        indicatorEnter(i) {
            this.hoverIndex = i
            if (this.trigger === 'hover') {
                this.currentIndex = this.loop ? i : i - 1
                this.moveItem(true)
            }
        },
        indicatorLeave(i) {
            this.hoverIndex = -1
        },
        indicatorClick(i) {
            if (this.trigger === 'click') {
                this.currentIndex = this.loop ? i : i - 1
                this.moveItem(true)
            }
        }
    },
    mounted() {
        this.getChildComp()
        this.cloneDom()
        this.setCarouselWidth()
        this.initCurrent()
        this.autoPlay()
    },
    destroyed() {
        this.stopPlay()
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
