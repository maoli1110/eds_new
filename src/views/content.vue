<template>
    <div>
         <side-bar></side-bar>
         <app-heard></app-heard>
         <router-view></router-view>
    </div>
</template>

<script>
    import sideBar from '../components/sidebar';
    import appHeard from '../components/heard.vue';
    export default {
        components: {
            sideBar,
            appHeard
        },
        data () {
            return {
                
            }
        }
    }
</script>

<style>
html,body{margin:0;padding:0;}
html{height:100%;}
ul {list-style-type: none;padding: 0;margin:0;}
li {display:block;}
a {text-decoration:none;color:#353535}
</style>