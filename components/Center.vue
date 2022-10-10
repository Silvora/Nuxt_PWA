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
            <div class="home_menu"><a href="index.html"></a></div>
            <div class="broadcast">
                <!-- <ul>
                    <li class="menu1_blog"><a class="on" href="t.html" title="团队博客"></a></li>
                    <li class="menu2_news"><a href="blog/" title="新鲜事大箩框"></a></li>
                </ul> -->
            </div>
            <div class="t_box">
                <div class="t_box_text">
                    <slot></slot>
                </div>

                <!-- <iframe width="570" height="516" class="share_self" style="margin:60px auto auto 130px;" frameborder="0"
                    scrolling="no"
                    src="http://widget.weibo.com/weiboshow/index.php?language=&width=570&height=516&fansRow=1&ptype=1&speed=0&skin=5&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=1936920514&verifier=b9041467&dpc=1"></iframe> -->
            </div>
            <div class="page_right_menu">
                <Nav></Nav>
            </div>
        </div>
        <div class="page_bot"></div>
        <div class="footer">
            <div class="footer_left">
            </div>
            <div class="footer_right">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import Footer from './Footer.vue';
import Nav from './Nav.vue';
export default {
    name: "Center",
    components: { Footer, Nav }
}
</script>