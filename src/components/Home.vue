<template>
 <div class="flex flex-col gap-5 justify-center items-center w-full h-screen bg-fuchsia-400 login">
    <h1 class="w-full text-5xl font-semibold  text-center">UserList</h1>
    <div class="table-responsive">
        <table
            class="table table-primary w-2/3 h-full bg-white ">
            <thead class="border-2 bg-yellow-100 p-2">
                <tr>
                    <th class="border-2 p-3" scope="col">UserName</th>
                    <th class="border-2 p-3" scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center border-2" v-for="(user,index) in users" :key="index" >
                    <td class="border-2 p-2" scope="row">{{user.user}}</td>
                    <td class="border-2 p-2">{{user.pass}}</td>
                </tr>
            </tbody>
        </table>
    </div>
 </div>
  
</template>

<script setup>

import { onMounted,ref } from 'vue';

const users =ref([])
onMounted(()=>{
     if(getUsers()){
         users.value=getUsers()
     }
})

const getUsers = ()=>{
      return JSON.parse(localStorage.getItem('item'))
}

</script>

<style>

</style>
