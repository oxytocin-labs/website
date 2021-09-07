import Vue from "vue";
import VueRouter from "vue-router";

import About from "../views/About.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: { transition: "slideleft" },
	},
	{
		path: "/about",
		name: "About",
		component: About,
		meta: { transition: "slideright" },
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
