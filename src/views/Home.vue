<template>
  <div class="home">
    <swiper />
    <product :declareText="declareText" pictureName="logo" />
    <product :isNormal="false" :declareText="declareText" pictureName="logo" />
    <product :declareText="declareText" pictureName="logo" />
    <!-- <product-service /> -->
    <product-ad />
    <icy-footer />

    <!-- 简介  工程案例  公司服务  联系我们 -->
  </div>
</template>
<script>
import Swiper from "../components/home/Swiper.vue"
import Product from "../components/home/Product.vue"
// import ProductService from "../components/home/ProductService.vue"
import ProductAd from "../components/home/ProductAd.vue"
import icyFooter from "../components/lib/Footer.vue"
export default {
  components: {
    Swiper,
    Product,
    // ProductService,
    ProductAd,
    icyFooter,
  },
  setup() {
    const declareText = {
      h4: "极尽奢华 精品门窗",
      h2: "标题",
      p: "此处添加描述",
    }
    return {
      declareText,
    }
  },
}
</script>
<style scoped lang="less">
.home {
  width: 100%;
}
</style>
