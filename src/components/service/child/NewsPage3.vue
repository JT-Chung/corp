<template>
  <div class="news-page3">
    <crumbs crumbsTitle="新闻动态" currPathName="小知识" />
    <h3>有关于断桥铝门窗的小知识，这两点一定要知道!</h3>
    <p>
      沈阳断桥铝门窗是现在使用比较多的一种门窗产品，这种门窗在我们使用中效果也非常的不错，但是你们一定要知道下面这两点小知识，应该对您了解这类的门窗产品具有很不错的帮助效果。
    </p>
    <p>一.保温铝门窗的抗风压及结构变形性能</p>
    <p>
      铝合金门窗之所以被广泛推广，主要在于它的本身的易加工和强度高的性能。我们开发的EAH系列保温铝合金门窗正是基于此基础上研制开发的。此产品不会因新工艺的使用而影响其性能，依然保留铝合金本身的易加工和抗风压及抗变形的性能，使其无需特殊维护。同时，为了适合各层次建筑物的要求，氟碳喷涂、静电喷涂及阳极氧化处理等各种工艺为产品提供了缤纷的色彩，且具有较强的装饰效果。
    </p>
    <img src="../../../assets/img/newspage2.jpg" alt="" />
    <p>二.保温铝合金门窗的隔热性及隔声性能</p>
    <p class="t">
      保温铝合金门窗是在特定设计的铝合金空腔之中灌注有隔热王之称的PU树脂，再将铝壁分离形成断桥。阻止了热量的传导。并配合5+9+5的中空玻璃，导热系数K值由普通铝门窗的5.93W/m2K降至2.94W/m2K。使冬季居室取暖与夏季空调制冷节能百分之40以上。在寒冷的冬季温差在500C时门窗也不会产生结露现象，从而解决了普通铝合金门窗对室内装饰污染的问题。同时门窗的隔声性能保持在30-40dB之间，使人们在闹市中也能拥有一个宁静温馨的空间。
    </p>
    <p>声明：文章内容来源于网络，如有侵权，抱歉！</p>
  </div>
</template>
<script>
import Crumbs from "../../lib/Crumbs.vue"
export default {
  components: {
    Crumbs,
  },
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.news-page3 {
  p:nth-child(odd) {
    text-indent: 2em;
    line-height: 30px;
  }
  .t {
    text-indent: 2em;
    line-height: 30px;
  }

  img {
    float: right;
  }
}
</style>
