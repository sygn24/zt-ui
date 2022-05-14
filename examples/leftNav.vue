<template>
	<aside class="leftNav">
		<router-link :to="item.path" v-for="(item, index) in list" :key="index">
			<div @click="handleClick(item)" :class="[currentPath == item.path ? 'action' : '']">
				{{ item.name }}
			</div>
		</router-link>
	</aside>
</template>
<script>
export default {
	name: "LeftNav",
	data() {
		return {
			list: [
				{ name: "button按钮", path: "/button" },
				{ name: "Progress进度条", path: "/progress" },
				{ name: "message消息提示", path: "/message" },
				{ name: "tooltip文字提示", path: "/tooltip" },
				{ name: "radio单选框", path: "/radio" },
				{ name: "checkbox复选框", path: "/checkbox" },
				{ name: "alert警告", path: "/alert" },
				{ name: "modal对话框", path: "/model" },
				{ name: "notice通知提醒", path: "/notice" },
				{ name: "poptip气泡提示", path: "/poptip" },
				{ name: "circle进度环", path: "/circle" },
				{ name: "swiper轮播图", path: "/swiper" },
				{ name: "tag标签", path: "/tag" },
				{ name: "avatar头像", path: "/avatar" },
				{ name: "menu导航栏", path: "/menu" },
				{ name: "loading加载", path: "/loading" },
				{ name: "scroll滚动", path: "/scroll" },
				{ name: "list列表", path: "/list" },
				{ name: "table表格", path: "/table" },
			],
			currentPath: "",
		};
	},
	methods: {
		handleClick(item) {
			this.currentPath = item.path;
		},
	},
	watch: {
		$route(to) {
			this.currentPath = to.path;
		},
	},
};
</script>
<style scoped>
.leftNav {
	width: 240px;
	height: calc(100vh - 80px);
	border-right: 1px solid #eee;
	font-size: 17px;
	cursor: pointer;
	font-weight: bolder;
	overflow: auto;
}

.leftNav div {
	height: 40px;
	line-height: 40px;
	padding: 0px 10px;
}
a {
	text-decoration: none;
	color: var(--text-bold);
}
.action {
	color: var(--primary);
}
</style>
