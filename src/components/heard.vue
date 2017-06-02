<template>
    <div class="appHeard">
        <div class="app-heard">
            <img src="../assets/img/logo.png" class="logotop">
            <img src="../assets/img/exit.png" class="exitlogo">
            <div class="personbox">
                <el-popover ref="popover1" placement="bottom" width="200" trigger="hover">
                  <el-menu  class="el-menu-demo"  style="text-align: center;">
                      <el-menu-item index="2-1"><el-button type="text" @click="dialogVisible = true">企业信息</el-button></el-menu-item>
                      <el-menu-item index="2-2"><el-button type="text" @click="dialogFormVisible = true">修改密码</el-button></el-menu-item>
                      <el-menu-item index="2-3"><el-button type="text" @click="dialogVisible2 = true">更换头像</el-button></el-menu-item>
                  </el-menu>
                </el-popover>
                <el-button v-popover:popover1 style="padding:0;border:none"><img src="" class="personlogo"></el-button>
                <span style="margin-left:10px">某某某</span>
            </div>
            <img src="../assets/img/banshou.png" class="exitlogo">




            <el-dialog title="查看企业资料" v-model="dialogVisible" size="tiny">
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
              </span>
            </el-dialog>
            <el-dialog title="修改密码" v-model="dialogFormVisible" size="tiny">
              <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="新密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
            <el-dialog title="更换头像" v-model="dialogVisible2" size="tiny">
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible2 = false">保 存</el-button>
              </span>
            </el-dialog>

        </div>
    </div>
</template>
<script>
export default {
  name: 'appHeard',
  data () {
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };


    return {
      dialogVisible: false,
      dialogFormVisible: false,
      dialogVisible2: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        ruleForm2: {
          pass: '',
          checkPass: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
          
        }
    }
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
      activeIndex2(){

      },
      handleSelect(){
        
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
.app-heard{width:100%;height:80px;background:#232322;color:#fff;position:absolute;top:0;left:0;}
.exitlogo{float:right;display:inline-block;width:40px;height:40px;margin:21px 30px 0 30px}
.personbox{float:right;font-weight:bold;margin-top:20px;}
.personlogo{width:42px;height:42px;background:#f1f1f1;vertical-align:middle;}
.logotop{float:left;margin-left:70px}
</style>