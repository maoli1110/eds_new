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
                        name: '自动套',
                        item:[
                            {
                                iname:'自动套模板',
                                ilink: '/content/qiye/wuzhi',
                            }
                        ]
                    },
                    {
                        name: '企业定额',
                        item:[
                            {
                                iname:'定额库',
                                ilink: '/content/qiye/wuzhi',
                            },
                            {
                                iname:'清单库',
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