<template>
  <div class="loading" :style="style">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'LoadingRectangles',
  props: {
    color: {
      type: String,
      default: 'var(--primary)'
    }
  },
  computed: {
    style() {
      return {
        '--themeColor': this.color
      }
    }
  }
}
</script>

<style scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: var(--themeColor);
  width: 40px;
  height: 32px;
  margin: 0 auto;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color:  var(--themeColor);
}

.loading > div {
  width: 4px;
  height: 32px;
  margin: 2px;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
  animation-name: line-scale-party;
  animation-iteration-count: infinite;
}

.loading > div:nth-child(1) {
  animation-duration: 0.43s;
  animation-delay: -0.23s;
}

.loading > div:nth-child(2) {
  animation-duration: 0.62s;
  animation-delay: -0.32s;
}

.loading > div:nth-child(3) {
  animation-duration: 0.43s;
  animation-delay: -0.44s;
}

.loading > div:nth-child(4) {
  animation-duration: 0.8s;
  animation-delay: -0.31s;
}

.loading > div:nth-child(5) {
  animation-duration: 0.74s;
  animation-delay: -0.24s;
}

.loading.la-sm {
  width: 20px;
  height: 16px;
}

.loading.la-sm > div {
  width: 2px;
  height: 16px;
  margin: 1px;
  margin-top: 0;
  margin-bottom: 0;
}

.loading.la-2x {
  width: 80px;
  height: 64px;
}

.loading.la-2x > div {
  width: 8px;
  height: 64px;
  margin: 4px;
  margin-top: 0;
  margin-bottom: 0;
}

.loading.la-3x {
  width: 120px;
  height: 96px;
}

.loading.la-3x > div {
  width: 12px;
  height: 96px;
  margin: 6px;
  margin-top: 0;
  margin-bottom: 0;
}

@keyframes line-scale-party {
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.3);
  }

  100% {
    transform: scaleY(1);
  }
}
</style>