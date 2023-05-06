<script setup>
import { Avatar, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let account = ref('');
let pwd = ref('');
let memoryPwd = ref(false);
let router = useRouter();

let handleLogin = () => {
  router.push('/main');
}
</script>

<template>
  <div id="login-box" class="login-content">
    <div class="logo-box logo-content">LOGO</div>
    <el-input v-model="account" placeholder="请输入账号" :prefix-icon="Avatar" class="input" />
    <el-input v-model="pwd" placeholder="请输入密码" :prefix-icon="Lock" class="input" />
    <div class="checkout-box">
      <el-checkbox v-model="memoryPwd" label="记住密码" size="large" class="label"/>
    </div>
    <el-button color="rgba(58, 98, 215, 1)" class="btn" @click="handleLogin">登&nbsp;&nbsp;录</el-button>
    <div class="bottom">
      <div class="bottom-btn">注册帐号</div>
      <div class="line">|</div>
      <div class="bottom-btn">忘记密码</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#login-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 490px;
  height: 440px;
  border-radius: 3px;
  padding: 50px 0;
}

.login-content {
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  font-family: Roboto;

  .logo-box {
    width: 75px;
    height: 75px;
    line-height: 75px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  .logo-content {
    background-color: rgba(58, 98, 215, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    text-align: center;
  }

  .input {
    width: 340px;
    height: 45px;
  }

  .checkout-box {
    width: 340px;

    .label {
      font-weight: 600;
    }
  }

  .btn {
    width: 340px;
    height: 45px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 50px;
    line-height: 50px;

    .bottom-btn {
      font-size: 14px;
      color: rgba(58, 98, 215, 1);
      font-weight: 600;
    }

    .line {
      color: #bbb;
    }
  }
}
</style>