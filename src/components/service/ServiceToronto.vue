<template>
  <div class="service">
    <div>
      <img src="../../assets/img/interior-design-toronto1.png" alt="" />
      <h4>全国服务</h4>
      <p>我们为阁下度身定制独一无二的玻璃制品。</p>
    </div>
    <div>
      <img src="../../assets/img/interior-design-toronto2.png" alt="" />
      <h4>高端送货</h4>
      <p>点到点送货保证安全送达，让阁下免除烦忧。</p>
    </div>
    <div>
      <img src="../../assets/img/interior-design-toronto3.png" alt="" />
      <h4>现场摆放</h4>
      <p>精心的摆放与设计让您的空间最大程度展现</p>
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
.service {
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 330px;
    height: 240px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      font-size: 20px;
    }
    img {
      width: 176px;
      height: 126px;
    }
  }
}
</style>
