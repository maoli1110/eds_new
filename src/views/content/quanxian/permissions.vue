<template>
	<div class="mainContPer">
		<div class="main-Cont2">
			<div class="innerCont">
				<el-tabs v-model="activeName1"  @tab-click="handleClick">
				    <el-tab-pane label="软件应用" name="first1">
				    	<el-tabs v-model="activeName2" @tab-click="handleClick">
						    <el-tab-pane label="人员管理" name="first2">
						    	<div class='chooseBox'>
						    		<el-button @click="addPersonnel">添加人员</el-button>
						    		<el-button>批量添加</el-button>
						    		<el-button>删除人员</el-button>
						    	</div>
						    	<add-Per v-if="seen"></add-Per>
						    	<el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
						    		<el-table-column type="selection" width="55"></el-table-column>
						    		<el-table-column prop="num" label="序号" width="70"></el-table-column>
						    		<el-table-column prop="name" label="姓名" width="120"></el-table-column>
						    		<el-table-column prop="role" label="角色" width="120"></el-table-column>
						    		<el-table-column prop="telephone" label="电话" width="130"></el-table-column>
						    		<el-table-column prop="email" label="邮箱" width="180" ></el-table-column>
							      	<el-table-column prop="date" label="更新时间" width="120"></el-table-column>
							      	<el-table-column prop="remark" label="备注"></el-table-column>
							      	<el-table-column fixed="right" label="操作" width="140">
								      	<template scope="scope">
								        	<el-button @click="handleClick" type="text" size="small">查看</el-button>
								        	<el-button type="text" size="small">编辑</el-button>
								        	<el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small">移除</el-button>
								      	</template>
								    </el-table-column>
							    </el-table>
							     <div class="block" style="margin-top:30px;float:right">
								    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
								      :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper":total="400">
								    </el-pagination>
								  </div>
						    </el-tab-pane>
						    <el-tab-pane label="角色管理" name="second2">
						    	<div class='chooseBox'>
						    		<el-button>添加角色</el-button>
						    		<el-button>删除角色</el-button>
						    	</div>
						    </el-tab-pane>
						    <el-tab-pane label="账号分配" name="third2">
						    	<el-tabs v-model="activeName3" @tab-click="handleClick">
								    <el-tab-pane label="房建" name="first3"><tab-Cont></tab-Cont></el-tab-pane>
								    <el-tab-pane label="市政" name="second3"><tab-Cont></tab-Cont></el-tab-pane>
								    <el-tab-pane label="装配式" name="third3"><tab-Cont></tab-Cont></el-tab-pane>
								    <el-tab-pane label="精装" name="fourth3"><tab-Cont></tab-Cont></el-tab-pane>
								    <el-tab-pane label="CIM" name="five3"><tab-Cont></tab-Cont></el-tab-pane>
								    <el-tab-pane label="鲁班通" name="six3"><tab-Cont></tab-Cont></el-tab-pane>
								</el-tabs>
						    </el-tab-pane>
						</el-tabs>
				    </el-tab-pane>
				    <el-tab-pane label="系统管理" name="second1">
				    	<el-tabs v-model="activeName4" @tab-click="handleClick">
						    <el-tab-pane label="管理员列表" name="first4">
						    	<div class='chooseBox'>
						    		<el-button>添加账号</el-button>
						    		<el-button>删除</el-button>
						    	</div>
						    </el-tab-pane>
						    <el-tab-pane label="管理权限分配" name="second4">
						    	<div class='chooseBox'>
						    		<el-button>添加</el-button>
						    		<el-button>删除</el-button>
						    	</div>
						    </el-tab-pane>
						</el-tabs>
				    </el-tab-pane>
				  </el-tabs>
			</div>
		</div>
	</div>
</template>
<style scoped>
.mainContPer{position:fixed;top:0;left:0px;height:100%;z-index:-2;width:100%;background:#E4E4E4;overflow:auto}
.main-Cont2{margin:80px 10px 30px 370px;padding-top:10px}
.chooseBox{height:50px;padding:0 10px;}
</style>
<script>
    import tabCont from './account'
    import addPer from './addPer'
	export default {
		components: {
            tabCont,
            addPer
        },
	    data() {
	      return {
	      	seen:false,
	      	activeName4: 'first4',
	      	activeName3: 'first3',
	        activeName2: 'first2',
	        activeName1: 'first1',
	         currentPage4: 4,
	        tableData: [{
	        	num: '1',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '15120124584',
	            email: '151520@163.com',
	            role: '经理',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '2',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '3',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '4',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '2',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '3',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '4',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '2',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '3',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }, {
	          	num: '4',
	            date: '2016-05-02',
	            name: '王小虎',
	            telephone: '1',
	            email: '2016-05-02',
	            role: '王小虎',
	            remark: '备注备注备注备注信息'
	          }]
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	        this.seen=false;
	      },
	      handleSelectionChange(val) {
	        this.multipleSelection = val;
	      },
	      handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	      },
	      handleCurrentChange(val) {
	        this.currentPage = val;
	        console.log(`当前页: ${val}`);
	      },addPersonnel(){
	      	this.seen=true;
	      }
	    }
	  };
</script>

