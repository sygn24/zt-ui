<template>
	<div>
		<h2>Progress进度条</h2>
		<div class="row">
			<h3>鼠标经过时显示tooltip，总是显示小球按钮</h3>
			<zt-progress v-model="progress" @onChange="changeProgress"></zt-progress>
			<div>进度百分比：{{ progress }}%</div>
		</div>
		<div class="row">
			<h3>显示格式化tooltip，鼠标经过时显示小球按钮</h3>
			<zt-progress
				v-model="progress2"
				@onChange="changeProgress2"
				:is-format-tooltip="true"
				:format-tooltip="formatTooltip"
				:showRadiusBtn="false"
			></zt-progress>
			<div>进度百分比：{{ progress2 }}%</div>
		</div>
		<div class="row">
			<h3>自定义颜色和大小,隐藏tooltip</h3>
			<zt-progress
				v-model="progress3"
				@onChange="changeProgress3"
				:showToolTip="false"
				:progressColor="['var(--warning)', 'var(--success  )']"
				progressBgColor="#666"
				:progressSize="12"
			></zt-progress>
			<div>进度百分比：{{ progress3 }}%</div>
		</div>
		<div class="row">
			<h3>关闭动画效果</h3>
			<zt-progress
				v-model="progress4"
				@onChange="changeProgress4"
				:showRadiusBtn="false"
				:progressSize="8"
				:isActiveBar="false"
				progressColor="var(--success  )"
			></zt-progress>
			<div>进度百分比：{{ progress4 }}%</div>
		</div>
		<div class="row">
			<h3>禁用状态</h3>
			<zt-progress v-model="progress5" progressColor="var(--success  )" disabled></zt-progress>
			<div>进度百分比：{{ progress5 }}%</div>
		</div>
		<div class="row">
			<h3>垂直模式，可以给固定高度，不给高度以父盒子高度为准</h3>
			<div class="v">
				<zt-progress
					v-model="progress6"
					:showRadiusBtn="false"
					:progressSize="10"
					progressColor="var(--warning)"
					vertical
					:is-format-tooltip="true"
					:format-tooltip="formatTooltip"
					height="150px"
				></zt-progress>
				<div>进度百分比：{{ progress6 }}%</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Progress",

	data() {
		return {
			progress: 30,
			progress2: 40,
			progress3: 50,
			progress4: 60,
			progress5: 70,
			progress6: 70,
		};
	},
	methods: {
		changeProgress(len) {},
		changeProgress2(len) {},
		changeProgress3(len) {},
		changeProgress4(len) {},
		formatTooltip(len) {
			return len * 10;
		},
	},
};
</script>

<style lang="less" scoped>
.row {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	margin: 20px 0;
	h3 {
		padding: 10px 0;
	}
	.v {
		height: 200px;
	}
}
</style>
