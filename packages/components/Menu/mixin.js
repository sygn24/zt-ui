export default {
    inject: ['Menu'],
    data() {
        return {
            itemPaddingLeft: 15,
            offsetTop: '100%'
        }
    },
    mounted() {
        this.setPaddingLeft()
        this.lineOffsetTop()
    },
    updated() {
        this.setPaddingLeft()
        this.lineOffsetTop()
    },
    computed: {
        styles() {
            return {
                paddingLeft: this.verticalModel ? `${this.itemPaddingLeft}px` : ''
            }
        },
        horizontalModel() {
            return this.Menu.model === 'horizontal'
        },
        verticalModel() {
            return this.Menu.model === 'vertical'
        }
    },
    methods: {
        setPaddingLeft() {
            if (this.$parent.$options.name === 'ZtSubmenu' || this.$parent.$options.name === 'ZtMenuItemGroup') {
                if (this.Menu.model === 'horizontal') {
                    this.itemPaddingLeft = 15
                } else {
                    this.$nextTick(() => {
                        this.itemPaddingLeft = this.$parent.itemPaddingLeft + 10
                    })
                }
            }
        },
        lineOffsetTop() {
            if (this.verticalModel) return
            let menuHeight = this.Menu.$refs.ztMenuInstance.getBoundingClientRect().height
            let meunItemHeight = this.$refs.ztMenuItemInstance.getBoundingClientRect().height
            let offsetBottom = (menuHeight - meunItemHeight) / 2
            this.offsetTop = meunItemHeight + offsetBottom - 2
        }
    }
}
