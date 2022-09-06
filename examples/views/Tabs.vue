<template>
    <div>
        <zt-tabs v-model="activeTab" @onClick="toggleTab">
            <zt-tab-pane name="Tabs1" label="Tabs1首页">
                <h2 style="color: red; margin-bottom: 20px">Tabs1首页内容</h2>
                <Loading />
            </zt-tab-pane>
            <zt-tab-pane name="Tabs2" label="Tabs2第二页">
                <h2>Tabs2第二页内容</h2>
            </zt-tab-pane>
            <zt-tab-pane name="Tabs3" label="Tabs3第三页">
                <h2>Tabs3第三页</h2>
            </zt-tab-pane>
        </zt-tabs>
    </div>
</template>

<script>
import Loading from './Loading.vue'
export default {
    name: 'Tabs',
    components: { Loading },
    data() {
        return {
            activeTab: 'Tabs1'
        }
    },
    methods: {
        toggleTab(name) {
            this.$msg('切换到'+ name)
        }
    }
}
</script>

<style lang="less" scoped></style>
