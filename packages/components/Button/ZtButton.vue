<template>
	<button class="zt-button" :class="btnClass" :style="btnStyle" :disabled="disabled" @click="handleClick">
		<i :class="iconL" v-if="iconL != ''" :style="{ fontSize: iconSize || fontSize }"></i>
		<span><slot></slot></span>
		<i :class="iconR" v-if="iconR != ''" :style="{ fontSize: iconSize || fontSize }"></i>
	</button>
</template>

<script>
export default {
	name: "ZtButton",
	props: {
		type: {
			type: String,
			default: "default",
			validator: type => {
				return ["default", "dashed", "text", "primary", "info", "success", "warning", "danger"].includes(type);
			},
		},
		size: {
			type: String,
			default: "large",
			validator: size => {
				return ["large", "medium", "small", "mini"].includes(size);
			},
		},
		// 圆角
		round: {
			type: Boolean,
			default: false,
		},
		// 圆形
		circle: {
			type: Boolean,
			default: false,
		},
		// 禁用
		disabled: {
			type: Boolean,
			default: false,
		},
		// 点击后是否抖动
		shake: {
			type: Boolean,
			default: true,
		},
		// 图标
		iconL: {
			type: String,
			default: "",
		},
		iconR: {
			type: String,
			default: "",
		},
		iconSize: {
			type: String,
			default: "",
		},
		// 自定义
		padding: {
			type: String,
			default: "",
		},
		background: {
			type: String,
			default: "",
		},
		textColor: {
			type: String,
			default: "",
		},
		borderColor: {
			type: String,
			default: "",
		},
		fontSize: {
			type: String,
			default: "",
		},
	},
	computed: {
		btnClass() {
			return [
				`zt-button--${this.type}`,
				`zt-button--${this.size}`,
				{
					"is-round": this.round,
					"is-circle": this.circle,
					"is-shake": this.shake && !this.disabled,
					"is-disabled": this.disabled,
					"zt-button-hover": !this.disabled,
					"zt-button-focus": !this.disabled,
				},
			];
		},
		btnStyle() {
			return {
				padding: this.padding,
				backgroundColor: this.background,
				color: this.textColor,
				borderColor: this.borderColor || this.background,
				fontSize: this.fontSize,
			};
		},
	},
	methods: {
		handleClick() {
			this.$emit("click");
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
