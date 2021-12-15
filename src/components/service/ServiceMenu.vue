<template>
  <div class="service-menu">
    <div class="service-menu-main">
      <ul class="aside-menu">
        <h3>产品分类</h3>
        <li>
          <button @click="goWhere('category&1')">塑钢门窗</button>
        </li>
        <li><button @click="goWhere('category&2')">断桥铝门窗</button></li>
        <li><button @click="goWhere('category&3')">五金配件</button></li>
        <h3>新闻动态</h3>
        <li>
          <button @click="goWhere('news&1')">塑钢门窗有哪些分类？</button>
        </li>
        <li>
          <button @click="goWhere('news&2')">铝门窗如何辨别质量？</button>
        </li>
        <li>
          <button @click="goWhere('news&3')">有关于断桥铝门窗的小知识</button>
        </li>
        <li>
          <button @click="goWhere('news&4')">关于门窗选择的重要性！</button>
        </li>
        <h3>联系我们</h3>
        <li>西安市xxx有限公司</li>
        <li>地址：xxxxx</li>
        <li>服务热线：xxxxx</li>
        <li>邮箱：xxxxxx</li>
        <li>网址：xxxxxx</li>
      </ul>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    function goWhere(path) {
      router.push(path)
    }
    return {
      goWhere,
    }
  },
}
</script>
<style scoped lang="less">
.service-menu {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  &-main {
    width: 1200px;
    display: flex;
    .aside-menu {
      flex: 1;
      margin-right: 30px;
      list-style: none;
      h3 {
        height: 45px;
        line-height: 45px;
        padding-left: 10px;
        background-color: #262626;
        border-radius: 1%;
        color: #fff;
      }
      li {
        border-radius: 1%;
        height: 28px;
        line-height: 28px;
        background-color: #41c085;

        button {
          width: 100%;
          height: 100%;
          text-align: left;
          color: #666;
          border: none;
          cursor: pointer;
          background-color: #fff;
          border-radius: 10%;

          &:hover {
            background-color: #41c085;
          }
        }
      }
    }
    .content {
      flex: 4;
    }
  }
}
</style>
