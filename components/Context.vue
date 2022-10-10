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
            <div class="page_left_menu">

            </div>

            <div class="index_left page_left geam_l">
                <div class="title">微博热搜</div>
                <div class="geam_left_webNew">
                    <slot name="webNew"></slot>
                </div>
            </div>
            <div class="index_right page_right geam_r">
                <div class="game_list">
                    <div class="title">IT 资讯</div>
                    <div class="geam_left_webNew">
                        <slot name="webJS"></slot>
                    </div>
                </div>
            </div>


            <div class="page_right_menu">
                <Nav></Nav>
            </div>
        </div>
        <div class="page_bot">

        </div>
        <div class="footer">

        </div>
        <div class="footer_right">
            <Footer></Footer>
        </div>

    </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
    name: "Context",
    components: { Nav, Footer }
}
</script>