<template>
    <transition name="base-fade" @after-enter="afterEnter" @after-leave="afterLeave">
        <div class="zt-modal-wrapper" v-show="visible" @click.self="maskClose" ref="ztModal">
            <transition name="modal-fade">
                <div class="zt-modal" :style="style" v-show="visible">
                    <div class="zt-modal-header">
                        <slot name="title">
                            <span>{{ title }}</span>
                        </slot>
                        <ZtIcon icon="close" class="zt-modal-header-close" @click="handelClose" v-if="showClose" />
                    </div>
                    <div class="zt-modal-body">
                        <slot></slot>
                    </div>
                    <div class="zt-modal-footer" v-if="showFooter">
                        <slot name="footer">
                            <zt-button size="small" @click="cancel">取 消</zt-button>
                            <zt-button type="primary" size="small" @click="ok">确 认</zt-button>
                        </slot>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'ZtModal',
    components: { ZtIcon },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '30%'
        },
        // marginTop值
        top: {
            type: String,
            default: '15vh'
        },
        // 是否遮罩层关闭
        maskClosable: {
            type: Boolean,
            default: true
        },
        // 是否显示底部按钮
        showFooter: {
            type: Boolean,
            default: true
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            default: true
        },
        // 是否插入至 body 元素
        appendToBody: {
            type: Boolean,
            default: false
        },
        // 是否关闭时销毁
        destroyOnClose: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        style() {
            return {
                width: this.width,
                marginTop: this.top
            }
        }
    },
    methods: {
        handelClose() {
            this.$emit('update:visible', false)
        },
        maskClose() {
            this.maskClosable && this.handelClose()
        },
        ok() {
            this.handelClose()
            this.$emit('on-ok')
        },
        cancel() {
            this.handelClose()
            this.$emit('on-cancel')
        },
        afterEnter() {
            this.$emit('opened')
        },
        afterLeave() {
            this.$emit('closed')
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.$emit('open')
                this.$nextTick(() => {
                    this.$refs.ztModal.scrollTop = 0
                })
                if (this.appendToBody) {
                    document.body.appendChild(this.$el)
                }
            } else {
                this.$emit('close')
                if (this.destroyOnClose && this.$el && this.$el.parentNode) {
                    this.$el.parentNode.removeChild(this.$el)
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
