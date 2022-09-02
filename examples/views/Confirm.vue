<template>
  <div>
    <div class="row">
      <h3>基础使用</h3>
      <zt-button type="primary" @click="confirm1">基础使用</zt-button>
    </div>
    <div class="row">
      <h3>自定义标题、图标和按钮文字</h3>
      <zt-button type="primary" @click="confirm2">自定义</zt-button>
    </div>
    <div class="row">
      <h3>异步关闭</h3>
      <zt-button type="primary" @click="confirm3">异步关闭</zt-button>
    </div>
    <div class="row">
			<h3>不同类型</h3>
			<zt-button type="primary" @click="handleClick1()">默认提示</zt-button>
			<zt-button type="success" @click="handleClick2()" icon="success">成功</zt-button>
			<zt-button type="warning" @click="handleClick3()" icon="warning">警告</zt-button>
			<zt-button type="danger" @click="handleClick4()" icon="error" textColor="#fff">错误</zt-button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    confirm1() {
      this.$confirm('我是基础使用')
    },
    confirm2() {
      this.$confirm({
        title: '提交信息',
        content: '提交后不可更改, 是否继续?',
        okText:"提交",
        cancelText:"放弃",
        customIcon:{
          icon:"zt-icon-add",
          size:"22",
          color:"var(--success)"
        },
        onOk: () => {
          this.$msg.success('提交成功')
        },
        onCancel: () => {
          this.$msg('放弃')
        }
      })
    },
    confirm3() {
      this.$confirm({
        title: '异步关闭',
        content: '对话框将在 2秒 后关闭',
        loading:true,
        onOk: () => {
          setTimeout(() => {
            // 异步关闭需要手动调用remove方法关闭对话框
            this.$confirm.remove()
            this.$msg.info('异步关闭')
          }, 2000)
        },
        onCancel: () => {
          this.$msg.warning('取消')
        }
      })
    },
    handleClick1() {
			this.$confirm("默认提示信息");
		},
		handleClick2() {
			this.$confirm.success("成功信息");
		},
		handleClick3() {
			this.$confirm.warning("警告信息");
		},
		handleClick4() {
			this.$confirm.error("错误信息");
		},
  }
}
</script>

<style lang="less" scoped>
.row {
  margin-bottom: 20px;
  h3 {
    padding: 10px 0;
  }
  .zt-button{
    margin-right: 10px;
  }
}
</style>