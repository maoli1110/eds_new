<template>
 <div>
    <content-bar :bars="toBars"></content-bar>
    <!-- <main-cont></main-cont> -->
    <router-view></router-view>
 </div>
</template>

<script>
    import contentBar from '../../components/contentBar'
    export default {
        components: {
            contentBar
        },
        data () {
            return {
                toBars: [
                    {
                        name: '企业概况',
                        link: '/content/qiye/survey'
                    },
                    {
                        name: '组织结构',
                        link: '/content/qiye/organization'
                    },
                    {
                        name: '空间使用',
                        link: '/content/qiye/space'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>