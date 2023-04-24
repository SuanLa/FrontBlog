<script setup>
import {onMounted, ref} from "vue";
import Navigation from "@/components/Navigation.vue";
import MarkDown from "@/components/MarkDown.vue";
import axios from "axios";

const list = ref();

const background = ref();

onMounted(() => {
  axios.get('/blog/getList').then(
      function (response){
          list.value = response.data.data
      }
  ).catch(function (){
      alert("获取列表失败！")
  });
  axios.get('/blog/getMessage?id=123456')
      .then(function (response) {
        background.value = response.data.data;
      })
      .catch(function (error){
        alert("出错了！")
      })
})

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark" id="list-nav" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand">妙妙屋</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">主页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://space.bilibili.com/1653229811">01星球</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                待开发功能
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">功能一</a></li>
                <li><a class="dropdown-item" href="#">功能二</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">功能三</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="输入搜索内容" aria-label="Search" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          </form>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">寻找一些东西</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control" placeholder="search" aria-label="search">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">查询</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <aside>
    <div class="row">
        <div class="list-group" id="list-tab" role="tablist">
            <Navigation v-for="item in list" :href = "item.number" :msg="item.name" @response="(msg) => background = msg"/>
        </div>
    </div>
  </aside>
  <main>
      <MarkDown :text="background"></MarkDown>
  </main>
</template>

<style scoped>

#list-tab {
  top: 200px;
  z-index: 100;
  height: 300px;
  width: 180px;
  position: fixed;
  left: 20px;
}

header {
  height: 100px;
}

main {
  position: absolute;
  left: 200px;
}
</style>
