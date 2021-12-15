<template>
  <div class="static-banner">
    <h1>{{ bannerName }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    bannerName: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.static-banner {
  background-color: #000;
  border-radius: 1%;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  animation: bounce-in-top 1.1s both;
  h1 {
    animation: wobble-hor-top 0.8s 2s both;
  }
}
</style>
