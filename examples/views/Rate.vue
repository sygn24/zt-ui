<template>
  <div class="rate">
    <zt-rate :value="value" :count="8"></zt-rate>
  </div>
</template>

<script>
export default {
  name: 'Rate',

  data() {
    return {
      value: 3
    }
  },
}
</script>

<style lang="less" scoped></style>
