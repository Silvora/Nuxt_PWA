<template>
    <div>
        <div class="bg_top">
            <div class="header_bg">
                <div class="header">
                    <!-- <a href="index.html" class="logo" title="云朵工厂-原创设计品牌"></a>
                    <a href="#/en/" title="English" class="lan en"></a>
                    <a href="#" title="中文版" class="lan cn" style="background-position:left top;"></a> -->
                </div>
            </div>
        </div>
        <div class="page_box page_box_bg">
            <div class="home_menu">
                <NuxtLink to="/"></NuxtLink>
            </div>

            <div class="index_left page_left job_l">
            </div>
            <div class="index_right page_right job_r">
                <div class="index_right_text">
                    <slot></slot>
                </div>
            </div>


            <div class="page_right_menu">
                <Nav></Nav>
            </div>
        </div>
        <div class="page_bot"></div>
        <div class="footer">

            <div class="footer_right">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
    name: "ContextRight",
    components: { Nav, Footer }
}
</script>