<template>
	<div id="app">
		<HelloWorld />
		<transition :name="transitionName" mode="out-in">
			<keep-alive>
				<router-view keepalive></router-view>
			</keep-alive>
		</transition>
	</div>
</template>
<script>
// import data from "./assets/data.json";
import HelloWorld from "./components/HelloWorld.vue";
export default {
	components: { HelloWorld },
	data() {
		return {
			transitionName: "appear",
		};
	},

	watch: {
		"$route.meta"() {
			this.transitionName = this.$route.meta.transition;
		},
	},
	// mounted() {
	// 	console.log(data);
	// },
};
</script>
<style>
body {
	height: 100%;
	margin: 0px;
	width: 100%;
}

html {
	background-color: #21242b;
	max-width: 1440px;
	width: 100vw;
	height: max-content;
	margin: 0px auto;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #2c3e50;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
}

.appear-enter-active,
.appear-leave-active {
	transition: 300ms all;
}

.appear-enter,
.appear-leave-to {
	opacity: 0;
}

/* home */
.slideleft-enter-active,
.slideleft-leave-active {
	transition: 300ms all;
}

.slideleft-enter {
	transform: translateX(-50%);
	opacity: 0;
}
.slideleft-leave-to {
	transform: translateX(50%);
	opacity: 0;
}

/* about */
.slideright-enter-active,
.slideright-leave-active {
	transition: 300ms all;
}

.slideright-enter {
	transform: translateX(50%);
	opacity: 0;
}
.slideright-leave-to {
	transform: translateX(-50%);
	opacity: 0;
}
</style>
