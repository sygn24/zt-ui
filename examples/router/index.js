import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		redirect: "/button",
	},
	{
		path: "/button",
		name: "Button",
		component: () => import("../views/Button.vue"),
	},
	{
		path: "/progress",
		name: "Progress",
		component: () => import("../views/Progress.vue"),
	},
	{
		path: "/message",
		name: "Message",
		component: () => import("../views/Message.vue"),
	},
	{
		path: "/tooltip",
		name: "Tooltip",
		component: () => import("../views/Tooltip.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
