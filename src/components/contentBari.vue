<template>
    <nav>
        <!-- <div style="height:80px"></div>
        <router-link :to="i.link" v-for="i in bars" :key="i">
            {{i.name}}
        </router-link> -->
        <div style="height:80px"></div>
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
		  <el-menu-item-group :title="i.name" v-for="i in bars" :key="i">
		    <el-menu-item :index="j.ilink" v-for="j in i.item" :key="j">{{j.iname}}</el-menu-item>
		  </el-menu-item-group>
		</el-menu>
    </nav>
</template>

<script>
    export default {
        props: ['bars'],
        data () {
            return {
                
            }
        },
        methods: {
          handleOpen(key, keyPath) {
            //console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            //console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
nav{width:290px;position:fixed;left:80px;top:0;background:#fff;height:100%;border-left:10px solid #E4E4E4;box-sizing:border-box;overflow:auto;padding-bottom:30px;z-index:-1}
nav a{height:64px;line-height:64px;border-bottom:1px solid #E3E6EC;width:100%;display:block;text-align:center;}
.router-link-active{background:#E3E6EC}
.el-menu-item-group__title{text-align: left;font-weight:bold;}
.el-menu-item{text-align:center;}
</style>