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
	{
		path: "/timeline",
		name: "Timeline",
		component: () => import("../views/Timeline.vue"),
	},
	{
		path: "/modal",
		name: "Modal",
		component: () => import("../views/Modal.vue"),
	},
	{
		path: "/confirm",
		name: "Confirm",
		component: () => import("../views/Confirm.vue"),
	},
	{
		path: "/loading",
		name: "Loading",
		component: () => import("../views/Loading.vue"),
	},
	{
		path: "/tabs",
		name: "Tabs",
		component: () => import("../views/Tabs.vue"),
	},
	{
		path: "/rate",
		name: "Rate",
		component: () => import("../views/Rate.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
