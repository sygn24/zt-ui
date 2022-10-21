<template>
    <div id="app">
        <header>zt-ui测试</header>
        <main>
            <leftMenu />
            <div class="rightContent">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>
<script>
import leftMenu from './leftMenu.vue'
export default {
    components: {
        leftMenu
    }
}
</script>

<style lang="less">
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
    background: #f2f4f6;
    .rightContent {
        background: #fff;
        flex: 1;
        overflow: auto;
        padding: 30px;
        margin-left: 10px;
    }
}
</style>
