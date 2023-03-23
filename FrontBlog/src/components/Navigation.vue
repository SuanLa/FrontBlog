<script setup>
import axios from "axios";

const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required:true
  }
})

const axios1 = function (){
  axios.get('/getMessage?'+props.href)
      .then(function (response) {
        response.data
        alert("成功！")
      })
      .catch(function (error){
        alert("出错了！")
      })
}


</script>

<template>
    <a @click="axios1" id="btu" class="list-group-item list-group-item-action text-info-emphasis bg-dark" :href="href" data-bs-toggle="list" role="tab">{{ msg }}</a>
</template>

<style scoped>
  #btu {
    transition: font-size,width 1s;
    transition-duration: 1s;
  }

  #btu:hover {
    font-size: 120%;
    width: 110%;
  }
</style>
