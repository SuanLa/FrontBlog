<script setup>
import axios from "axios";

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required:true
  }
});

const emits = defineEmits(['response']);

const axios1 = function putMessage(){
  axios.get('/blog/getMessage?id='+props.href)
      .then(function (response) {
        emits('response',response.data.data);
      })
      .catch(function (error){
        emits('response',"请重试！！");
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
