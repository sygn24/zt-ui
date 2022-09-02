<template>
  <div>
    <div class="row">
      <h3>加载中</h3>
      <zt-button type="primary" @click="loading1">基础用法</zt-button>
      <zt-button type="success" @click="loading2">自定义文字</zt-button>
      <zt-button type="warning" @click="loading3">自定义图标</zt-button>
      <zt-button type="danger" @click="loading4">自定义颜色</zt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  data() {
    return {}
  },
  methods: {
    loading1() {
      this.$loading.start()
      setTimeout(() => {
        this.$loading.close()
      }, 2000)
    },
    loading2() {
      this.$loading.start('Loading...')
      setTimeout(() => {
        this.$loading.close()
      }, 2000)
    },
    loading3() {
      this.$loading.start({
        text: '加载中...',
        icon: 'loading1',
        iconSize: '50'
      })
      setTimeout(() => {
        this.$loading.close()
      }, 2000)
    },
    loading4() {
      this.$loading.start({
        bgColor:'rgba(255,255,255,.8)',
        color:"#000"
      })
      setTimeout(() => {
        this.$loading.close()
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.row {
  margin-bottom: 20px;
  h3 {
    padding: 10px 0;
  }
  .zt-button {
    margin: 10px 10px 10px 0;
  }
}
</style>