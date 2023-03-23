<script setup>
import {ref} from "vue";
import Navigation from "@/components/Navigation.vue";
import MarkDown from "@/components/MarkDown.vue";

const background = ref(`
# 测试
        开始预览组件的使用

        这就意味着我们在设置元素的 width/height 时，

        元素真实展示的高度与宽度会更大(因为元素的边框与内边距也会计算在 width/height 中)。

        这个是个较小的框 (width 为 300px ，height 为 100px)。

        这个是个较大的框 (width 为 300px ，height 为 100px)。

        以上两个 元素虽然宽度与高度设置一样，但真实展示的大小不一致，因为 div2 指定了内边距:

        CSS3 box-sizing 属性在一个元素的 width 和 height 中包含 padding(内边距) 和 border(边框)。

        如果在元素上设置了 box-sizing: border-box; 则 padding(内边距) 和 border(边框) 也包含在 width 和 height 中:

        两个 div 现在是一样大小的!

        本文内容由阿里云实名注册用户自发贡献，版权归原作者所有，阿里云开发者社区不拥有其著作权，

        亦不承担相应法律责任。具体规则请查看《阿里云开发者社区用户服务协议》和《阿里云开发者社区知识产权保护指引》。

        如果您发现本社区中有涉嫌抄袭的内容，填写侵权投诉表单进行举报，一经查实，本社区将立刻删除涉嫌侵权内容。

        面的例子headstemp记录了解析过程中的所有标题，作用是借助UI库的组件Anchor，构建一个标题导航。

        下面演示一个基于ant-design-vue的版本，如果你使用的UI库是类似的锚点组件，那么代码将只需要小改动即可。

        代码使用jsx语法，vue模板语法请自行分离代码~

        Recursive.tsx 导航中的链接组件
* 看
* 写
* 运行`);
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark" id="list-nav" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand">Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://space.bilibili.com/1653229811">01星球</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                其余功能
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">功能一</a></li>
                <li><a class="dropdown-item" href="#">功能二</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">功能三</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Deep Dark Fantasy</a>
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
      <div class="col-10">
        <MarkDown :text="background"></MarkDown>
      </div>

      <div class="btn-group col-2" id="chapter">
        <button class="btn bg-dark text-white btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          章节选择
        </button>
        <ul id="lists" class="dropdown-menu dropdown-menu-dark">
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
  right: 100px;
}

#lists {
  transition: all 0.5s ease-in;
}

header {
  height: 100px;
}

main {
  position: absolute;
  left: 200px;
}
</style>
