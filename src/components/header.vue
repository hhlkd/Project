<script setup>

import Button from 'primevue/button';
import 'primeicons/primeicons.css'
</script>
<template>
   <header>
      <div class="logo">
         <img src="../assets/primevue-logo-200.webp" alt="">
         <p>Prime<span>Vue</span></p>

      </div>
   <div class="icon">
      
      <i class="pi pi-user"></i>
      <i class="pi pi-shopping-cart"></i>

   </div>
   </header>

</template>
<style scoped>
header{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   background-color: rgb(255, 255, 255);
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
   position: fixed;
   top: 0;
   width: 100%;
   z-index: 10;
}

.logo{
   display: flex;
   align-items: center;
}

.logo img{
   width: 70px;
   height: 70px;
}

.logo p{
   margin-left: 10px;
   font-size: 20px;
   font-weight: bold;
   color: #000;
   font-family: sans-serif;
   text-transform: uppercase;
}
.logo span{
   margin-left: 10px;
   font-size: 20px;
   font-weight: bold;
   color: #109f55;
   font-family: sans-serif;
   text-transform: uppercase;
}


</style>