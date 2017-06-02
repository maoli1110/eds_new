<template>
  <ul>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  	<li class="addPerimg"></li>
  </ul>
</template>

<style scoped>
	.addPerimg{width:130px;border:0.5px solid #ccc;height:213px;float:left;border-left:none}
	ul{border-left:0.5px solid #ccc;height:213px;margin-left:20px;margin-bottom:20px}
</style>

<script>
  export default {
  	name:'iaddPer',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
