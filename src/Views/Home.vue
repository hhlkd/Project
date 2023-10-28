<script setup>
import AppHeader from "@/components/header.vue"
import AppFooter from "@/components/footer.vue"
import sidebar from "@/components/sidebar.vue"
import AppMain from "@/components/main.vue"

</script>
<template>
<div class="container">
    <div class="header">
        <AppHeader/>
    </div>
    <div class="container-fluid">
        <div class="aside">
            <sidebar/>
        </div>
       <div class="content">
        <AppMain/>
       </div>
    </div>


    <div class="footer">
        <AppFooter/>
    </div>
</div>

</template>
<style scoped>

.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
}
.header{
    width: 100%;
    height: 100px;
}
.content{
    width: 1200px;
    padding: 10px;
    height: 100%;
    background-color: rgb(30, 200, 155);
}
.container-fluid{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
.aside{
    width: 300px;
    height: 100%;
    background-color: red;
}
.footer{
    flex: 0 0 100px;
    background-color: rgb(0, 0, 0);
}
</style>