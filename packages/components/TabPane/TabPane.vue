<template>
    <transition name="tab-slide" v-if="TabsInstance.animated && TabsInstance.animatedCount > 0">
        <div class="zt-tabs-panes-item" v-show="show" :class="{ reverse: isReverse }">
            <slot></slot>
        </div>
    </transition>
    <div class="zt-tabs-panes-item" v-show="show" v-else>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZtTabPane',
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['TabsInstance'],
    data() {
        return {
            show: false,
            isReverse: false, //控制反方向动画
        }
    },
    mounted() {
        this.TabsInstance.initTabs()
    },
    watch: {
        name() {
            this.TabsInstance.initTabs()
        }
    }
}
</script>
