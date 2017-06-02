<template>
	<div class="mainContSpa">
		<div class="main-Cont1">
			<div class="innerCont" >
				<div id="breadBox"></div>
				<div class="sbreadBox">
					<div class="spaceDec"></div>
					<div style="text-align:center;font-weight:bold;">空间使用情况</div>
					<div id="spaceUse"></div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
    import echarts from 'echarts/dist/echarts.min.js'
	export default {
        data () {
            return {
                charts1: '',
                opinion:['第一分公司','第二分公司','第三分公司','第四分公司','第五分公司','第六分公司','第七分公司','第八分公司','第九分公司'],
                opinionData:[{value:335, name:'第一分公司'},{value:305, name:'第二分公司'},{value:120, name:'第三分公司'},{value:140, name:'第四分公司'},{value:10, name:'第五分公司'},{value:80, name:'第六分公司'},{value:100, name:'第七分公司'},{value:240, name:'第八分公司'},{value:335, name:'第九分公司'}],
                opinionData1:[{value:30,name:'已用'},{value:70,name:'可用'}]
            }
        },
        methods:{
            drawPie3(id){
               this.charts1 = echarts.init(document.getElementById(id))
               this.charts1.setOption({
                    title : {
			        text: '空间使用情况',
			        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: this.opinion
				    },
				    series : [
				        {
				            name: '空间使用情况',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:this.opinionData,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
               })
            },
            drawPie4(id){
               this.charts1 = echarts.init(document.getElementById(id))
               this.charts1.setOption({
                    title : {
			        text: '空间使用情况',
			        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    series : [
				        {
				            name: '空间使用情况',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:this.opinionData1,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
               })
            }
        },
	      //调用
	        mounted(){
	            this.$nextTick(function($event) {
	            	console.log($event)
	                this.drawPie3('breadBox')
	                this.drawPie4('spaceUse')
	            })
	        }
    
}
</script>


<style>
.mainContSpa{position:fixed;top:0;left:0px;height:100%;z-index:-2;width:100%;background:#E4E4E4;overflow:auto}
.main-Cont1{margin:80px 10px 30px 370px;padding-top:10px}
.innerCont{border-radius:5px;box-shadow: 1px 3px 3px #ccc;margin:0 0 0 10px;background:#fff;height:800px;position:relative;}
canvas{background: #fff;}
#breadBox{width:800px;margin-left:400px;height:700px;padding-top:20px;}
.sbreadBox{position:absolute;width:300px;left:0;top:0;height:800px;}
.spaceDec{width:200px;height:220px;box-shadow: 1px 1px 10px #ccc;border-radius:5px;margin:100px 0 30px 50px}
#spaceUse{width:260px;height:200px;margin:100px 0 0 20px}
</style>