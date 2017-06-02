<template>
    <nav>
        <!-- <div style="height:80px"></div>
        <router-link :to="i.link" v-for="i in bars" :key="i">
            {{i.name}}
        </router-link> -->
        <div style="height:80px"></div>
        <el-menu class="el-menu-vertical-demo" v-for="i in bars" :key="i" router>
          <el-submenu index="1" router>
            <template slot="title">{{i.name}}</template>
              <el-menu-item :index="j.ilink" :id="j.iname" v-for="j in i.item" :key="j" @click="fn">{{j.iname}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
          fn(data) {
            console.log(data.$el.id);
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
nav{width:290px;position:fixed;left:80px;top:0;background:#fff;height:100%;border-left:10px solid #E4E4E4;box-sizing:border-box;overflow:auto;padding-bottom:30px;z-index:-1}
nav a{height:64px;line-height:64px;border-bottom:1px solid #E3E6EC;width:100%;display:block;text-align:center;}
.router-link-active{background:#E3E6EC}
</style>