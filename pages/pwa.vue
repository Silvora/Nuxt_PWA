<template>
    <ContextRight>
        <p class="title">关于 PWA</p>
        <p class="t_text">
            PWA 它不是特指某一项技术，而是应用多项技术来改善用户体验的 Web App，其核心技术包括 Web App Manifest，Service Worker，Web Push
            等，用户体验才是 PWA 的核心。

        </p>
        <p class="title">PWA 是什么？</p>
        <p class="t_text">PWA 全称为 Progressive Web App，中文译为渐进式 Web APP。PWA本质上是 Web 应用，使用现代 API
            构建和增强，以提供增强的功能、可靠性和可安装性，同时只需一个代码库就可以借助任何设备触及任何用户、任何地方，实现与原生 App 相近的用户体验。</p>

        <p class="t_text">一个 PWA 首先是一个网页, 可以通过 Web 技术编写出一个网页应用，随后添加上 App Manifest 实现添加至设备主屏幕， 通过 Service Worker
            来实现离线缓存和消息推送等功能。</p>


        <p class="title">特性</p>
        <ol class="ol_li">
            <li>渐进式 - 适用于所有浏览器，因为它是以渐进式增强作为宗旨开发的</li>
            <li>连接无关性 - 能够借助 Service Worker 在离线或者网络较差的情况下正常访问</li>
            <li>类原生应用 - 由于是在 App Shell 模型基础上开发，因此应具有 Native App 的交互，给用户 Native App 的体验</li>
            <li>持续更新 - 始终是最新的，无版本和更新问题</li>
            <li>安全 - 通过 HTTPS 协议提供服务，防止窥探，确保内容不被篡改</li>
            <li>可索引 - manifest 文件和 Service Worker 可以让搜索引擎索引到，从而将其识别为『应用』</li>
            <li>黏性 - 通过推送离线通知等，可以让用户回流</li>
            <li>可安装 - 用户可以添加常用的 Web App 到桌面，免去到应用商店下载的麻烦</li>
            <li>可链接 - 通过链接即可分享内容，无需下载安装</li>
        </ol>
        <p class="title">文档</p>
        <p><a href="https://zhuanlan.zhihu.com/p/34657974" target="_blank">示例文档 PWA</a></p>
    </ContextRight>
</template>

<script>
import ContextRight from '../components/ContextRight.vue';
export default {
    name: "PwaPage",
    components: { ContextRight }
}
</script>