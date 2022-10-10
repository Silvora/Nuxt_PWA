<template>
    <ul>
        <li class="menu_1">
            <NuxtLink to="/about" title="相关说明" :class="urlActive == 'about'?'on':''"></NuxtLink>
        </li>
        <li class="menu_2">
            <NuxtLink to="/nuxt" title="Nuxt介绍" :class="urlActive == 'nuxt'?'on':''"></NuxtLink>
        </li>
        <!--      <li class="menu_3"><a href="blog/" title="团队博客"></a></li>-->
        <li class="menu_5">
            <NuxtLink to="/pwa" title="PWA介绍" :class="urlActive == 'pwa'?'on':''"></NuxtLink>
        </li>
        <li class="menu_6">
            <NuxtLink to="/worker" title="Service Worker" :class="urlActive == 'worker'?'on':''"></NuxtLink>
        </li>
        <li class="menu_4">
            <a href="/other" title="其它" :class="urlActive == 'other'?'on':''"></a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            urlActive: ""
        }
    },

    mounted() {
        this.urlActive = this.$store.state.urlActive
    }

}
</script>