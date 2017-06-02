<template>
	<div class="mainContSur">
        <div class="main-Cont">
            <div class="tab-title">
                <ul>
                    <li ><a href="javascript:;" :class="{tactive: index==1}" @click="index=1;codeStatus(index)" >全部</a></li>
                    <li ><a href="javascript:;" :class="{tactive: index==2}" @click="index=2;codeStatus(index)">房建</a></li>
                    <li ><a href="javascript:;" :class="{tactive: index==3}" @click="index=3;codeStatus(index)">市政</a></li>
                    <li ><a href="javascript:;" :class="{tactive: index==4}" @click="index=4;codeStatus(index)">精装</a></li>
                </ul>
            </div>
            <div class="tab-contop">
                统计范围：
                <select v-model="conp" @change="selectVal">
                    <option v-for="option in options" v-bind:value="option.value">
                      {{option.text}}
                    </option>
                </select>
                <select v-model="prjs" :class="{prjsC: show==true}" @change="selectVal1">
                    <option v-for="poption in poptions" v-bind:value="poption.value">
                      {{poption.text}}
                    </option>
                </select>
                <div class="tab-conright">
                    <input type="checkbox" style="width:16px;height:16px;vertical-align: middle;display: inline-block;"></input>影响所有统计结果
                </div>
            </div>
            <div class="tab-cont1">
                <div class="tab-contitle tab-contitle1"><span style="margin-left:30px">项目分布图</span></div>
                <div class="tab-contitle tab-contitle2">
                    <ul>
                        <li><a href="javascript:;" :class="{zactive: zindex==5}" @click="zindex=5;codeStatus(zindex)">在建项目</a></li>
                        <li><a href="javascript:;" :class="{zactive: zindex==6}" @click="zindex=6;codeStatus(zindex)">合同</a></li>
                    </ul>
                </div>
                <div class="mapbox">
                    <div class="map" id="addmap"></div>
                    <div class="map" id="pic"></div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
   import echarts from 'echarts/dist/echarts.min.js'
   
   //import china from '../../../api/china.js'
  
	export default {
	  data () {

	    return {
                show:true,
                index:1,
                zindex:5,
                charts: '',
                opinion:['第一分公司','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司'],
                opinionData:[10,20,30,50,40,80,12,20,50],
                conp: '00',
                options: [
                 { text: '全部', value: '00' },
                 { text: '第一分公司', value: '01' },
                 { text: '第二分公司', value: '02' },
                 { text: '第三分公司', value: '03' },
                 { text: '第四分公司', value: '04' }
                ],
                prjs: '000',
                poptions: [
                 { text: '全部', value: '000' },
                 { text: '第一分项目', value: '001' },
                 { text: '第二分项目', value: '002' },
                 { text: '第三分项目', value: '003' },
                 { text: '第四分项目', value: '004' }
                ]

        }
	  },
        methods:{
            selectVal: function(ele) {
                if(ele.target.value=='00'){
                   this.show=true
                }else{
                    this.show=false
                    this.prjs='000'
                }
                this.drawPie('pic')
                this.drawPie1('addmap')
            },
            selectVal1: function(ele) {
                this.drawPie('pic')
                this.drawPie1('addmap')
            },
            codeStatus:function($event){

                // this.$http.get('../../../dataJson/survey.json', [$event]).then(function(response){
                //     console.log(response)
                //     // 响应成功回调
                // }, function(response){
                //     console.log(response)
                //     // 响应错误回调
                // });
                this.$http.get('./static/survey.json')
                                .then(function(response) { //response传参，可以是任何值
                                   console.log(response.body)
                                })
                                .catch(function(response) {
                                    console.log(response)
                                })


                if($event==1){
                        this.opinion=['第一分公司01','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司']
                        this.opinionData=[10,20,30,50,40,80,12,20,50]
                        this.drawPie('pic')
                }else if($event==2){
                        this.opinion=['第一分公司02','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司']
                        this.opinionData=[11,20,80,20,40,10,12,50,10]
                        this.drawPie('pic')
                }else if($event==3){
                        this.opinion=['第一分公司03','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司']
                        this.opinionData=[11,80,30,50,80,10,12,20,50]
                        this.drawPie('pic')
                }else if($event==4){
                        this.opinion=['第一分公司04','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司']
                        this.opinionData=[40,20,30,10,40,40,12,80,50]
                        this.drawPie('pic')
                }else if($event==5){
                        this.opinion=['第一分公司05','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司']
                        this.opinionData=[40,20,30,10,40,40,12,40,50]
                        this.drawPie('pic')
                }else if($event==6){
                        this.opinion=['第一分公司06','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司']
                        this.opinionData=[40,20,30,70,40,40,12,80,50]
                        this.drawPie('pic')
                }
            },
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.opinion,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel :{
                                interval:0 
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'项目',
                            type:'bar',
                            barWidth: '60%',
                            data:this.opinionData
                        }
                    ]
               })
            },
            drawPie1(id){
               
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                    title : {
                        text: 'iphone销量',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        x:'left',
                        data:['iphone3','iphone4','iphone5']
                    },
                    roamController: {
                        show: true,
                        x: 'right',
                        mapTypeControl: {
                            'china': true
                        }
                    },
                    series : [
                        {
                            name: 'iphone3',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '重庆',value: Math.round(Math.random()*1000)},
                                {name: '河北',value: Math.round(Math.random()*1000)},
                                {name: '河南',value: Math.round(Math.random()*1000)},
                                {name: '云南',value: Math.round(Math.random()*1000)},
                                {name: '辽宁',value: Math.round(Math.random()*1000)},
                                {name: '黑龙江',value: Math.round(Math.random()*1000)},
                                {name: '湖南',value: Math.round(Math.random()*1000)},
                                {name: '安徽',value: Math.round(Math.random()*1000)},
                                {name: '山东',value: Math.round(Math.random()*1000)},
                                {name: '新疆',value: Math.round(Math.random()*1000)},
                                {name: '江苏',value: Math.round(Math.random()*1000)},
                                {name: '浙江',value: Math.round(Math.random()*1000)},
                                {name: '江西',value: Math.round(Math.random()*1000)},
                                {name: '湖北',value: Math.round(Math.random()*1000)},
                                {name: '广西',value: Math.round(Math.random()*1000)},
                                {name: '甘肃',value: Math.round(Math.random()*1000)},
                                {name: '山西',value: Math.round(Math.random()*1000)},
                                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                {name: '陕西',value: Math.round(Math.random()*1000)},
                                {name: '吉林',value: Math.round(Math.random()*1000)},
                                {name: '福建',value: Math.round(Math.random()*1000)},
                                {name: '贵州',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '青海',value: Math.round(Math.random()*1000)},
                                {name: '西藏',value: Math.round(Math.random()*1000)},
                                {name: '四川',value: Math.round(Math.random()*1000)},
                                {name: '宁夏',value: Math.round(Math.random()*1000)},
                                {name: '海南',value: Math.round(Math.random()*1000)},
                                {name: '台湾',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        },
                        {
                            name: 'iphone4',
                            type: 'map',
                            mapType: 'china',
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '重庆',value: Math.round(Math.random()*1000)},
                                {name: '河北',value: Math.round(Math.random()*1000)},
                                {name: '安徽',value: Math.round(Math.random()*1000)},
                                {name: '新疆',value: Math.round(Math.random()*1000)},
                                {name: '浙江',value: Math.round(Math.random()*1000)},
                                {name: '江西',value: Math.round(Math.random()*1000)},
                                {name: '山西',value: Math.round(Math.random()*1000)},
                                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                {name: '吉林',value: Math.round(Math.random()*1000)},
                                {name: '福建',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '西藏',value: Math.round(Math.random()*1000)},
                                {name: '四川',value: Math.round(Math.random()*1000)},
                                {name: '宁夏',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        },
                        {
                            name: 'iphone5',
                            type: 'map',
                            mapType: 'china',
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name: '北京',value: Math.round(Math.random()*1000)},
                                {name: '天津',value: Math.round(Math.random()*1000)},
                                {name: '上海',value: Math.round(Math.random()*1000)},
                                {name: '广东',value: Math.round(Math.random()*1000)},
                                {name: '台湾',value: Math.round(Math.random()*1000)},
                                {name: '香港',value: Math.round(Math.random()*1000)},
                                {name: '澳门',value: Math.round(Math.random()*1000)}
                            ]
                        }
                    ]
               })
            },
            fn(el){
                console.log(el)
            }

        },
        created:function(){
                this.$http.get('./static/survey.json')
                                .then(function(response) { //response传参，可以是任何值
                                   console.log(response.body)
                                })
                                .catch(function(response) {
                                    console.log(response)
                                })
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('pic')
                this.drawPie1('addmap')
            })
        }
	}
    
