<template>
    <ContextRight>
        <p class="title">关于 Service Worker</p>
        <p class="t_text">
            Service worker 本质上充当Web应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。

        </p>
        <p class="title">Service Worker 是什么？</p>
        <p class="t_text">Service Worker是一项比较新的Web技术，是Chromium团队在吸收了ChromePackaged App的Event Page机制，同时吸取了HTML5
            AppCache标准失败的教训之后，提出一套新的W3C规范，旨在提高WebApp的离线缓存能力，缩小WebApp与NativeApp之间差距。</p>

        <p class="t_text">Service Worker从英文翻译过来就是一个服务工人，服务于前端页面的后台线程，基于Web
            Worker实现。有着独立的js运行环境，分担、协助前端页面完成前端开发者分配的需要在后台悄悄执行的任务。基于它可以实现拦截和处理网络请求、消息推送、静默更新、事件同步等服务。</p>


        <p class="title">Service Worker 优势及典型应用场景</p>
        <ol class="ol_li">
            <li>离线缓存：可以将H5应用中不变化的资源或者很少变化的资源长久的存储在用户端，提升加载速度、降低流量消耗、降低服务器压力。如中重度的H5游戏、框架数据独立的web资讯客户端、web邮件客户端等</li>
            <li>消息推送：激活沉睡的用户，推送即时消息、公告通知，激发更新等。如web资讯客户端、web即时通讯工具、h5游戏等运营产品。

            </li>
            <li>事件同步：确保web端产生的任务即使在用户关闭了web页面也可以顺利完成。如web邮件客户端、web即时通讯工具等。</li>
            <li>定时同步：周期性的触发Service Worker脚本中的定时同步事件，可借助它提前刷新缓存内容。如web资讯客户端。</li>
        </ol>
        <p class="title">文档</p>
        <p><a href="https://www.bbsmax.com/A/QV5ZL7y4zy/" target="_blank">示例文档 Service Worker</a></p>
    </ContextRight>
</template>

<script>
import ContextRight from '../components/ContextRight.vue';
export default {
    name: "WorkerPage",
    components: { ContextRight }
}
</script>