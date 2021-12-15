<template>
  <div class="product">
    <template v-if="isNormal">
      <div class="declare">
        <div class="declare-text">
          <h4>{{ declareText.h4 }}</h4>
          <h2>{{ declareText.h2 }}</h2>
          <p>{{ declareText.p }}</p>
        </div>
      </div>
      <div class="shadow">
        <img :src="imgUrl()" alt="" style="margin: 0% 0% 0% -8%" />
      </div>
    </template>
    <!-- 反方向 -->
    <template v-else>
      <div class="shadow">
        <img :src="imgUrl()" alt="" style="margin: 0% 0% 0% 5%" />
      </div>
      <div class="declare">
        <div class="declare-text">
          <h4>{{ declareText.h4 }}</h4>
          <h2>{{ declareText.h2 }}</h2>
          <p>{{ declareText.p }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    isNormal: {
      type: Boolean,
      default: true,
    },
    declareText: {
      type: Object,
      default: () => ({
        h4: "名称",
        h2: "哈哈哈",
        p: "内容",
      }),
    },
    pictureName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const imgUrl = () => {
      if (props.pictureName === "logo") {
        const pic = require("@/assets/img/logo.png")
        return pic
      }
    }
    return {
      imgUrl,
    }
  },
}
</script>
<style scoped lang="less">
.product {
  display: flex;
  height: 560px;
  width: 100%;
  padding: 100px 0 75px;
  .declare {
    flex: 1;
    text-align: center;
    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0% 25% 1% 12%;
      height: 553px;
      h4 {
        font-size: 16px;
        color: #220000;
        &::before {
          font-family: "icomoon";
          content: "\e907";
        }
      }
      h2 {
        font-size: 28px;
        color: #000000;
      }
      p {
        color: #414346;
      }
    }
  }
  .shadow {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #eaeaea;
    width: 100%;
    height: 100%;
    img {
      width: 695px;
      height: 435px;
    }
  }
}
</style>
