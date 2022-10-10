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
                <!-- <ul>
                    <li class="menu1"><a href="brief.html" title="工厂概况——云朵工厂简介"></a></li>
                    <li class="menu2"><a href="copyright.html" title="版权声明——云朵工厂版权声明"></a></li>
                    <li class="menu3"><a href="team.html" title="工程师们——云朵工厂团队介绍"></a></li>
                </ul> -->
            </div>
            <div class="index_left page_left about_l">
                <div class="about_text">
                    <slot></slot>
                </div>
            </div>
            <div class="index_right page_right about_r"> </div>
            <div class="page_right_menu">
                <Nav></Nav>
            </div>
        </div>
        <div class="page_bot"></div>
        <div class="footer">
            <div class="footer_left">
                <!-- <a href="http://www.weibo.com/cloudfactory" title="云朵工厂官方微博" target="_blank"
                    class="sina"></a><a href="http://cloudfactory.taobao.com/" target="_blank" class="taobao"
                    title="云朵工厂官方店铺"></a><a href="http://site.douban.com/126699/" title="云朵工厂豆瓣主页" target="_blank"
                    class="douban"></a>
                <div class="link">
                    <a class="contact" href="contact.html" target="_blank" title="联系我们"></a>
                    <a class="linker" href="linker.html" target="_blank" title="云朵工厂友情链接"></a> 
                </div>-->
            </div>
            <div class="footer_right">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue';
export default {
    name: "ContextLeft",
    components: { Nav }
}
</script>