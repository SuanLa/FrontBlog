<script setup>
import {ref} from "vue";
import Navigation from "@/components/Navigation.vue";
import MarkDown from "@/components/MarkDown.vue";

const background = ref("black");
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark" id="list-nav" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Link
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Link</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <aside>
    <div class="row">
        <div class="list-group" id="list-tab" role="tablist">
          <Navigation msg="操作系统" href="operating-system"/>
          <Navigation msg="数据结构与算法" href="data-structure"/>
          <Navigation msg="计算机网络" href="computer-network"/>
          <Navigation msg="计算机组成原理" href="lu-cheng-tao"/>
          <Navigation href="linux" msg="Linux操作系统"/>
          <Navigation href="Design-pattern" msg="设计模式"/>
        </div>
    </div>
  </aside>
  <main>
    <div class="row">
      <div class="col-9">
        <MarkDown markdown="t"></MarkDown>
      </div>
      <div class="btn-group col-3" id="chapter">
        <button class="btn bg-dark text-white btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          章节选择
        </button>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li class="dropdown-item">1</li>
          <li class="dropdown-item">2</li>
          <li class="dropdown-item">3</li>
        </ul>
      </div>
    </div>
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

#chapter {
  top: 300px;
  z-index: 100;
  height: 50px;
  width: 100px;
  position: fixed;
  right: 140px;
}

header {
  height: 100px;
}

main {
  position: absolute;
  left: 200px;
}
</style>
