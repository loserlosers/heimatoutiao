<template>
  <div class="my-container">
    <!-- 未登录头部 -->
    <div class="header not-login" v-if="!user">
      <div class="login-btn" @click="$router.push('/login')">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="" />
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- /未登录头部 -->

    <!-- 已登录头部 -->
    <!-- 已登录 -->
    <div class="header user-info" v-else>
      <!-- 基本信息 -->
      <div class="base-info">
        <div class="left">
          <van-image
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            class="avatar"
            round
          />
          <span class="name">黑马头条</span>
        </div>
        <div class="right">
          <van-button type="default" size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <!-- 粉丝、关注 -->
      <div class="data">
        <div class="data-item">
          <span>90</span>
          <span>头条</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>关注</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>粉丝</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>获赞</span>
        </div>
      </div>
    </div>
    <van-grid class="grid-nav" :column-num="2">
      <van-grid-item icon="photo-o" text="收藏">
        <template #icon>
          <ToutiaoIcon icon="shoucang"></ToutiaoIcon>
        </template>
        <template #text>
          <span>收藏</span>
        </template>
      </van-grid-item>
      <van-grid-item icon="photo-o" text="历史">
        <template #icon>
          <ToutiaoIcon icon="lishi"></ToutiaoIcon>
        </template>
        <template #text>
          <span>历史</span>
        </template>
      </van-grid-item>
    </van-grid>

    <!-- /已登录头部 -->

    <div class="grid-nav"></div>
    <van-cell title="消息通知" is-link url="" />
    <van-cell title="实名认证" is-link url="" />
    <van-cell title="用户反馈" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell title="系统设置" is-link url="" />
    <van-cell
      v-if="user"
      @click="logOut"
      class="logout-cell"
      title="退出登录"
      is-link
      url=""
      center
    >
    </van-cell>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyIndex",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async logOut() {
      await this.$dialog.confirm({
        title: "提示",
        message: "确认退出",
      });
      this.$store.commit("setUser", null);
    },
  },
};
</script>

<style scoped lang="less">
.grid-nav {
  .van-grid-item {
    .toutiao {
      font-size: 45px;
      color: #eb5253;
    }
    span {
      font-size: 28px;
      color: black;
    }
  }
}
.logout-cell {
  height: 100px;
  text-align: center;
  color: #eb5253;
  margin: 10px 0;
  font-size: 30px;
}
.data {
  display: flex;
  justify-content: space-around;
  .data-item {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    span:nth-child(1) {
      font-size: 36px;
      margin-bottom: 15px;
    }
    span:nth-child(2) {
      font-size: 23px;
    }
  }
}

.user-info {
  //background: red;
  .base-info {
    height: 231px;
    padding: 76px 32px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
      .avatar {
        width: 132px;
        height: 132px;
        border: 2px solid #fff;
      }
      .name {
        font-size: 30px;
        color: #fff;
        margin-left: 30px;
      }
    }
  }
}

.my-container {
  .header {
    height: 361px;
    background: url("~@/assets/banner.png");
    background-size: cover;
  }

  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
}
</style>
