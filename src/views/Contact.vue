<template>
  <div class="contact">
    <static-banner bannerName="联系我们/Contact us" />
    <contact-main />
    <icy-footer />
  </div>
</template>
<script>
import StaticBanner from "@/components/lib/StaticBanner"
import ContactMain from "@/components/contact/ContactMain"
import icyFooter from "@/components/lib/Footer"
export default {
  components: {
    StaticBanner,
    ContactMain,
    icyFooter,
  },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.contact {
  width: 100%;
}
</style>
