<template>
  <div class="swiper">
    <div class="swiper-body">
      <template v-for="(item, i) in sliders" :key="i">
        <div class="swiper-body-item" :class="{ fade: index === i }">
          <img :src="item" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue"
export default {
  props: {
    // sliders: {
    //   type: Array,
    //   default: () => [],
    // },
    duration: {
      type: Number,
      default: 5000,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const sliders = [
      require("../../assets/img/banner1.jpg"),
      require("../../assets/img/banner2.jpg"),
      require("../../assets/img/banner3.jpg"),
    ]
    // 默认显示的图片的索引
    const index = ref(0)
    // 自动播放
    let timer = null
    const autoPlayFn = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= sliders.length) {
          index.value = 0
        }
      }, props.duration)
    }
    watch(
      () => sliders,
      (newVal) => {
        // 有数据&开启自动播放，才调用自动播放函数
        if (newVal.length > 1 && props.autoplay) {
          index.value = 0
          autoPlayFn()
        }
      },
      { immediate: true }
    )

    // const start = () => {
    //   if (sliders.length && props.autoPlay) {
    //     autoPlayFn()
    //   }
    // }
    // 组件消耗，清理定时器
    // onUnmounted(() => {
    //   if (timer.value) clearInterval(timer.value)
    // })
    return { sliders, index }
  },
}
</script>

<style scoped lang="less">
.swiper {
  width: 100%;
  height: 550px;
  min-width: 300px;
  min-height: 150px;

  &-body {
    width: 100%;
    height: 100%;
    padding-left: 0;
    overflow: hidden;
    position: relative;
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 9;
        animation: icy-swiper 5s;
      }

      img {
        width: 100%;
        height: 600px;
      }
    }
  }
}
</style>
