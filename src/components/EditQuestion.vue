<script setup>
  import { ArrowDown } from '@element-plus/icons-vue'
  import { ref,defineProps } from 'vue'

  const props = defineProps(['isShow']);

  let group = [
    ['分类1',['预设问题1']],
    ['分类2',['预设问题1']],
    ['分类3',['预设问题1']],
    ['分类4',['预设问题1']],
    ['分类5',['预设问题1']]
  ];

  let activeIndex = ref(0);

  let activeClass = (index) => {
    if(index == 0) {
      return ['active']
    }
  }

  let input = ref('');

  let handleClick = (index) => {
    activeIndex = index;
  }
</script>

<template>
  <div class="mask" v-show="props.isShow"></div>
  <div class="editBox editBox-content" v-show="props.isShow">
    <header>预设问题编辑</header>
    <ul class="nav-bar">
      <li v-for="(item,index) in group" :key="index" class="nav-item" :class="activeClass(index)" @click="handleClick(index)">{{ item[0] }}<el-icon v-show="activeIndex == index"><ArrowDown/></el-icon></li>
    </ul>
    <main>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
      <div class="qestion">预设问题1:<el-input v-model="input" class="input"/></div>
    </main>
    <footer>
      <button class="btn" @click="$emit('handleClose')">确定</button>
      <button class="btn cancel" @click="$emit('handleClose')">取消</button>
    </footer>
  </div>
</template>

<style scoped lang="scss">
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .3);
  }

  .editBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 745px;
    height: 680px;
    z-index: 1000;
  }

  .editBox-content {
    background-color: #fff;

    header {
      height: 48px;
      line-height: 48px;
      background-color: #78909C;
      color: #fff;
      text-align: center;
    }

    .nav-bar {
      display: flex;
      justify-content: space-around;
      color: #b3b3b3;
      width: 90%;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 8px 0;
      cursor: pointer;
    }

    .active {
      color: red;
    }

    main {
      width: 666px;
      margin-left: 4px;
      padding-top: 46px;
      padding-left: 22px;
      padding-bottom: 46px;
      border: 1px solid rgb(187,187,187);
    }

    .qestion {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .input {
      width: 528px;
    }

    footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 3px;
    }

    .btn {
      width: 86px;
      line-height: 16px;
      font-size: 12px;
      color: #fff;
      background-color: #78909C;
      padding: 8px 10px;
      border: none;
      cursor: pointer;
    }

    .cancel {
      color: #78909C;
      background-color: #fff;
      border: 1px solid #78909C;
      margin-left: 12px;
      margin-right: 24px;
    }
  }
</style>