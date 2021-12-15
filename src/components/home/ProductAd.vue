<template>
  <div class="product-ad">
    <h3>我们的优势何在？</h3>
    <main>
      <div><img src="~@/assets/img/ad1.png" alt="" /><b>华贵品质</b></div>
      <div><img src="~@/assets/img/ad2.png" alt="" /><b>精湛工艺</b></div>
      <div><img src="~@/assets/img/ad3.png" alt="" /><b>度身定制</b></div>
      <div><img src="~@/assets/img/ad4.png" alt="" /><b>高端送货</b></div>
    </main>
  </div>
</template>
<script>
export default {
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.product-ad {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 0 0 50px;
  h3 {
    margin-left: auto;
    margin-right: auto;
    font-size: 1.66rem;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      padding: 0 20px;
      width: 260px;
      height: 182px;
      img {
        width: 150px;
        height: 132px;
      }
      b {
        display: block;
        text-align: center;
        width: 260px;
        height: 30px;
        line-height: 1.5;
      }
    }
  }
}
</style>
