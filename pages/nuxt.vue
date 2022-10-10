<template>
    <Center>
        <p class="title">关于 Nuxt.js</p>
        <p class="t_text">2016 年 10 月 25 日，zeit.co 背后的团队对外发布了 Next.js，一个 React 的服务端渲染应用框架。几小时后，与 Next.js 异曲同工，一个基于
            Vue.js
            的服务端渲染应用框架应运而生，我们称之为：Nuxt.js。</p>
        <p class="title">Nuxt.js 是什么？</p>
        <p class="t_text">Nuxt.js 是一个基于 Vue.js 的通用应用框架。</p>

        <p class="t_text">通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI 渲染。</p>
        <p class="t_text">我们的目标是创建一个灵活的应用框架，你可以基于它初始化新项目的基础结构代码，或者在已有 Node.js 项目中使用 Nuxt.js。</p>
        <p class="t_text">
            Nuxt.js 预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置。</p>
        <p class="t_text"> 除此之外，我们还提供了一种命令叫：nuxt generate ，为基于 Vue.js 的应用提供生成对应的静态站点的功能。</p>
        <p class="t_text">我们相信这个命令所提供的功能，是向开发集成各种微服务（Microservices）的 Web 应用迈开的新一步。</p>


        <p class="t_text">作为框架，Nuxt.js 为 客户端/服务端 这种典型的应用架构模式提供了许多有用的特性，例如异步数据加载、中间件支持、布局支持等。</p>
        <p class="title">特性</p>
        <ol class="ol_li">
            <li>基于 Vue.js</li>
            <li>自动代码分层</li>
            <li>服务端渲染</li>
            <li>强大的路由功能，支持异步数据</li>
            <li>静态文件服务</li>
            <li>ES2015+ 语法支持</li>
            <li>打包和压缩 JS 和 CSS</li>
            <li>HTML 头部标签管理</li>
            <li>本地开发支持热加载</li>
            <li>集成 ESLint</li>
            <li>支持各种样式预处理器： SASS、LESS、 Stylus 等等</li>
            <li>支持 HTTP/2 推送</li>
        </ol>
        <p class="title">文档</p>
        <p><a href="https://www.nuxtjs.cn/" target="_blank">官方文档 Nuxt.js</a></p>
    </Center>
</template>

<script>
import Center from '../components/Center.vue';
export default {
    name: "NuxtPage",
    components: { Center }
}
</script>

<style>
.title {
    font-size: 20px;
}

.title::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 18px;
    margin-right: 5px;
    background-color: red;

}

.t_text {
    text-indent: 1.5em;
}

/* ol.ol_li {
    list-style-type: inherit;
} */

/* .ol_li li {
    counter-increment: myIndex;
} */
.ol_li li::before {
    content: "●";
    margin-right: 3px;
}
</style>