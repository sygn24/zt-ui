<template>
	<div>
		<div class="row">
			<h3>不同类型</h3>
			<zt-button>默认按钮</zt-button>
			<zt-button type="dashed">虚线按钮</zt-button>
			<zt-button type="text">文字按钮</zt-button>
			<zt-button type="primary" @click="handleClick()">主要按钮</zt-button>
			<zt-button type="info">信息按钮</zt-button>
			<zt-button type="success" iconL="zt-icon-success">成功按钮</zt-button>
			<zt-button type="warning">警告按钮</zt-button>
			<zt-button type="danger">危险按钮</zt-button>
		</div>
		<div class="row">
			<h3>不同尺寸</h3>
			<zt-button>默认按钮</zt-button>
			<zt-button type="primary" size="medium">中等按钮</zt-button>
			<zt-button type="success" size="small">小型按钮</zt-button>
			<zt-button type="danger" size="mini">超小按钮</zt-button>
		</div>
		<div class="row">
			<h3>圆角按钮</h3>
			<zt-button round>默认按钮</zt-button>
			<zt-button round type="primary" size="medium">中等按钮</zt-button>
			<zt-button round type="success" size="small">小型按钮</zt-button>
			<zt-button round type="danger" size="mini">超小按钮</zt-button>
		</div>
		<div class="row">
			<h3>图标按钮</h3>
			<zt-button circle iconL="zt-icon-select" @click="handleClick()"></zt-button>
			<zt-button circle iconL="zt-icon-success" type="primary"></zt-button>
			<zt-button circle iconL="zt-icon-good" type="success"></zt-button>
			<zt-button circle iconL="zt-icon-close" type="danger"></zt-button>
			<zt-button circle iconL="zt-icon-upload" type="dashed"></zt-button>
		</div>
		<div class="row">
			<h3>禁用状态</h3>
			<zt-button disabled @click="handleClick()">默认按钮</zt-button>
			<zt-button disabled type="dashed">虚线按钮</zt-button>
			<zt-button disabled type="text">文字按钮</zt-button>
			<zt-button disabled type="primary" @click="handleClick()">主要按钮</zt-button>
			<zt-button disabled type="info">信息按钮</zt-button>
			<zt-button disabled type="success">成功按钮</zt-button>
			<zt-button disabled type="warning">警告按钮</zt-button>
			<zt-button disabled type="danger">危险按钮</zt-button>
		</div>
		<div class="row">
			<h3>自定义</h3>
			<zt-button padding="15px 15px" iconL="zt-icon-success"></zt-button>
			<zt-button type="success" font-size="20px" iconL="zt-icon-upload">自定义字体大小</zt-button>
			<zt-button background="#666" text-color="yellow" border-color="red">自定义颜色</zt-button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Button",

	data() {
		return {};
	},

	mounted() {},

	methods: {
		handleClick() {
			console.log("点击");
		},
	},
};
</script>

<style lang="scss" scoped>
.row {
	margin-bottom: 20px;
	h3 {
		padding: 10px 0;
	}
	.zt-button {
		margin: 10px 10px 10px 0;
	}
}
</style>
