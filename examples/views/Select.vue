<template>
  <div>
    <div class="row">
      <h3>基础用法</h3>
      <zt-select v-model="value">
        <zt-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></zt-option>
      </zt-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',

  data() {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      options2:[]
    }
  },

  methods: {
    change(label) {
      this.$msg('点击了' + label + '--' + this.value)
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
}
</style>