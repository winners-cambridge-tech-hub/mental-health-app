<template>
    <div class="home">
  
  <SideBar/>
  <MyMain/>
</div>
</template>
<script>
import MyMain from './MyMain.vue';
import SideBar from './SideBar.vue';

export default {
    name: "MyHome",
    data(){
      return { 
        name: "",
        restaurant: [],
      }
       
    },
    
    components: {
      MyMain,
      SideBar
    },
    
}
</script>
<style>

</style>