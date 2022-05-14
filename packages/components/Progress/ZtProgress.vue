<template>
	<div
		ref="progressBox"
		:class="vertical ? 'progressBox-vertical' : 'progressBox'"
		:style="progressBoxStyle"
		@mousemove="setTooltip"
		@mouseleave="progressBoxLeave"
		@click="changeProgressBar"
	>
		<!-- 进度条 -->
		<div :class="vertical ? 'progressBar-vertical' : 'progressBar'" ref="progressBar" :style="progressBarStyle">
			<div :class="vertical ? 'activeBar-vertical' : 'activeBar'" v-if="isActiveBar && !disabled"></div>
		</div>
		<!-- 进度条上圆形按钮 -->
		<transition name="baseFade">
			<div
				:class="vertical ? 'radiusBtn-vertical' : 'radiusBtn'"
				ref="radiusBtn"
				:style="radiusBtnStyle"
				v-show="showRadiusBtn ? showRadiusBtn : hoverShowRadiusBtn"
				@mouseenter="radiusBtnHover"
				@mouseleave="radiusBtnLeave"
				@mousedown="dragProgressBar"
			></div>
		</transition>
		<!--提示框  -->
		<transition name="baseFade">
			<div
				:class="vertical ? 'tooltip-vertical' : 'tooltip'"
				ref="tooltip"
				:style="tooltipStyle"
				v-show="showToolTip && hoverShowToolTip"
			>
				<span>{{ tooltipTxt }}</span>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "ZtProgress",
	props: {
		// 百分比进度
		percent: {
			type: Number,
			default: 0,
		},
		// 进度条尺寸
		progressSize: {
			type: Number,
			default: 8,
		},
		// 进度条颜色
		progressColor: {
			type: [String, Array],
			default: "var(--primary)",
		},
		// 进度条背景盒子颜色
		progressBgColor: {
			type: String,
			default: "#eee",
		},
		// 是否一直显示圆形按钮
		showRadiusBtn: {
			type: Boolean,
			default: true,
		},
		// 是否禁用进度条
		disabled: {
			type: Boolean,
			default: false,
		},
		// 是否显示提示框
		showToolTip: {
			type: Boolean,
			default: true,
		},
		// 是否格式化提示框
		isFormatTooltip: {
			type: Boolean,
			default: false,
		},
		// 格式化提示框函数
		formatTooltip: {
			type: Function,
		},
		// 是否显示activeBar
		isActiveBar: {
			type: Boolean,
			default: true,
		},
		// 是否垂直
		vertical: {
			type: Boolean,
			default: false,
		},
		// 垂直高度
		height: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			tooltipTxt: 0, //悬浮提示框文本
			hoverShowRadiusBtn: false, //鼠标经过显示进度条圆按钮
			radiusBtnActive: false, //圆按钮是否处于活跃
			hoverShowToolTip: false, //鼠标经过显示tooltip
			isDrag: false, //是否正在拖拽进度条
		};
	},
	mounted() {
		this.setProgressBar(this.percent);
	},
	model: {
		prop: "percent",
		event: "onChange",
	},
	computed: {
		// 进度条盒子样式
		progressBoxStyle() {
			let style = {
				height: this.vertical ? this.height : `${this.progressSize}px`,
				width: this.vertical ? `${this.progressSize}px` : "",
				borderRadius: `${this.progressSize}px`,
				background: this.progressBgColor,
				cursor: this.disabled ? "not-allowed" : "pointer",
			};
			return style;
		},
		// 进度条样式
		progressBarStyle() {
			let style = {
				// width: `${this.percent}%`,
				borderRadius: `${this.progressSize}px`,
				background: this.disabled
					? "#c0c4cc"
					: typeof this.progressColor == "string"
					? this.progressColor
					: `linear-gradient(to right,${this.progressColor[0]} 0%,${this.progressColor[1]} 100%)`,
				transition: this.isDrag ? "none" : "all 0.3s ease-out",
				cursor: this.disabled ? "not-allowed" : "pointer",
			};
			return style;
		},
		// 圆形按钮样式
		radiusBtnStyle() {
			let style = {
				// left: `${this.percent}%`,
				width: this.radiusBtnActive ? `${this.radiusBtnSize + 3}px` : `${this.radiusBtnSize}px`,
				height: this.radiusBtnActive ? `${this.radiusBtnSize + 3}px` : `${this.radiusBtnSize}px`,
				transform: this.vertical ? `translate(-50%,${this.radiusBtnSize / 2}px)` : `translate(${-this.radiusBtnSize / 2}px,-50%)`,
				transition: this.isDrag ? "none" : "all 0.3s ease-out",
				cursor: this.disabled ? "not-allowed" : "pointer",
				borderColor: this.disabled ? "#c0c4cc" : typeof this.progressColor == "string" ? this.progressColor : this.progressColor[1],
				"--circleColor": this.disabled
					? "#c0c4cc"
					: typeof this.progressColor == "string"
					? this.progressColor
					: this.progressColor[1],
			};
			return style;
		},
		// 进度条圆形按钮大小，根据进度条大小动态计算
		radiusBtnSize() {
			let radiusBtnSize = this.progressSize >= 8 ? this.progressSize * 2 : this.progressSize * 2.5;
			radiusBtnSize = this.progressSize <= 3 ? this.progressSize * 4 : radiusBtnSize;
			radiusBtnSize = radiusBtnSize < 12 ? 12 : radiusBtnSize;
			return radiusBtnSize;
		},
		// tooltip盒子样式
		tooltipStyle() {
			return {
				bottom: this.vertical ? "" : `${this.progressSize + 10}px`,
				left: this.vertical ? `${this.progressSize + 10}px` : "",
			};
		},
	},
	methods: {
		// 获取鼠标在进度条上的位置，返回一个百分比值
		getMousePosition(e) {
			if (!this.vertical) {
				let progressBoxWidth = this.$refs.progressBox.getBoundingClientRect().width; //进度条总宽度
				let progressBoxLeft = this.$refs.progressBox.getBoundingClientRect().left; //进度条距左边距离
				let mousePositon = e.clientX - progressBoxLeft;
				mousePositon = mousePositon <= 0 ? 0 : mousePositon; //设置最小边界值
				mousePositon = mousePositon >= progressBoxWidth ? progressBoxWidth : mousePositon; //设置最大边界值
				let percentLength = Math.ceil((mousePositon * 100) / progressBoxWidth);
				return percentLength;
			} else {
				let progressBoxHeight = this.$refs.progressBox.getBoundingClientRect().height;
				let progressBoxBottom = this.$refs.progressBox.getBoundingClientRect().bottom;
				let mousePositon = progressBoxBottom - e.clientY;
				mousePositon = mousePositon <= 0 ? 0 : mousePositon; //设置最小边界值
				mousePositon = mousePositon >= progressBoxHeight ? progressBoxHeight : mousePositon; //设置最大边界值
				let percentLength = Math.ceil((mousePositon * 100) / progressBoxHeight);
				return percentLength;
			}
		},
		// 设置进度条长度
		setProgressBar(percent) {
			if (!this.vertical) {
				this.$refs.progressBar.style.width = percent + "%";
				this.$refs.radiusBtn.style.left = percent + "%";
			} else {
				this.$refs.progressBar.style.height = percent + "%";
				this.$refs.radiusBtn.style.bottom = percent + "%";
			}
		},
		// 鼠标在进度条上移动时,设置tooltip位置,设置当前位置百分比数值
		setTooltip(e) {
			this.hoverShowRadiusBtn = true;
			if (this.disabled) return; //禁用进度条
			if (!this.showToolTip) return; // 父组件传值控制不显示tooltip
			this.hoverShowToolTip = true;
			let percentLength = this.getMousePosition(e);
			if (!this.vertical) {
				this.$refs.tooltip.style.left = percentLength + "%";
			} else {
				this.$refs.tooltip.style.bottom = percentLength + "%";
			}
			// tooltip默认显示百分比数值，如果格式化tooltip则显示处理后的数值
			this.tooltipTxt = this.isFormatTooltip
				? this.formatTooltip
					? this.formatTooltip(percentLength)
					: percentLength
				: percentLength;
		},
		//改变进度条progressBar
		changeProgressBar(e) {
			if (this.disabled) return;
			let percentLength = this.getMousePosition(e);
			this.$emit("onChange", percentLength);
		},
		// 鼠标经过圆形按钮
		radiusBtnHover() {
			this.hoverShowRadiusBtn = true;
			this.radiusBtnActive = true;
		},
		// 鼠标离开圆形按钮
		radiusBtnLeave() {
			if (!this.isDrag) {
				this.hoverShowRadiusBtn = false;
				this.radiusBtnActive = false;
			}
		},
		// 鼠标按下圆形按钮拖拽进度条
		dragProgressBar() {
			//禁用进度条
			if (this.disabled) return;
			// 鼠标移动，拖拽进度条
			this.radiusBtnHover();
			let move = e => {
				this.isDrag = true;
				let percentLength = this.getMousePosition(e);
				this.setProgressBar(percentLength);
				// this.$emit("update:percent", percentLength);
				this.setTooltip(e);
			};
			// 鼠标松开，就停止拖拽，让鼠标移动事件解除,并且改变进度条
			let moveup = e => {
				this.isDrag = false;
				document.removeEventListener("mousemove", move);
				this.changeProgressBar(e);
				this.progressBoxLeave();
				this.radiusBtnActive = false;
				document.removeEventListener("mouseup", moveup);
			};
			document.addEventListener("mousemove", move);
			document.addEventListener("mouseup", moveup);
		},
		// 鼠标离开进度条栏
		progressBoxLeave() {
			this.hoverShowToolTip = false;
			this.hoverShowRadiusBtn = false;
		},
	},
	watch: {
		percent(percent) {
			if (!this.isDrag) {
				this.setProgressBar(percent);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
