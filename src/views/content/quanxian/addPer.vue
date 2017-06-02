<template>
  <div class="addPerbox">
  <div>用户基本信息</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="归属" prop="">
        <el-input v-model="value"></el-input>
      </el-form-item>
        <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="">
        <el-input v-model="value"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="">
        <el-input v-model="value"></el-input>
      </el-form-item>
      <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]"
        >
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item
      </el-form-item>
      <el-form-item label="活动名称" prop="">
        <el-input v-model="value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <div>功能节点授权</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="房建" name="first">
        <el-tabs v-model="activeName1" @tab-click="handleClick">
          <el-tab-pane label="系统客户端" name="ifirst1"><iadd-Per></iadd-Per></el-tab-pane>
          <el-tab-pane label="算量云功能" name="isecond1">算量云功能</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="市政" name="second">
        <el-tabs v-model="activeName2" @tab-click="handleClick">
          <el-tab-pane label="系统客户端" name="ifirst2">系统客户端</el-tab-pane>
          <el-tab-pane label="算量云功能" name="isecond2">算量云功能</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="精装" name="third">
        <el-tabs v-model="activeName3" @tab-click="handleClick">
          <el-tab-pane label="算量云功能" name="ifirst3">算量云功能</el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <div class="impowerBox"><span class="span1">工程及工作集授权：</span>
      <span>默认为该用户授予创建其账号时所选中节点及该节点下所有子节点的项目部、工程、工作集，可修改</span>
      <el-button>授权</el-button>
    </div>
    <div class="impowerBox"><span class="span1">MC组织结构授权：</span>
      <span>默认不授权任何组织结构，点击按钮可进行授权</span>
      <el-button>授权</el-button>
    </div>
    <div class="impowerBox"><span class="span1">Luban Explorer可见级别：</span>
      <span><el-input v-model="input" placeholder="请输入内容"></el-input></span>
      <el-button>授权</el-button><el-checkbox v-model="checked1">全部工程</el-checkbox>
    </div>
    <div class="impowerBox"><span class="span1">iBan可上传工程：</span>
      <span><el-input v-model="input" placeholder="请输入内容"></el-input></span>
      <el-button>授权</el-button><el-checkbox v-model="checked2">全部工程</el-checkbox>
    </div>
    <div class="impowerBox"><span class="span1">原BW：</span>
      <span><el-input v-model="input" placeholder="请输入内容"></el-input></span>
      <el-button>授权</el-button>
    </div>
    <div class="impowerBox"><span class="span1">视频监控：</span>
      <span> 
        <el-radio class="radio" v-model="radio" label="1">查看和编辑</el-radio>
        <el-radio class="radio" v-model="radio" label="2">预览</el-radio>
        <el-input v-model="input" placeholder="请输入内容" style="width:330px;margin-left:20px"></el-input>
      </span>
      <el-button>授权</el-button><el-checkbox v-model="checked3">全部工程</el-checkbox>
    </div>
    <div class="impowerBox" style="text-align:center;margin:20px 0">
      <el-button type="primary">确定</el-button>
      <el-button>取消</el-button>
    </div>
    
  </div>

</template>

<style scoped>
.addPerbox{width:100%;height:100%;background:#fff;position:absolute;top:0;left:0;z-index:5;overflow-y:auto;}
.el-form-item{width:400px;display:inline-block;margin-left:50px}
.impowerBox{font-size:14px;font-weight:bold;padding-left:20px;margin:5px 0;}
.impowerBox span{color:#FF9900;width:650px;display:inline-block;}
.impowerBox .span1{width:180px;color:#353535 }
.impowerBox button span{color:#353535;width:auto}
.impowerBox button{margin-left:20px;width:80px}
.el-checkbox{margin-left:20px}
.el-input{width:80%;}
</style>

<script>
import iaddPer from './iaddPer'
   export default {
    name:'addPer',
    components: {
            iaddPer
        },
     data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        input: '',
        checked1:'',
        checked2:'',
        checked3:'',
        radio: '1',
        activeName: 'first',
        activeName1: 'ifirst1',
        activeName2: 'ifirst2',
        activeName3: 'ifirst3',
        options: [{
          value: '01',
          label: '项目经理'
        }, {
          value: '02',
          label: '产品经理'
        }, {
          value: '03',
          label: '技术主管'
        }, {
          value: '04',
          label: '商务经理'
        }, {
          value: '05',
          label: '生产经理'
        }],
        value: '',
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          email: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
