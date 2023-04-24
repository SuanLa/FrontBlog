<script setup>
//文本
const text = defineProps({text:String})
</script>

<template>
    <!--md显示-->
  <v-md-preview id="md" :text="text.text" ref="preview"></v-md-preview>
    <!--目录-->
  <!--<div class="btn-group" id="chapter">
      <button class="btn bg-dark text-white btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          章节选择
      </button>
      <ul id="lists" class="dropdown-menu dropdown-menu-dark">
          <li class="dropdown-item" v-for="anchor in titles"
              @click="handleAnchorClick(anchor)"/>
      </ul>
  </div>-->
  <span id="thanks" class="border border-5 display-6">技术支持：阿伟</span>
</template>

<style scoped>
  #md {
    width: 100%;
  }

  #thanks {
    position: absolute;
    left: 30%;
  }

  #chapter {
      top: 300px;
      z-index: 100;
      height: 50px;
      width: 100px;
      position: fixed;
      right: 100px;
  }

  #lists {
      transition: all 0.5s ease-in;
  }
</style>