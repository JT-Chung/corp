<template>
  <div class="contact">
    <static-banner bannerName="公司服务/Company service" />
    <service-menu />
    <service-toronto />
    <icy-footer />
  </div>
</template>
<script>
import StaticBanner from "@/components/lib/StaticBanner"
import ServiceMenu from "@/components/service/ServiceMenu"
import ServiceToronto from "@/components/service/ServiceToronto"
import icyFooter from "@/components/lib/Footer"
export default {
  components: {
    StaticBanner,
    ServiceMenu,
    ServiceToronto,
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
