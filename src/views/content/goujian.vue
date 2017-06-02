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
                        name: '鲁班安装',
                        link: '/content/qiye/qiye1'
                    },
                    {
                        name: '鲁班钢筋',
                        link: '/content/qiye/qiye2'
                    },
                    {
                        name: 'Remiz',
                        link: '/content/qiye/qiye3'
                    },
                    {
                        name: 'Revit',
                        link: '/content/qiye/qiye3'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
</style>