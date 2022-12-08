<template>
    <div
        ref="progressTrack"
        :class="vertical ? 'progress-track-vertical' : 'progress-track'"
        :style="progressTrackStyle"
        @mousemove="setTooltip"
        @mouseleave="progressTrackLeave"
        @click="changeProgress"
    >
        <!-- 进度条 -->
        <div :class="vertical ? 'progress-bar-vertical' : 'progress-bar'" ref="progressBar" :style="progressBarStyle">
            <div :class="vertical ? 'active-bar-vertical' : 'active-bar'" v-if="showActiveBar && !readonly"></div>
        </div>
        <!-- 进度条上圆形按钮 -->
        <transition name="base-fade" v-if="!hiddenRoundBtn && !readonly">
            <div
                :class="vertical ? 'round-btn-vertical' : 'round-btn'"
                ref="roundBtn"
                :style="roundBtnStyle"
                v-show="alwaysShowRoundBtn ? alwaysShowRoundBtn : hoverShowRoundBtn"
                @mouseenter="roundBtnHover"
                @mouseleave="roundBtnLeave"
                @mousedown="dragProgressBar"
            ></div>
        </transition>
        <!--提示框  -->
        <transition name="base-fade" v-if="showTooltip && !readonly">
            <div :class="vertical ? 'tooltip-vertical' : 'tooltip'" ref="tooltip" :style="tooltipStyle" v-show="hoverShowToolTip">
                <span>{{ tooltipTxt }}</span>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ZtProgress',
    props: {
        // 百分比进度
        percent: {
            type: Number,
            default: 0
        },
        // 进度条尺寸
        size: {
            type: Number,
            default: 8
        },
        // 进度条颜色
        color: {
            type: [String, Array],
            default: 'var(--primary)'
        },
        // 进度条轨道颜色
        trackColor: {
            type: String,
            default: 'var(--darker-bg2)'
        },
        // 是否一直显示圆钮，false则是鼠标经过显示
        alwaysShowRoundBtn: {
            type: Boolean,
            default: true
        },
        // 是否隐藏圆钮
        hiddenRoundBtn: {
            type: Boolean,
            default: false
        },
        // 是否只读
        readonly: {
            type: Boolean,
            default: false
        },
        // 是否显示提示框
        showTooltip: {
            type: Boolean,
            default: true
        },
        // 是否格式化提示框
        isFormatTooltip: {
            type: Boolean,
            default: false
        },
        // 格式化提示框函数
        formatTooltip: {
            type: Function
        },
        // 是否显示activeBar
        showActiveBar: {
            type: Boolean,
            default: true
        },
        // 是否垂直
        vertical: {
            type: Boolean,
            default: false
        },
        // 垂直高度
        height: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tooltipTxt: 0, //悬浮提示框文本
            hoverShowRoundBtn: false, //鼠标经过显示进度条圆按钮
            roundBtnActive: false, //圆按钮是否处于活跃
            hoverShowToolTip: false, //鼠标经过显示tooltip
            isDrag: false //是否正在拖拽进度条
        }
    },
    mounted() {
        this.setProgressBar(this.percent)
    },
    model: {
        prop: 'percent',
        event: 'change'
    },
    computed: {
        // 进度条轨道样式
        progressTrackStyle() {
            let style = {
                height: this.vertical ? this.height : `${this.size}px`,
                width: this.vertical ? `${this.size}px` : '',
                borderRadius: `${this.size}px`,
                background: this.trackColor,
                cursor: this.readonly ? ' ' : 'pointer'
            }
            return style
        },
        // 进度条样式
        progressBarStyle() {
            let style = {
                // width: `${this.percent}%`,
                borderRadius: `${this.size}px`,
                background:
                    typeof this.color == 'string' ? this.color : `linear-gradient(to right,${this.color[0]} 0%,${this.color[1]} 100%)`,
                transition: this.isDrag ? 'none' : 'all 0.3s ease-out',
                cursor: this.readonly ? '' : 'pointer'
            }
            return style
        },
        // 圆形按钮样式
        roundBtnStyle() {
            let style = {
                // left: `${this.percent}%`,
                width: this.roundBtnActive ? `${this.roundBtnSize + 3}px` : `${this.roundBtnSize}px`,
                height: this.roundBtnActive ? `${this.roundBtnSize + 3}px` : `${this.roundBtnSize}px`,
                transform: this.vertical ? `translate(-50%,${this.roundBtnSize / 2}px)` : `translate(${-this.roundBtnSize / 2}px,-50%)`,
                transition: this.isDrag ? 'none' : 'all 0.3s ease-out',
                cursor: this.readonly ? '' : 'pointer',
                borderColor: typeof this.color == 'string' ? this.color : this.color[1],
                '--circleColor': typeof this.color == 'string' ? this.color : this.color[1]
            }
            return style
        },
        // 进度条圆形按钮大小，根据进度条大小动态计算
        roundBtnSize() {
            let roundBtnSize = this.size >= 8 ? this.size * 2 : this.size * 2.5
            roundBtnSize = this.size <= 3 ? this.size * 4 : roundBtnSize
            roundBtnSize = roundBtnSize < 12 ? 12 : roundBtnSize
            return roundBtnSize
        },
        // tooltip样式
        tooltipStyle() {
            return {
                bottom: this.vertical ? '' : `${this.size + 10}px`,
                left: this.vertical ? `${this.size + 10}px` : ''
            }
        }
    },
    methods: {
        // 获取鼠标在进度条上的位置，返回一个百分比值
        getMousePosition(e) {
            let progressTrack = this.$refs.progressTrack
            if (!this.vertical) {
                let pWidth = progressTrack.getBoundingClientRect().width //进度条总宽度
                let pLeft = progressTrack.getBoundingClientRect().left //进度条距左边距离
                let mPositon = e.clientX - pLeft //鼠标在进度条上的位置
                mPositon = mPositon <= 0 ? 0 : mPositon //设置最小边界值
                mPositon = mPositon >= pWidth ? pWidth : mPositon //设置最大边界值
                let percentLength = Math.ceil((mPositon * 100) / pWidth)
                return percentLength
            } else {
                let pHeight = progressTrack.getBoundingClientRect().height
                let pBottom = progressTrack.getBoundingClientRect().bottom
                let mPositon = pBottom - e.clientY
                mPositon = mPositon <= 0 ? 0 : mPositon
                mPositon = mPositon >= pHeight ? pHeight : mPositon
                let percentLength = Math.ceil((mPositon * 100) / pHeight)
                return percentLength
            }
        },
        // 设置进度条长度
        setProgressBar(percent) {
            if (!this.vertical) {
                this.$refs.progressBar.style.width = percent + '%'
                if (this.hiddenRoundBtn || this.readonly) return
                this.$refs.roundBtn.style.left = percent + '%'
            } else {
                this.$refs.progressBar.style.height = percent + '%'
                if (this.hiddenRoundBtn || this.readonly) return
                this.$refs.roundBtn.style.bottom = percent + '%'
            }
        },
        // 鼠标在进度条上移动时,设置tooltip位置,设置当前位置百分比数值
        setTooltip(e) {
            this.hoverShowRoundBtn = true
            if (this.readonly) return
            if (!this.showTooltip) return // 父组件传值控制不显示tooltip
            this.hoverShowToolTip = true
            let percentLength = this.getMousePosition(e)
            if (!this.vertical) {
                this.$refs.tooltip.style.left = percentLength + '%'
            } else {
                this.$refs.tooltip.style.bottom = percentLength + '%'
            }
            // tooltip默认显示百分比数值，如果格式化tooltip则显示处理后的数值
            this.tooltipTxt = this.isFormatTooltip
                ? this.formatTooltip
                    ? this.formatTooltip(percentLength)
                    : percentLength
                : percentLength
        },
        //改变进度条
        changeProgress(e) {
            if (this.readonly) return
            let percentLength = this.getMousePosition(e)
            this.$emit('change', percentLength)
        },
        // 鼠标经过圆形按钮
        roundBtnHover() {
            this.hoverShowRoundBtn = true
            this.roundBtnActive = true
        },
        // 鼠标离开圆形按钮
        roundBtnLeave() {
            if (!this.isDrag) {
                this.hoverShowRoundBtn = false
                this.roundBtnActive = false
            }
        },
        // 鼠标按下圆形按钮拖拽进度条
        dragProgressBar() {
            // 鼠标移动，拖拽进度条
            this.roundBtnHover()
            let move = e => {
                this.isDrag = true
                let percentLength = this.getMousePosition(e)
                this.setProgressBar(percentLength)
                this.setTooltip(e)
            }
            // 鼠标松开，就停止拖拽，让鼠标移动事件解除,并且改变进度条
            let moveup = e => {
                this.isDrag = false
                document.removeEventListener('mousemove', move)
                this.changeProgress(e)
                this.progressTrackLeave()
                this.roundBtnActive = false
                document.removeEventListener('mouseup', moveup)
            }
            document.addEventListener('mousemove', move)
            document.addEventListener('mouseup', moveup)
        },
        // 鼠标离开进度条栏
        progressTrackLeave() {
            this.hoverShowToolTip = false
            this.hoverShowRoundBtn = false
        }
    },
    watch: {
        percent(percent) {
            if (!this.isDrag) {
                this.setProgressBar(percent)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
