<script setup>
  import LoginBox from '../components/LoginBox.vue';
</script>

<template>
  <div id="login">
    <LoginBox/>
  </div>
</template>

<style scoped lang="scss">
  #login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('../assets/image/壁纸4.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>