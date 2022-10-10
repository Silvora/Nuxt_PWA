<template>
    <ContextLeft>
        <h1>说明书</h1>
        <p>此网站由 Nuxt + PWA 编写而成。</p>
    </ContextLeft>
    <!-- <p>dsdsadasd</p> -->
    <!-- <NuxtLayout name='ContextLeft'>
        <template #text>
            <p>sdadasda</p>
        </template>
    </NuxtLayout> -->
</template>
  
<script>
import ContextLeft from '../components/ContextLeft.vue';
//import ContextLeft from "../layouts/ContextLeft.vue"
export default {
    name: "AboutPage",
    layout: false,
    components: { ContextLeft }
}
</script>

<!-- <style>
@import url("../assets/style.css");
</style> -->
  