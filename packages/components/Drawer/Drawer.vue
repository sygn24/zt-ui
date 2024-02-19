<template>
    <transition name="base-fade" v-if="showMask">
        <div class="zt-drawer-wrapper" v-show="visible" @click.self="maskClose">
            <transition name="drawer-slide" @after-enter="afterEnter" @after-leave="afterLeave">
                <div class="zt-drawer" :class="`${direction}`" :style="style" v-show="visible">
                    <div class="zt-drawer-content">
                        <zt-icon
                            icon="close"
                            class="zt-drawer-header-close"
                            @click="handelClose"
                            v-if="showHeader && showClose"
                        />
                        <div class="zt-drawer-header" v-if="showHeader">
                            <slot name="title">
                                <span>{{ title }}</span>
                            </slot>
                        </div>
                        <div class="zt-drawer-body" :style="bodyHeight" ref="ztDrawerBody">
                            <slot></slot>
                        </div>
                        <div class="zt-drawer-footer" v-if="showFooter">
                            <slot name="footer">
                                <zt-button size="small" @click="cancel">取 消</zt-button>
                                <zt-button type="primary" size="small" @click="ok">确 认</zt-button>
                            </slot>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
    <transition name="drawer-slide" @after-enter="afterEnter" @after-leave="afterLeave" v-else>
        <div class="zt-drawer" :class="`${direction}`" :style="style" v-show="visible">
            <div class="zt-drawer-content">
                <zt-icon
                    icon="close"
                    class="zt-drawer-header-close"
                    @click="handelClose"
                    v-if="showHeader && showClose"
                />
                <div class="zt-drawer-header" v-if="showHeader">
                    <slot name="title">
                        <span>{{ title }}</span>
                    </slot>
                </div>
                <div class="zt-drawer-body" :style="bodyHeight" ref="ztDrawerBody">
                    <slot></slot>
                </div>
                <div class="zt-drawer-footer" v-if="showFooter">
                    <slot name="footer">
                        <zt-button @click="cancel">取 消</zt-button>
                        <zt-button type="primary" @click="ok">确 定</zt-button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ZtIcon from '../Icon'
import ZtButton from '../Button'
export default {
    name: 'ZtDrawer',
    components: { ZtIcon, ZtButton },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'right',
            validator: direction => {
                return ['top', 'right', 'bottom', 'left'].includes(direction)
            }
        },
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '30%'
        },
        height: {
            type: String,
            default: '50%'
        },
        // 是否遮罩层关闭
        maskClosable: {
            type: Boolean,
            default: true
        },
        // 是否显示头部
        showHeader: {
            type: Boolean,
            default: true
        },
        // 是否显示底部
        showFooter: {
            type: Boolean,
            default: true
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            default: true
        },
        showMask: {
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
                width: ['right', 'left'].includes(this.direction) ? this.width : '100%',
                height: ['top', 'bottom'].includes(this.direction) ? this.height : '100%'
            }
        },
        bodyHeight() {
            let height
            if (this.showFooter || this.showHeader) {
                height = 'calc(100% - 48px)'
            }
            if (this.showFooter && this.showHeader) {
                height = 'calc(100% - 96px )'
            }
            if (!this.showFooter && !this.showHeader) {
                height = '100%'
            }
            return { height }
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
            if (this.destroyOnClose && this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el)
            }
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.$emit('open')
                this.$nextTick(() => {
                    this.$refs.ztDrawerBody.scrollTop = 0
                })
                if (this.appendToBody) {
                    document.body.appendChild(this.$el)
                }
            } else {
                this.$emit('close')
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
