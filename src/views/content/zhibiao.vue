<template>
 <div>
    企业概况
    <content-bar :bars="toBars">
    
    </content-bar>
 </div>
</template>

<script>
    import contentBar from '../../components/contentBari'

    export default {
        components: {
            contentBar
        },
        data () {
            return {
                toBars: [
                    {
                        name: '未审核指标',
                        item:[
                            {
                                iname:'土建指标（50）',
                                ilink: '/content/qiye/wuzhi',
                            },
                            {
                                iname:'钢筋指标（80）',
                                ilink: '/content/qiye/wuzhi',
                            }
                        ]
                    },
                    {
                        name: '已通过指标',
                        item:[
                            {
                                iname:'土建指标（40）',
                                ilink: '/content/qiye/wuzhi',
                            },
                            {
                                iname:'钢筋指标（68）',
                                ilink: '/content/qiye/wuzhi',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
</style>