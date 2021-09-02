<template>
  <div id="app">
	<HelloWorld />
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },


}
</script>
<style>
body {
	height: 100%;
	margin: 0px;
	width: 100%;
}

html {
	background-color: #21242b;
	height: 100%;
	/* max-width: 1440px; */
	margin: 0px auto;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	padding: 0px 150px;
}
</style>
