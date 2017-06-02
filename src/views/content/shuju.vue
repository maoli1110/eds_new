<template>
 <div>
    <content-bar :bars="toBars"></content-bar>
 </div>
</template>

<script>
    import contentBar from '../../components/contentBarn'

    export default {
        components: {
            contentBar
        },
        data () {
            return {
                toBars: [
                    {
                        name: '企业编码库',
                        item:[
                            {
                                iname:'组织编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'部门编码',
                                ilink: '/content/shuju/zuzhi2',
                            },
                            {
                                iname:'岗位编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'人员编码',
                                ilink: '/content/shuju/zuzhi2',
                            },
                            {
                                iname:'专业类别编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'项目编码',
                                ilink: '/content/shuju/zuzhi2',
                            },
                            {
                                iname:'客户编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'供应商编码',
                                ilink: '/content/shuju/zuzhi2',
                            },
                            {
                                iname:'金融机构/银行账户编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'融资类型编码',
                                ilink: '/content/shuju/zuzhi2',
                            },
                            {
                                iname:'区域编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'业务类别编码',
                                ilink: '/content/shuju/zuzhi2',
                            },
                            {
                                iname:'资产编码',
                                ilink: '/content/shuju/zuzhi1',
                            },
                            {
                                iname:'合同编码',
                                ilink: '/content/shuju/zuzhi2',
                            }
                        ]
                    },
                    {
                        name: '材料库',
                        item:[
                            {
                                iname:'物资编码',
                                ilink: '/content/shuju/wuzhi',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>