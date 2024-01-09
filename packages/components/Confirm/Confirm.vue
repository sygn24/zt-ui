<template>
    <transition name="base-fade" @after-leave="handleAfterLeave">
        <div class="zt-modal-wrapper" v-show="visable">
            <transition name="modal-fade">
                <div class="zt-modal" :style="style" v-show="visable">
                    <div class="zt-modal-header">
                        <div class="zt-modal-header-title">
                            <zt-icon
                                :custom="customIcon.icon"
                                :color="customIcon.color"
                                :size="customIcon.size"
                                v-if="customIcon.icon !== ''"
                            />
                            <zt-icon :icon="type" :color="typeContent" size="20" v-else />
                            <span style="padding-left: 5px">{{ title }}</span>
                        </div>
                        <zt-icon icon="close" class="zt-modal-header-close" @click="handleClose" />
                    </div>
                    <div class="zt-modal-body">{{ content }}</div>
                    <div class="zt-modal-footer">
                        <zt-button @click="cancel" size="small">{{ cancelText }}</zt-button>
                        <zt-button type="primary" @click="ok" size="small" :loading="loadingBtn">{{ okText }}</zt-button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'ZtConfirm',
    components: { ZtIcon },
    data() {
        return {
            visable: false,
            title: '提示',
            content: '',
            okText: '确 认',
            cancelText: '取 消',
            type: 'info',
            // 自定义标题图标
            customIcon: {
                icon: '',
                color: 'var(--primary)',
                size: '20'
            },
            width: '30%',
            top: '15vh',
            loadingBtn: false
        }
    },
    computed: {
        style() {
            return {
                width: this.width,
                marginTop: this.top
            }
        },
        typeContent() {
            let iconColor = 'var(--primary) '
            if (this.type == 'success') {
                iconColor = 'var(--success)'
                this.title = '成功'
            }
            if (this.type == 'error') {
                iconColor = 'var(--danger)'
                this.title = '错误'
            }
            if (this.type == 'warning') {
                iconColor = 'var(--warning)'
                this.title = '警告'
            }
            return iconColor
        }
    },
    methods: {
        ok() {
            this.onOk && this.onOk()
            // 是否异步关闭
            if (!this.loading) {
                this.visable = false
            } else {
                this.loadingBtn = this.loading
            }
        },
        cancel() {
            if (this.loadingBtn) return
            this.onCancel && this.onCancel()
            this.visable = false
        },
        handleClose() {
            if (this.loadingBtn) return
            this.visable = false
        },
        handleAfterLeave() {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
