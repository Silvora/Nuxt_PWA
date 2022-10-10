<template>
  <div>
    <div class="bg_top">
      <div class="header_bg">
        <div class="header">
          <!-- <a href="#/en/" title="English" class="lan en"></a>
          <a href="#" title="中文版" class="lan cn" style="background-position:left top;"></a> -->
        </div>
      </div>
    </div>
    <div class="page_box" style="height:646px;">
      <div class="index_left"></div>
      <div class="index_right">
        <a href="#"><img src="../assets/img/cloud_05.jpg" alt="说明书||此网站相关介绍" /></a>
      </div>
      <div class="index_menu">
        <Nav></Nav>
      </div>
    </div>
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
import Nav from '../components/Nav.vue';
export default {
  name: "IndexPage",
  components: { Nav }
}
</script>

<!-- <style>
@import url("../assets/style.css");
</style> -->
