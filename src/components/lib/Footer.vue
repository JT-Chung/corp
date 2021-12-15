<template>
  <div class="footer">
    <div class="footer-main">
      <div class="message">
        <h2>企业文化</h2>
        <p>企业理念：保障用户的权力利益，实现员工的人生价值。</p>

        <p>企业精神：展现自我 回馈社会</p>

        <p>经营理念：诚为本 和则兴 技至精 业竞成</p>

        <p>管理理念：“升”于忧患，“弃”于安乐</p>

        <p>工作理念：凡事不要自我设限，凡事皆有可能</p>
      </div>
      <div class="contact">
        <h2>联系方式</h2>
        <span class="contact-num">xxxxxx</span>
        <span class="contact-phone">xxxxxx</span>
        <span class="contact-mail">xxxxxxxx</span>
        <span class="contact-card">xxxxxxxx</span>
        <span class="contact-weixin">xxxxxxxx</span>
      </div>
      <div class="open-info">
        <h2>工作时间</h2>
        <span>Monday <i>8:AM-8:30PM</i></span>
        <span>Tuesday <i>8:AM-8:30PM</i></span>
        <span>Wednesday <i>8:AM-8:30PM</i></span>
        <span>Thursday <i>8:AM-8:30PM</i></span>
        <span>Friday <i>8:AM-8:30PM</i></span>
        <span>Saturday <i>8:AM-8:30PM</i></span>
        <span>Sunday <i>release</i></span>
      </div>
    </div>
    <div class="footer-filing">
      <div class="last-info">
        <p>© 2021 iicyAlan All rights reserved</p>
        <p>Website powered by iIcy</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {}
  },
}
</script>
<style scoped lang="less">
.footer {
  width: 100%;
  background-color: #000;
  &-main {
    height: 380px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .message {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 380px;
      height: 320px;
      color: #fff;
    }
    .contact {
      width: 200px;
      height: 304px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      &-num {
        color: #fff;
        margin-bottom: 30px;
        &::before {
          font-family: "icomoon";
          content: "\e958";
          padding-right: 10px;
        }
      }
      &-phone {
        color: #fff;
        margin-bottom: 30px;
        &::before {
          font-family: "icomoon";
          content: "\e96d";
          padding-right: 10px;
        }
      }
      &-mail {
        color: #fff;
        margin-bottom: 30px;
        &::before {
          font-family: "icomoon";
          content: "\ea83";
          padding-right: 10px;
        }
      }
      &-card {
        color: #fff;
        margin-bottom: 30px;
        &::before {
          font-family: "icomoon";
          content: "\eabf";
          padding-right: 10px;
        }
      }
      &-weixin {
        color: #fff;
        &::before {
          font-family: "icomoon";
          content: "\e900";
          padding-right: 10px;
        }
      }
    }
    .open-info {
      width: 273px;
      height: 304px;
      color: #fff;
      h2 {
        text-align: center;
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
        margin-bottom: 20px;
      }
    }
  }
  &-filing {
    width: 100%;
    height: 151px;
    display: flex;
    justify-content: center;
    align-items: center;
    .last-info {
      display: flex;
      justify-content: center;
      border-top: 1px solid #363636;
      width: 900px;
      p {
        flex: 1;
        color: #363636;
        text-align: center;
      }
    }
  }
}
</style>
