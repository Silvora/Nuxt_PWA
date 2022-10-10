<template>
    <client-only>
        <Context>
            <template #webNew>
                <table width="100%" cellpadding="0" cellspacing="0" class="yx">
                    <thead>
                        <tr class="tit">
                            <td>排行</td>
                            <td>标题</td>
                            <td align="right">热度值</td>
                        </tr>
                    </thead>
                    <tr v-for="(item,idx) in newList" :key="item.num">
                        <td>{{idx+1}}</td>
                        <td>{{item.note}}</td>
                        <td align="right">{{item.raw_hot}}</td>
                    </tr>
                </table>
            </template>
            <template #webJS>
                <table width="100%" cellpadding="0" cellspacing="0" class="yx">
                    <thead>
                        <tr class="tit">
                            <td>序号</td>
                            <td>标题</td>
                            <td align="right">点赞数</td>
                        </tr>
                    </thead>
                    <tr v-for="(item,idx) in webList" :key="item.id">
                        <td>{{idx+1}}</td>
                        <td>{{item.title.slice(0,15) + "..."}}</td>
                        <td align="right">{{item.real_views}}</td>
                    </tr>
                </table>
            </template>
        </Context>
    </client-only>
</template>

<script>
import Context from '../components/Context.vue';
export default {
    name: "OtherPage",
    components: { Context },
    // mounted() {
    //     console.log(this.$store.state)
    // },
    async asyncData({ $axios }) {
        const res = await $axios.get(`https://weibo.com/ajax/statuses/hot_band`)
        //console.log(res.data.data.band_list)
        let newList = res.data.data.band_list
        //let newList = []
        const data = await $axios.get(`https://segmentfault.com/gateway/articles?query=recommendation&offset=0&size=30&mode=scrollLoad`)

        let webList = data.data.rows
        //let webList = []
        return {
            newList,
            webList
        }
    }

}
</script>