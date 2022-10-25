<template>
    <span class="zt-rate" @mouseleave="mouseLeave">
        <Star
            v-for="num in count"
            :key="num"
            :num="num"
            :allow-half="half"
            @mouseenter.native="enterStar(num)"
            @click.native="clickStar(num)"
            @clickHalfStar="clickHalfStar"
        />
        <span style="margin-left: 10px" v-if="showText">
            <slot>{{ value }} 星</slot>
        </span>
    </span>
</template>

<script>
import Star from './components/Star.vue'
export default {
    name: 'ZtRate',
    components: { Star },
    props: {
        count: {
            type: Number,
            default: 5
        },
        value: {
            type: Number,
            default: 0
        },
        showText: {
            type: Boolean,
            default: true
        },
        half: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'var(--warning)'
        }
    },
    model: {
        prop: 'value',
        event: 'onChange'
    },
    mounted() {
        this.setLightStar(this.value)
    },
    data() {
        return {
            stars: [],
            isSet: false,
            isDisabled: this.disabled
        }
    },
    methods: {
        // 根据当前索引设置对应star实例的颜色
        setStarColor(item, index, num) {
            if (index < num) {
                item.starIcon = 'star-fill'
                if (!this.isDisabled) {
                    item.starColor = this.color
                } else {
                    item.starColor = 'var(--darker-bg1)'
                }
            } else {
                item.starIcon = 'star'
                item.starColor = 'var(--base-border)'
            }
        },
        setLightStar(num) {
            let isFloat = String(num).indexOf('.') //检测小数
            num = Math.ceil(num) //向上取整
            // 遍历star实例数组，设置对应星星高亮
            this.$children.forEach((item, index) => {
                this.setStarColor(item, index, num)
                if (!this.half) return
                // 如果isFloat!==-1则设置当前选择的star为半星
                if (index + 1 == num && isFloat !== -1) {
                    item.showHalf = true
                    item.select = true
                } else {
                    item.select = false
                }
            })
        },
        enterStar(num) {
            if (this.isDisabled) return
            this.$children.forEach((item, index) => {
                this.setStarColor(item, index, num)
                if (!this.half) return
                // 鼠标经过其他 非半颗星时，清空当前的半星
                !(index + 1 == num && item.showHalf) && (item.showHalf = false)
            })
            this.isSet = false
        },
        clickStar(num) {
            if (this.isDisabled) return
            this.setLightStar(num)
            this.$emit('change', num)
            this.isSet = true
        },
        // 点击设置半星
        clickHalfStar(num) {
            if (this.isDisabled) return
            this.clickStar(num)
        },
        mouseLeave() {
            if (this.isDisabled) return
            // 点击设置过后 鼠标移出就不再设置
            !this.isSet && this.setLightStar(this.value)
        }
    },
    watch: {
        isDisabled(val) {
            this.setLightStar(this.value)
        }
    }
}
</script>
