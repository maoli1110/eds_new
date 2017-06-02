<template>
 <div>
    企业概况
    <content-bar :bars="toBars">
    
    </content-bar>
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
                        name: '材料',
                        link: '/content/qiye/qiye1'
                    },
                    {
                        name: '设备',
                        link: '/content/qiye/qiye2'
                    },
                    {
                        name: '人工',
                        link: '/content/qiye/qiye3'
                    },
                    {
                        name: '机械',
                        link: '/content/qiye/qiye1'
                    },
                    {
                        name: '周转材料',
                        link: '/content/qiye/qiye2'
                    },
                    {
                        name: '专业分包',
                        link: '/content/qiye/qiye3'
                    },
                    {
                        name: '轻工分包',
                        link: '/content/qiye/qiye3'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>