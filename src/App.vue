<script setup>
import { useRouter, useRoute } from 'vue-router'
import LoginForm from './components/LoginForm.vue'
import Rgister from './components/Rgister.vue'
const router = useRouter()
router.push('./login')
</script>

<template>
  <router-view></router-view>
</template>

<style >

@keyframes show {
  from{
    transform: translateY(25px);
    opacity: 0;
  }
  to{
    transform: translateY(1px);
    opacity: 1;
  }

}

.login{
  animation: show 1s;
}


</style>