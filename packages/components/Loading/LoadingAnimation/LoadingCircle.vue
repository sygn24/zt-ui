<template>
    <div class="circle-loading-svg">
        <svg height="36" width="36" viewBox="0 0 50 50" :style="style">
            <circle id="circle" cx="25" cy="25" r="20" />
        </svg>
    </div>
</template>
<script>
export default {
    name: 'LoadingCircle',
    props: {
        color: {
            type: String,
            default: 'var(--primary)'
        }
    },
    computed: {
        style() {
            return {
                '--themeColor': this.color
            }
        }
    }
}
</script>

<style scoped>
#circle {
    animation: loading-circle 1.4s ease-in-out infinite;
    /* 圆内填充 */
    fill: none;
    /* 圆周颜色 */
    stroke: var(--themeColor);
    /* 圆周宽度 */
    stroke-width: 2;
}

@keyframes loading-circle {
    0% {
        stroke-dasharray: 1px 200px;
        stroke-dashoffset: 0;
    }
    30% {
        stroke-dasharray: 100px 200px;
        stroke-dashoffset: -15px;
        stroke: var(--themeColor);
    }
    100% {
        stroke-dasharray: 100px 200px;
        stroke-dashoffset: -120px;
    }
}

.circle-loading-svg {
    animation: loading-rotate 2s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes loading-rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(1turn);
    }
}
</style>
