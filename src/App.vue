<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <h1>
          <a class="logo-content" href="./App.vue" title="西安xxxx有限公司"
            >西安xxx有限公司</a
          >
        </h1>
      </div>

      <div class="nav-bar">
        <img src="./assets/img/title.png" alt="" />
        <ul>
          <li>
            <button @click="handleBtnClick('/intro')">公司简介</button>
          </li>
          <li>
            <button @click="handleBtnClick('/home')">工程案例</button>
          </li>
          <li><button @click="handleBtnClick('/service')">公司服务</button></li>
          <li>
            <button @click="handleBtnClick('/contact')">联系我们</button>
          </li>
          <li class="phone-number" ref="handleNum">
            <strong>xxxxxxxxx</strong>
          </li>
        </ul>
      </div>
    </header>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
export default {
  setup() {
    const handleNum = ref()
    const router = useRouter()
    function play() {
      handleNum.value.className = "phone-number "
      setTimeout(() => {
        handleNum.value.className = "phone-number num-active"
      }, 0)
    }
    function handleBtnClick(path) {
      router.push(path)
      play()
    }

    return {
      handleBtnClick,
      handleNum,
    }
  },
}
</script>

<style scoped lang="less">
#app {
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 127px;

    .logo {
      width: 100%;
      height: 127px;
      flex: 0 0 300px;
      position: relative;
      // background-color: blue;
      &-content {
        position: absolute;
        top: 20px;
        right: 0;
        width: 171px;
        height: 87px;
        font-size: 0;
        background: url(./assets/img/logo.png) no-repeat center;
        background-size: 120px;
      }
    }
    .nav-bar {
      flex: 1 1 auto;
      position: relative;
      img {
        width: 400px;
        position: absolute;
        top: 20px;
        left: 10px;
        z-index: -1;
      }
      ul {
        float: right;
        margin-right: 75px;
        li {
          float: left;
          height: 50px;
          list-style: none;
          button {
            background-color: #fff;
            color: #000;
            font-size: 16px;
            line-height: 50px;
            padding: 0 20px;
            border: none;
            cursor: pointer;
          }
        }
      }
      .phone-number {
        margin-left: 75px;
        &.num-active {
          animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
            1s both;
        }
        strong {
          &::before {
            font-family: "icomoon";
            content: "\e942";
            font-size: 25px;
            margin-right: 10px;
          }
        }
      }
    }
    .body {
      width: 100%;
    }
  }
}
</style>
