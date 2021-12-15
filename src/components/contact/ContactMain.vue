<template>
  <div class="contact-main">
    <div class="address">
      <h2>地址和营业时间</h2>
      <h3>联系方式</h3>
      <p>xxxxxx</p>
      <h3>邮箱</h3>
      <p>XXXXX@XXXXcom</p>
      <h3>地址</h3>
      <p>xxxxxx</p>
      <h3>营业时间</h3>
      <div class="hours">
        <div>
          <p>Monday</p>
          <p>8am - 8.30pm</p>
        </div>
        <div>
          <p>Tuesday</p>
          <p>8am - 8.30pm</p>
        </div>
        <div>
          <p>Wednesday</p>
          <p>8am - 8.30pm</p>
        </div>
        <div>
          <p>Thursday</p>
          <p>8am - 8.30pm</p>
        </div>
        <div>
          <p>Friday</p>
          <p>8am - 8.30pm</p>
        </div>
        <div>
          <p>Saturday</p>
          <p>release</p>
        </div>
      </div>
    </div>
    <div class="map">
      <icy-map />
    </div>
    <div class="weixin">
      <h3>扫一扫加微信</h3>
      <img src="../../assets/img/weixin.png" alt="" />
    </div>
  </div>
</template>
<script>
import icyMap from "@/components/lib/Map.vue"
export default {
  components: {
    icyMap,
  },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.contact-main {
  width: 100%;
  height: 970px;
  position: relative;

  .address {
    position: absolute;
    width: 342px;
    height: 530px;
    top: 100px;
    left: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      display: block;
      background-color: #000;
      color: #fff;
      width: 180px;
      border-radius: 1%;
      padding-top: 10px;
      padding-bottom: 15px;
      text-align: center;
    }
    .hours {
      display: flex;
      width: 250px;
      flex-direction: column;
      justify-content: space-between;
      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .map {
    position: absolute;
    width: 500px;
    height: 530px;
    top: 100px;
    left: 462px;
    vertical-align: middle;
    border: 3px solid #000;
    margin-top: 20px;
  }
  .weixin {
    position: absolute;
    top: 100px;
    right: 10px;
    height: 300px;
    width: 240px;
    h3 {
      text-align: center;
      &::before {
        font-family: "icomoon";
        content: "\ea9f";
        font-size: 30px;
      }
    }
    img {
      width: 120px;
      transform: translateX(52%);
    }
  }
}
</style>
