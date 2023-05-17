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
        <template v-if="childComp.length">
            <transition name="base-fade">
                <div class="zt-carousel-arrow zt-carousel-arrow-prev" @click="toggleItem(-1)" v-show="showArrow">
                    <ZtIcon icon="arrow-left-bold" color="#fff" />
                </div>
            </transition>
            <transition name="base-fade">
                <div class="zt-carousel-arrow zt-carousel-arrow-next" @click="toggleItem(1)" v-show="showArrow">
                    <ZtIcon icon="arrow-right-bold" color="#fff" />
                </div>
            </transition>
        </template>
        <div class="zt-carousel-indicator" v-if="childComp.length" :style="indicatorStyle">
            <div
                class="zt-carousel-indicator-item"
                v-for="i in childComp.length"
                :key="i"
                @mouseenter="indicatorEnter(i)"
                @mouseleave="indicatorLeave(i)"
                @click="indicatorClick(i)"
            >
                <span class="zt-carousel-indicator-item-rect" :class="{active:currentIndex===i,hover:hoverIndex===i}"></span>
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
        initialIndex: {
            type: Number,
            default: 1
        },
        autoplay: {
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
        }
    },
    components: { ZtIcon },
    data() {
        return {
            childComp: [],
            childDomCount: 0,
            carouselWidth: 0,
            currentIndex: 1,
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
            if (this.width) {
                style.width = this.width + 'px'
            }
            return style
        },
        indicatorStyle() {
            if (this.indicatorPosition === 'outside') return { bottom: 0 }
            if (this.indicatorPosition === 'none') return { display: 'none' }
        }
    },
    methods: {
        getChildComp() {
            this.childComp = this.$children.filter(child => child.$options.name === 'ZtCarouselItem')
            this.childDomCount = this.childComp.length > 0 ? this.childComp.length + 2 : 0
        },
        // 克隆首尾元素，用于循环滚动
        cloneDom() {
            if (!this.childComp.length) return
            const itemDoms = this.$refs.content.querySelectorAll('.zt-carousel-item')
            const firstCloneDom = itemDoms[0].cloneNode(true)
            const lastCloneDom = itemDoms[itemDoms.length - 1].cloneNode(true)
            this.$refs.content.insertBefore(lastCloneDom, this.$refs.content.children[0])
            this.$refs.content.appendChild(firstCloneDom)
        },
        // 设置轮播图内容宽度和每个轮播图元素的宽度
        setCarouselWidth() {
            if (!this.childComp.length) return
            if (this.width) this.carouselWidth = this.width
            else this.carouselWidth = this.$refs.carousel.getBoundingClientRect().width
            this.$refs.content.style.width = this.carouselWidth * this.childDomCount + 'px'
            const itemDoms = this.$refs.content.querySelectorAll('.zt-carousel-item')
            itemDoms.forEach(item => {
                item.style.width = this.carouselWidth + 'px'
            })
        },
        // 初始化显示第几个元素
        initIndex() {
            this.currentIndex = this.initialIndex
            this.currentIndex = this.currentIndex < 1 ? 1 : this.currentIndex
            this.currentIndex = this.currentIndex > this.childComp.length ? this.childComp.length : this.currentIndex
            this.moveItem(false)
        },
        // 初始化箭头显示
        initShowArrow() {
            if (this.arrow === 'hover' || this.arrow === 'never') this.showArrow = false
            else this.showArrow = true
        },
        // 移动元素
        moveItem(has) {
            if (has) this.$refs.content.style.transition = 'all .5s ease'
            else this.$refs.content.style.transition = 'none'
            const x = this.currentIndex * this.carouselWidth
            this.$refs.content.style.transform = `translateX(-${x}px)`
        },
        // 自动轮播
        autoPlay() {
            if (this.childComp.length && this.autoplay) {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.toggleItem(1)
                }, this.interval)
            }
        },
        // 停止轮播
        stopPlay() {
            if (this.timer) clearInterval(this.timer)
        },
        // 切换元素
        toggleItem(setp) {
            if (this.prevent) return
            this.currentIndex = this.currentIndex + setp
            this.moveItem(true)
            if (this.currentIndex === this.childDomCount - 1) {
                this.currentIndex = 1
                this.prevent = true
                setTimeout(() => {
                    this.moveItem(false)
                    this.prevent = false
                }, 500)
            }
            if (this.currentIndex === 0) {
                this.currentIndex = this.childDomCount - 2
                this.prevent = true
                setTimeout(() => {
                    this.moveItem(false)
                    this.prevent = false
                }, 500)
            }
        },
        carouselEnter() {
            this.stopPlay()
            if (this.arrow !== 'hover') return
            this.showArrow = true
        },
        carouselLeave() {
            this.autoPlay()
            if (this.arrow !== 'hover') return
            this.showArrow = false
        },
        // 指示器按钮相关事件
        indicatorEnter(i) {
            this.hoverIndex = i
            if (this.trigger === 'click') return
            this.currentIndex = i
            this.moveItem(true)
        },
        indicatorLeave(i) {
            this.hoverIndex = -1
        },
        indicatorClick(i) {
            if (this.trigger === 'hover') return
            this.currentIndex = i
            this.moveItem(true)
        }
    },
    mounted() {
        this.getChildComp()
        this.cloneDom()
        this.setCarouselWidth()
        this.initIndex()
        this.initShowArrow()
        this.autoPlay()
    },
    beforeDestroed() {
        this.stopPlay()
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>