<script setup>
import Button from 'primevue/button';
import { ref } from 'vue';
import 'primeicons/primeicons.css'

const name = ref ('Click');
const handleClick = () =>{
    name.value = 'I love you';
}
</script>
<template>
<div class="footer">
    <div class="box1">
        <Button :label="name" 
        @click="handleClick()" 
        rounded="40px"
        icon="pi pi-star-fill">
            
        </Button>
        
    </div>
    <div class="box1">
        <h1>footer</h1>
        
    </div>
    <div class="box1">
        <h1>footer</h1>
        
    </div>
</div>
</template>
<style scoped>
   :deep(.p-button){
    border-radius: 40px;
    border: 1px solid rgb(222, 212, 23);
    background-color: rgb(220, 22, 196);
    color: rgb(255, 255, 255);
   }

.footer{
    width: 100%;
    height: 100px;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.box1{
    width:  600px;
}
</style>