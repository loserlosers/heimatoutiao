<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="rules.mobile"
        type="number"
        maxlength="11"
        required
      >
        <template #left-icon>
          <ToutiaoIcon icon="shouji"></ToutiaoIcon>
        </template>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="rules.code"
        type="number"
        maxlength="6"
        required
      >
        <template #left-icon>
          <ToutiaoIcon icon="yanzhengma"></ToutiaoIcon>
        </template>
        <template #button>
          <van-count-down
            v-if="isShowCountDown"
            @finish="finish"
            :time="time"
            format="ss 秒"
          />
          <van-button
            v-else
            :loading="isStatus"
            @click="sendSmsCode"
            size="small"
            native-type="button"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, getSmsCode } from "@/api/user";
import { Toast } from "vant";
export default {
  data() {
    return {
      isStatus: false,
      isShowCountDown: false,
      time: 5000,
      // username: "",
      // password: "",
      user: {
        mobile: "",
        code: "",
      },
      rules: {
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "请输入正确的手机号",
          },
        ],
        code: [
          {
            required: true,
            message: "验证码不能为空",
          },
          {
            pattern: /^\d{6}$/,
            message: "请输入正确的六位验证码",
          },
        ],
      },
    };
  },
  methods: {
    finish() {
      this.isShowCountDown = false;
    },
    async onSubmit() {
      try {
        const res = await login(this.user);
        console.log(res);
        Toast.success("登录成功");
      } catch (error) {
        // console.log(error?.response?.data?.message);
        Toast.fail(error?.response?.data?.message || "服务端错误");
      }
    },
    async sendSmsCode() {
      try {
        // 通过传入表单name值，决定校验那个表单
        await this.$refs.form.validate("mobile");
      } catch (error) {
        console.log(error);
        return;
      }
      try {
        // 合适的时机 ，禁用发送验证码按钮
        this.isStatus = true;
        // 调用获取验证码接口
        await getSmsCode(this.user.mobile);
        // 展示倒计时
        this.isShowCountDown = true;
        // 获取成功之后的提示
        this.$toast.success("发送验证码成功");
      } catch (error) {
        // 如果获取失败，进行错误提示
        // console.log(error);
        this.$toast.fail(error.response.data.message || "出错了");
        // 不让倒计时展示
        this.isShowCountDown = false;
      } finally {
        // 不管成功还是失败都会执行的逻辑
        this.isStatus = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  /deep/.toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
}
</style>
