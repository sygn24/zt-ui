<template>
    <div>
        <h2>Icon图标</h2>
        <div class="iconList">
            <span class="item" v-for="(icon, index) in iconList" :key="index">
                <zt-icon :icon="icon" size="22" color="var(--primary)" />
                <p style="padding-top: 5px">{{ icon }}</p>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Icon',
    data() {
        return {
            iconList: [
                'other',
                'component',
                'element',
                'search',
                'clear',
                'ellipsis',
                'double-arrow-right',
                'double-arrow-left',
                'star-fill',
                'star',
                'loadding-dot',
                'loading',
                'loading-circle',
                'share',
                'comment',
                'comment-fill',
                'eye',
                'eyeoff',
                'success',
                'error',
                'info',
                'add',
                'close',
                'complete',
                'edit',
                'download',
                'upload',
                'like',
                'file',
                'good',
                'meh',
                'navigation',
                'select',
                'select-bold',
                'switch',
                'setting',
                'arrow-up-bold',
                'arrow-right-bold',
                'arrow-down-bold',
                'arrow-left-bold',
                'check-fill',
                'user-fill'
            ]
        }
    },

    methods: {}
}
</script>

<style lang="less" scoped>
.iconList {
    display: flex;
    flex-wrap: wrap;
    .item {
        text-align: center;
        width: 200px;
        margin: 15px 0;
    }
}
</style>
