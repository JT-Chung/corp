<template>
  <div class="intro-title">
    <h2>关于我们-About</h2>
    <div>公司简介</div>
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
.intro-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  h2 {
    color: #bbb;
    border-bottom: 1px solid #bbb;
    margin-bottom: 45px;
  }
  div {
    position: relative;
    width: 150px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    background-color: #b93c10;
    color: #fff;
    text-align: center;
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: 50%;
      bottom: -10px;
      margin-left: -10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #b93c10;
    }
  }
}
</style>
