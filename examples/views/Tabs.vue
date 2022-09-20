<template>
    <div class="tabs">
        <div class="tab1">
            <h2>开启切换动画</h2>
            <div class="row">
                <zt-tabs v-model="activeTab" :animated="true" @onClick="toggleTab">
                    <zt-tab-pane name="Tabs1" label="Tabs1首页">
                        <h2 style="color: red; margin-bottom: 20px">Tabs1首页内容</h2>
                        <Button />
                    </zt-tab-pane>
                    <zt-tab-pane name="Tabs2" label="Tabs2第二页">
                        <h2>Tabs2第二页内容</h2>
                    </zt-tab-pane>
                    <zt-tab-pane name="Tabs3" label="Tabs3第三页">
                        <h2>Tabs3 content</h2>
                    </zt-tab-pane>
                </zt-tabs>
            </div>
        </div>
        <div class="tab2">
            <h2>关闭切换动画</h2>
            <div class="row">
                <zt-tabs v-model="activeTab2">
                    <zt-tab-pane name="Tabs4" label="Tabs4">
                        <h2>Tabs4内容</h2>
                    </zt-tab-pane>
                    <zt-tab-pane name="Tabs5" label="Tabs5">
                        <h2>Tabs5第五页</h2>
                    </zt-tab-pane>
                    <zt-tab-pane name="Tabs6" label="Tabs6">
                        <h2>Tabs6 content</h2>
                    </zt-tab-pane>
                </zt-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'Tabs',
    components: { Button },
    data() {
        return {
            activeTab: 'Tabs1',
            activeTab2: 'Tabs4'
        }
    },
    methods: {
        toggleTab(name) {
            this.$msg('切换到' + name)
        }
    }
}
</script>

<style lang="less" scoped>
.tabs {
    width: 500px;
    .tab1 {
        margin-bottom: 50px;
    }
    .row {
        height: 300px;
    }
}
</style>
