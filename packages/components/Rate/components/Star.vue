<template>
    <span class="star-wrapper">
        <ZtIcon class="star" :icon="starIcon" :color="starColor" size="18" />
        <span class="mask1" @mouseenter="enterHalfStar" @mouseleave="leaveHalfStar" @click.stop="clickHalfStar" v-if="allowHalf"></span>
        <span class="mask2" v-if="showHalf" @mouseenter="mask2Enter">
            <ZtIcon icon="star-fill" color="var(--base-border)" size="18" />
        </span>
    </span>
</template>

<script>
import ZtIcon from '../../Icon'
export default {
    name: 'Star',
    components: { ZtIcon },
    props: {
        allowHalf: {
            type: Boolean,
            default: false
        },
        num: {
            type: Number
        }
    },
    data() {
        return {
            starIcon: 'star',
            starColor: 'var(--base-border)',
            showHalf: false,
            select: false //是否选择半星
        }
    },
    methods: {
        enterHalfStar() {
            if (this.$parent.isDisabled) return
            this.showHalf = true
        },
        leaveHalfStar() {
            if (!this.select) {
                this.showHalf = false
            }
        },
        mask2Enter() {
            if (this.$parent.isDisabled) return
            this.showHalf = false
        },
        clickHalfStar() {
            this.select = true
            this.$emit('clickHalfStar', this.num - 0.5)
        }
    }
}
</script>
<style lang="less" scoped>
.star-wrapper {
    position: relative;
    cursor: pointer;
    .mask1 {
        height: 20px;
        width: 12px;
        background: transparent;
        position: absolute;
        left: 0px;
    }
    .mask2 {
        height: 18px;
        width: 10px;
        overflow: hidden;
        background: #fff;
        position: absolute;
        left: 12px;
        .zt-icon {
            position: absolute;
            left: -9px;
            transition: all 0.15s ease-out;
        }
    }
}
.star {
    padding: 0 3px;
    transition: all 0.15s ease-out;
}
</style>
