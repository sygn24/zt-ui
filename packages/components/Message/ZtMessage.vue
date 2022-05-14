<template>
	<div class="zt-message-box" :style="{ top: top + 'px' }">
		<transition name="slideFade">
			<div class="zt-message" :class="`zt-message-${type}`" v-if="show">
				<i :class="`zt-icon-${type}`" :style="{ color: iconColor }"></i>
				<span class="zt-message-msg">{{ msg }}</span>
				<i class="zt-message-close zt-icon-close" v-if="showClose" @click="handleClose"></i>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "Message",
	props: {
		type: {
			type: String,
			default: "info",
		},
		msg: {
			type: String,
			default: "",
		},
		dt: {
			type: Number,
			default: 3000,
		},
		showClose: {
			type: Boolean,
			default: false,
		},
		offsetTop: {
			type: Number,
			default: 30,
		},
	},
	data() {
		return {
			show: false,
			top: this.offsetTop,
			timer: null,
		};
	},
	mounted() {
		this.timer = setTimeout(() => {
			this.handleClose();
		}, this.dt);
	},
	computed: {
		iconColor() {
			let color = "var(--primary)";
			if (this.type == "success") {
				color = "var(--success)";
			} else if (this.type == "error") {
				color = "var(--danger)";
			} else if (this.type == "warning") {
				color = "var(--warning)";
			}
			return color;
		},
	},
	methods: {
		handleClose() {
			this.show = false;
			this.onClose && this.onClose();
			clearTimeout(this.timer);
			this.timer = null;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
