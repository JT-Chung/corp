<template>
  <div class="intro">
    <static-banner bannerName="关于我们/About us" />
    <intro-title />
    <about-us />
    <icy-footer />
  </div>
</template>
<script>
import StaticBanner from "@/components/lib/StaticBanner"
import IntroTitle from "@/components/intro/IntroTitle"
import AboutUs from "@/components/intro/AboutUs"
import icyFooter from "@/components/lib/Footer"
export default {
  components: {
    StaticBanner,
    IntroTitle,
    AboutUs,
    icyFooter,
  },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.intro {
  width: 100%;
}
</style>