</script>

<style>
.prjsC{display:none}
.mainContSur{position:fixed;top:0;left:0px;height:100%;z-index:-2;width:100%;background:#E4E4E4;overflow:auto}
.main-Cont{margin:80px 10px 30px 370px;}
.tab-title{background:#fff;overflow:auto;height:64px;text-align: center;}
.tab-title ul{height:64px;margin:0;}
.tab-title li{line-height:40px;width:150px;float:left;}
.tab-title li a{display:block;width:130px;margin:12px auto;height:40px;}
.tactive,.zactive{background:#FFD33D;font-weight:bold;}

.tab-contop{padding:10px 5px 10px 30px;text-align:left;font-size:12px;box-shadow:1px 3px 3px #ccc;background:#fff;border-radius:5px;margin:10px 0 0 10px}
.tab-contop select{height:40px;width:160px;margin-left:10px;border-color:#ccc;}
.tab-conright{float:right;line-height:40px;}

.tab-cont1{border-radius:5px;zoom:1;box-shadow:1px 3px 3px #ccc;margin:10px 0 0 10px;background:#fff;overflow:auto;}
.tab-conright{float:right;line-height:40px;}
.tab-contitle{width:50%;float:left;}
.tab-contitle1{line-height:64px;text-align:left;}
.tab-contitle2 ul{height:64px;margin:0;}
.tab-contitle2 li{line-height:40px;width:150px;float:left;}
.tab-contitle2 li a{display:block;width:130px;margin:12px auto;height:40px;text-align:center;}
.mapbox{width:100%;height:630px;float:left;}
.map{width:50%;float:left;background:#ccc;height:100%;}
.clear{clear:both}
</style>