<template>
    <div ref="ztSelect" class="zt-select" :class="{ disabled: disabled }" :style="styles">
        <div
            ref="selectContent"
            class="zt-select-content"
            @click="toggleSelect"
            @mouseenter="showClear = true"
            @mouseleave="showClear = false"
        >
            <div class="zt-select-content-label ellipsis" :class="{ plac: label == '' }" :title="label">
                {{ label == '' ? placeholder : label }}
            </div>
            <ZtIcon
                v-if="clearable && showClear && label !== ''"
                icon="clear"
                :size="fontSize"
                class="zt-select-content-icon"
                @click.stop="updateVal('', '')"
            />
            <ZtIcon
                v-else
                icon="arrow-down-bold"
                :size="fontSize"
                class="zt-select-content-icon"
                :class="{ flip: showSelect, 'reverse-flip': !showSelect }"
            />
        </div>
        <transition name="select-down">
            <div class="zt-select-drop" :class="selectListClass" v-show="showSelect" ref="selectList">
                <div class="zt-select-drop-list">
                    <slot v-if="$slots.default"></slot>
                    <div v-else class="no-data">暂无数据</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'ZtSelect',
    components: { ZtIcon },
    props: {
        value: {
            type: [String, Number],
            require: true
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        width: {
            type: [String, Number],
            default: 240
        },
        height: {
            type: [String, Number],
            default: 40
        },
        fontSize: {
            type: [String, Number],
            default: 14
        }
    },
    model: {
        prop: 'value',
        event: 'valueChange'
    },
    data() {
        return {
            showSelect: false,
            label: '',
            options: [],
            showClear: false,
            isTop: false // 选项列表是否位于上方
        }
    },
    mounted() {
        this.getOptions()
        this.setLabel()
        document.addEventListener('mouseup', e => this.mouseupCloseSelect(e))
    },
    beforeDestroy() {
        document.removeEventListener('mouseup', e => this.mouseupCloseSelect(e))
    },
    computed: {
        styles() {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                lineHeight: this.height + 'px',
                fontSize: this.fontSize + 'px'
            }
        },
        selectListClass() {
            return {
                top: this.isTop,
                bottom: !this.isTop,
                reverse: this.isTop
            }
        }
    },
    methods: {
        setLabel() {
            const option = this.options.find(item => item.value == this.value)
            if (option !== undefined && option.label) {
                this.label = option.label
            } else {
                this.label = ''
            }
        },
        getOptions() {
            this.options = this.$children.filter(item => item.$options.name === 'ZtOption')
        },
        updateVal(label, value) {
            this.$emit('valueChange', value)
            label !== '' && this.$emit('onChange', label)
        },
        toggleSelect() {
            if (this.disabled) return
            this.showSelect = !this.showSelect
            this.showSelect && this.calcBottomHeight()
        },
        // 计算底部剩余高度,当底部高度没有选项列表高时，将选项列表置于上方
        calcBottomHeight() {
            let clientHeight = document.body.clientHeight
            let selectTop = this.$refs.ztSelect.getBoundingClientRect().top
            let selectListHeight = 216
            this.isTop = clientHeight - selectTop < selectListHeight
        },
        // 点击页面其他部分关闭下拉框
        mouseupCloseSelect(e) {
            let selectContent = this.$refs.selectContent
            let selectList = this.$refs.selectList
            if (selectContent || selectList) {
                if (selectContent.contains(e.target) || selectList.contains(e.target)) return
                else {
                    this.showSelect = false
                }
            }
        }
    },
    watch: {
        value() {
            this.setLabel()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
