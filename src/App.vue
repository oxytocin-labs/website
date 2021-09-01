<template>
	<div id="app">
		<div id="nav"></div>
		<router-view />
	</div>
</template>

<style>
body {
	height: 500%;
	margin: 0px;
	width: 100%;
}

html {
	background-color: #f9f7f7;
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
}
</style>
