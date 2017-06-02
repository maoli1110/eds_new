<template>
 <div>
    <content-bar :data="data"></content-bar>
    <main-ContPer></main-ContPer>
 </div>
</template>

<script>
    import contentBar from '../../components/contentBart'
    import mainContPer from './quanxian/permissions'
    export default {
        components: {
            contentBar,
            mainContPer
        },
         data() {
          return {
            data: [
                    {
                      label: '中国公路工程咨询有限公司',
                      nodeKey:'main',
                      children: [{
                        label: '海南分公司',
                        children: [{
                          label: '海口分公司',
                          children: [{
                            label: '铺前大桥项目'
                          },{
                            label: '铺前小桥项目'
                          },{
                            label: '阿里巴巴大厦项目'
                          }]
                        },{
                          label: '文昌分公司',
                          children: [{
                            label: '某宾馆项目'
                          },{
                            label: '某住宅项目'
                          },{
                            label: '某商业中心项目'
                          }]
                        }]
                      }, {
                        label: '上海分公司',
                        children: [{
                          label: '三级 2-2-1'
                        }]
                      }, {
                        label: '北京分公司',
                        children: [{
                          label: '三级 2-2-1'
                        }]
                      }, {
                        label: '广州分公司',
                        children: [{
                          label: '三级 2-2-1'
                        }]
                      }, {
                        label: '重庆分公司',
                        children: [{
                          label: '三级 2-2-1'
                        }]
                      }]
                    }, 
            ],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleNodeClick(data) {
            console.log(data);
          }
        }
    }
</script>

<style scoped>
</style>