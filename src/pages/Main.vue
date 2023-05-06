<script setup>
import { ArrowDown, BellFilled, Menu, Promotion } from '@element-plus/icons-vue'
import { computed, reactive, ref } from 'vue'
import EditQuestion from '../components/EditQuestion.vue'

let listData = reactive([
  {
    title: '产品设计',
    children: [],
    id: 1
  },
  {
    title: '技术研发',
    children: [
      {
        title: 'Java',
        id: 1
      },
      {
        title: 'HTML',
        id: 2
      },
      {
        title: 'Python',
        id: 3
      },
      {
        title: 'Mango',
        id: 4
      }
    ],
    id: 2
  },
  {
    title: '测试验收',
    children: [],
    id: 3
  }
]);
let activeIndex = ref(-1);
let activeList = computed(() => {
  if (activeIndex.value >= 0) {
    return listData[activeIndex.value].children;
  }
});
let hiddenClass = reactive(['hidden']);
let inputContent = ref('');
let qestionList = reactive(['常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1', '常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1常用问题1']);
let isEdit = ref(false);



let hanleClickItemTitle = (index) => {
  activeIndex.value = index;
  hiddenClass.pop();
}

let handleClickSideTitle = () => {
  if (!hiddenClass.includes('hidden')) {
    hiddenClass.push('hidden');
  }
}

let handleClick = () => {
  isEdit.value = true;
}

let handleClose = () => {
  isEdit.value = false;
}
</script>

<template>
  <header data-color-theme="main" data-flex-main='between'>
    <div class="left-part" data-flex-main='between'>
      <h1 class="title">RDR</h1>
      <div class="line">|</div>
      <div class="ai" data-flex-main='between'>
        <div>AI工作平台</div>
        <el-icon>
          <ArrowDown />
        </el-icon>
      </div>
    </div>
    <div class="right-part" data-flex-main='between'>
      <div class="component-select" data-flex-main='between'>
        <div>模块名称</div>
        <el-icon>
          <ArrowDown />
        </el-icon>
      </div>
      <el-icon class="bell">
        <BellFilled />
      </el-icon>
      <div class="menu-box" data-flex-main='between'>
        <div>Name</div>
        <el-icon>
          <Menu />
        </el-icon>
      </div>
    </div>
  </header>
  <main class="main-content">
    <div class="left-side left-side-content">
      <div class="side-title side-title-content" @click="handleClickSideTitle">角色选择</div>
      <ul>
        <li v-for="(item, index) in listData" :key="item.id" class="list-item list-item-content"
          @click="hanleClickItemTitle(index)">{{ item.title }}</li>
      </ul>
      <div class="left-side side-child-content" :class="hiddenClass">
        <div class="side-title side-title-content">专业选择</div>
        <ul>
          <li v-for="(item) in activeList" :key="item.id" class="list-item list-item-content active-color"> {{ item.title
          }} </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <h2>RDR 问题预设</h2>
      <ul class="question-list">
        <li v-for="(item, index) in qestionList" :key="index" class="question-item question-item-content">{{ item }}</li>
      </ul>
      <el-input v-model="inputContent" class="question-input m-2" placeholder="请输入内容" :suffix-icon="Promotion" />
    </div>
    <el-menu background-color="#fff" text-color="#000">
      <el-sub-menu index="1">
        <template #title>
          <span>问题预设</span>
        </template>
        <el-menu-item index="1-1" @click="handleClick">预设问题自定义</el-menu-item>
        <el-menu-item index="1-2">提问记录管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span>常用网站</span>
        </template>
        <el-menu-item index="2-1">常用链接管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <span>常用工具</span>
        </template>
        <el-menu-item index="3-1">语言翻译</el-menu-item>
        <el-menu-item index="3-2">语言切换</el-menu-item>
        <el-menu-item index="3-3">常用工具编辑</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <EditQuestion :is-show="isEdit" @handle-close="handleClose"/>
  </main>
</template>

<style scoped lang="scss">
:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  position: static;
  margin-top: 0;
  margin-right: 20px;
}

:deep(.el-sub-menu__title) {
  flex-direction: row-reverse;
  background-color: rgb(247,247,247) !important;
}

:deep(.el-menu-item) {
  padding: 0;
}

header {
  padding: 15px 34px;

  .left-part {
    width: 200px;
    align-items: center;

    .title {
      font-size: 18px;
    }

    .ai {
      width: 106px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .right-part {
    align-items: center;
    width: 190px;

    .component-select {
      width: 85px;

      &:hover {
        cursor: pointer;
      }
    }

    .bell:hover {
      cursor: pointer;
    }

    .menu-box {
      align-items: center;
      width: 52px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .line {
    color: #bbb;
  }
}

main {
  height: 95%;
}

.main-content {
  position: relative;
  display: flex;
  background-color: #efefef;

  .left-side {
    box-sizing: border-box;
    width: 244px;
    height: 100%;
  }

  .left-side-content {
    position: relative;
    background-color: #fff;
    border: 1px solid #bbb;

    .side-title {
      height: 50px;
      line-height: 50px;
      padding-left: 28px;
    }

    .side-title-content {
      color: #888;
      font-size: 18px;
      border-bottom: 1px solid #bbb;
    }

    .side-child-content {
      position: absolute;
      top: -1px;
      left: 181px;
      background-color: #fff;
      border: 1px solid #bbb;
    }

    .list-item {
      height: 50px;
      line-height: 50px;
      padding: 0 30px;
    }

    .list-item-content {
      text-align: center;
      color: #010101;

      &:hover {
        cursor: pointer;
      }
    }

    .active-color {
      color: #607D8B;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;

    h2 {
      margin-top: 130px;
      margin-bottom: 90px;
      font-size: 36px;
      font-weight: 500;
    }

    .question-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 754px;
    }

    .question-item {
      width: 200px;
      height: 80px;
      line-height: 20px;
      border-radius: 14px;
      padding: 13px 16px;
      margin-bottom: 20px;
    }

    .question-item-content {
      background-color: rgba(255, 255, 255, 1);
      color: rgba(16, 16, 16, 1);
      font-size: 14px;
      text-align: center;
      border: 1px solid rgba(187, 187, 187, 1);
    }

    .question-input {
      width: 766px;
      height: 50px;
      margin-top: 86px;
    }
  }
}

.hidden {
  display: none;
}
</style>