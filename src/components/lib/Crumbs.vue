<template>
  <div class="crumbs">
    <h2>{{ crumbsTitle }}</h2>
    <div class="crumb">
      您当前所在位置：&nbsp;<button @click="goService">公司服务</button>
      &nbsp;>>
      {{ currPathName }}
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router"
export default {
  props: {
    crumbsTitle: {
      type: String,
      required: true,
    },
    currPathName: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter()
    function goService() {
      router.replace("service")
    }
    return {
      goService,
    }
  },
}
</script>
<style scoped lang="less">
.crumbs {
  margin-top: 30px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    width: 400px;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
  }
  .crumb {
    button {
      border: none;
      cursor: pointer;
      color: #e3e3e3;
      padding: 5px;
      border-radius: 10%;
      background-color: #000;
      transform: scale(1);
      transition: transform 0.5s linear;
      &:hover {
        transform: scale(1.08);
      }
    }
  }
}
</style>
