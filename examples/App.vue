<template>
	<div id="app">
		<header>ZtjUI测试</header>
		<main>
			<leftNav />
			<div class="rightContent">
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>
<script>
import leftNav from "./leftNav.vue";
export default {
	components: {
		leftNav,
	},
};
</script>

<style lang="scss">
header {
	height: 80px;
	width: 100%;
	line-height: 80px;
	border-bottom: 2px solid #eee;
	font-size: 36px;
	font-weight: 700;
	padding-left: 30px;
}
main {
	height: calc(100vh - 80px);
	display: flex;
	.rightContent {
		flex: 1;
		overflow: auto;
		padding: 30px 50px;
	}
}
</style>
