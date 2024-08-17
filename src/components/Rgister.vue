<template>
  <main class="w-full  bg-fuchsia-400  h-full  ">
        <div class="container relative flex  ">
            <div class="flex items-center justify-center w-full my-36      font-serif font-semibold ">
                <form  method="post"  :action="{name:login}" @submit.prevent="save" class="border-2 login flex flex-col  lg:w-2/5 md:w-full sm:w-full  bg-white drop-shadow-2xl   lg:p-24 sm:p-16   gap-8 w-1/2 rounded-3xl backdrop-blur-lg  bg-opacity-65  ">
                    <div>
                        <h1 class="text-5xl  font-serif font-bold text-center border-b-2 pb-2 mb-2 border-black">Rgister</h1>
                        <!-- <h2 class=" font-serif font-extrabold ">wellcome Back we wating ...</h2> -->
                    </div>
                    <div class="flex flex-col gap-1 relative ">
                        <label  for="Username" class="">Username :</label>
                        <input class= "rounded-lg  indent-3  h-10 hover:drop-shadow-lg   focus:outline-emerald-300 outline-none duration-100 " type="text" v-model.lazy="Username">
                        <small class="text-red-600 " v-show="Erorr.ErorrUser">this filed most not empty</small>
                    </div>
                    <div class="flex flex-col gap-1 relative ">
                        <label  for="Username" class="">PhoneNumber :</label>
                        <input class= "rounded-lg  indent-3  h-10 hover:drop-shadow-lg   focus:outline-emerald-300 outline-none duration-100 " type="number"  v-model.lazy="PhoneNumber">
                    </div>
                    <div class="flex flex-col gap-1 relative">
                        <label for="Password">Password :</label>
                        <input class="rounded-lg indent-3 h-10 hover:drop-shadow-lg   focus:outline-emerald-300 outline-none duration-100e" :type="isFocus ? 'password' : 'text'"  v-model.lazy="Password">
                        <span  @click="Change" :class="isFocus ? 'fas fa-eye' : 'fas fa-eye-slash'"  class="absolute bottom-3 right-3 cursor-pointer "></span>
                      </div>
                      <small class="text-red-500" v-if="Erorr.ErorrPassword">Password most be max 8 charchter</small>
                    <router-link :to="{name:'login'}" class="underline hover:text-blue-500 ">Do you have account ?</router-link>   
                    <button   class="px-5 py-4 text-white hover:text-blue-500 hover:drop-shadow-lg hover:bg-white duration-700    bg-violet-800 rounded-lg" type="sumbit">login</button>
                    <small class="text-red-600  text-center drop-shadow-xl" v-show="Erorr.Erorr">User is already exits</small>
                </form>
            </div>
        </div>
  </main>
</template>

<script setup>
import {useRouter} from  'vue-router'
import {ref, computed,onMounted, reactive} from 'vue'
const Router =useRouter()
let PhoneNumber = ref(null)
let Username = ref(null)
let Password = ref(null)

let isFocus = ref(true)

const users= ref([]);
let Erorr = reactive({
    ErorrUser : false,
    ErorrPassword: false,
    Erorr:false  
})

onMounted(()=>{
    let res = getUsers()
    if(res){
        console.log( res[0].user || ' null');
        users.value = getUsers()
    }
})  


let Change = computed(()=> {
    isFocus.value = !isFocus.value
    console.log(isFocus.value);
})





const save = computed(()=>{
  if(formValid()){
    if(getUsers()){
       let res = getUsers().find((item)=>{
         if( item.user === Username.value){
            return true
         }
       })
       if(!res){
        addUser(users.value,Password.value,Username.value)
        Erorr.Erorr =false
        Router.push({name :'home'})
       }else{
        Erorr.Erorr = true
       }

    }else{
        addUser(users.value,Password.value,Username.value)

    }

  }
  Username.value =''
  Password.value =''
  PhoneNumber.value =''
})




const formValid = ()=>{
  if(Username.value === null || Username.value === ''){
    console.log('usernmae is empty');
    Erorr.ErorrUser = true
   
  }
  else{
    console.log(Username.value);
    Erorr.ErorrUser=false
  }


  if(Password.value.length<8 || Password.value === null || Password.value === ''){
    console.log('unter 8');
    Erorr.ErorrPassword=true
  }else{
    Erorr.ErorrPassword=false
  }
  if( Erorr.ErorrPassword === false && Erorr.ErorrUser === false){
         return true
    }
}






const addUser = (arry,pass,user)=>{
    let  item ={
         user:user,
         pass:pass
      }
    arry.push(item)
    localStorage.setItem('item',JSON.stringify(arry))
}


const getUsers = ()=>{
     return  JSON.parse(localStorage.getItem('item'))
}





</script>

<style>

</style>
