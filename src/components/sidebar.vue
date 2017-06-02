<template>
    <nav>
        <div style="height:80px"></div>
        <router-link :to="i.link" v-for="i in links" :key="i">
            <img :src="i.img">
            <span v-text="i.name"></span>
        </router-link>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                links: [
                    {
                        img: require('../assets/img/index.png'),
                        name: '企业33概况',
                        link: '/content/qiye'
                    },
                    {
                        img: require('../assets/img/shuju.png'),
                        name: '主数据库',
                        link: '/content/shuju'
                    },
                    {
                        img: require('../assets/img/tree.png'),
                        name: '权限管理',
                        link: '/content/quanxian'
                    },
                    {
                        img: require('../assets/img/BIM.png'),
                        name: 'BIM库',
                        link: '/content/bim'
                    },
                    {
                        img: require('../assets/img/goujian.png'),
                        name: '构件库',
                        link: '/content/goujian'
                    },
                    {
                        img: require('../assets/img/gongcheng.png'),
                        name: '定额库',
                        link: '/content/dinge'
                    },
                    {
                        img: require('../assets/img/price.png'),
                        name: '价格库',
                        link: '/content/jiage'
                    },
                    {
                        img: require('../assets/img/zhibiao.png'),
                        name: '指标库',
                        link: '/content/zhibiao'
                    },
                    {
                        img: require('../assets/img/shezhi.png'),
                        name: '应用配置',
                        link: '/content/shezhi'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    nav{height:100%;top:0;position:absolute;width:80px;background:#535353;height:100%;font-size:14px;overflow-y:auto;z-index:-1;overflow-x:hidden;}
    nav a{width:80px;float:left;color:#fff;text-align:center;padding:10px 0}
    img{width:34px;height:34px;display:block;margin:5px auto;}
    .router-link-active{background:#000;border-bottom:2px solid #FFD33D}
</style>