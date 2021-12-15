<template>
  <div class="product-service">
    <h3>title</h3>
    <div class="content">
      <ul>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
      <ul>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </div>
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
.product-service {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 0 50px;
  h3 {
    width: 1120px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .content {
    display: flex;
    width: 1120px;
    height: 288px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-content: center;
      align-items: center;
      width: 300px;
      li {
        margin: 10px 0;
      }
    }
  }
}
</style>
