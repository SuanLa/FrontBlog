<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
const background = ref("black");

</script>

<template>
  <div class="main">
  <header>
    <img alt="star logo" class="logo" src="./assets/img.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Welcome zeroonestar!" />
      <HelloWorld msg="操作系统"/>
      <HelloWorld msg="数据结构与算法"/>
      <HelloWorld msg="计算机网络"/>
      <HelloWorld msg="计算机组成原理"/>
    </div>
  </header>
  <main>
    test
  </main>
  <aside>

  </aside>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.main{
  background-color: red;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>
