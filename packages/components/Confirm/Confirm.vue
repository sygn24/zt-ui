<template>
  <transition name="modal-fade">
    <div class="zt-modal-wrapper" v-if="visable">
      <div class="zt-modal" :style="style">
        <div class="zt-modal-header">
          <div class="zt-modal-header-title">
            <ZtIcon
              :custom="customIcon.icon"
              :color="customIcon.color"
              :size="customIcon.size"
              v-if="customIcon.icon!==''"
            />
            <ZtIcon :icon="type" :color="typeContent" size="20" v-else />
            <span style="padding-left:5px">{{ title }}</span>
          </div>
          <ZtIcon icon="close" class="zt-modal-header-close" @click="visable=false" />
        </div>
        <div class="zt-modal-body">{{content}}</div>
        <div class="zt-modal-footer">
          <zt-button @click="cancel" size="small">{{cancelText}}</zt-button>
          <zt-button type="primary" @click="ok" size="small" :loading="loadingBtn">{{okText}}</zt-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ZtConfirm',
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
      } else if (this.type == 'error') {
        iconColor = 'var(--danger)'
        this.title = '错误'
      } else if (this.type == 'warning') {
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
      this.onCancel && this.onCancel()
      this.visable = false
    },
    remove() {
      this.visable = false
      this.loadingBtn = false
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
