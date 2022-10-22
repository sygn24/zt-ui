<template>
    <div>
        <div class="row">
            <div class="col">
                <h3>单独使用</h3>
                <zt-radio  label="选项一" v-model="value1" @change="change">选项一</zt-radio>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>禁用</h3>
                <zt-radio v-model="value2" disabled>Apple</zt-radio>
            </div>
            <div class="col">
                <h3>选中且禁用</h3>
                <zt-radio label="Android" v-model="value3" disabled></zt-radio>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>单选框组</h3>
                <zt-radio-group v-model="value4" @change="groupChange">
                    <zt-radio label="选项四">选项四</zt-radio>
                    <zt-radio label="选项五">选项五</zt-radio>
                    <zt-radio label="选项六">选项六</zt-radio>
                </zt-radio-group>
            </div>
            <div class="col">
                <h3>禁用单选框组</h3>
                <zt-radio-group v-model="value5" disabled>
                    <zt-radio label="选项四">选项四</zt-radio>
                    <zt-radio label="选项五">选项五</zt-radio>
                    <zt-radio label="选项六">选项六</zt-radio>
                </zt-radio-group>
            </div>
            <div class="col">
                <h3>禁用某一选项</h3>
                <zt-radio-group v-model="value6">
                    <zt-radio label="选项七">选项四</zt-radio>
                    <zt-radio label="选项八" disabled>选项五</zt-radio>
                    <zt-radio label="选项九">选项六</zt-radio>
                </zt-radio-group>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>带有边框</h3>
                <zt-radio-group v-model="value7" disabled>
                    <zt-radio label="备选一" border></zt-radio>
                    <zt-radio label="备选二" border></zt-radio>
                    <zt-radio label="备选三" border></zt-radio>
                    <zt-radio label="备选四" border></zt-radio>
                </zt-radio-group>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>垂直模式</h3>
                <zt-radio-group v-model="value4" vertical>
                    <zt-radio label="选项四">选项四</zt-radio>
                    <zt-radio label="选项五">选项五</zt-radio>
                    <zt-radio label="选项六">选项六</zt-radio>
                </zt-radio-group>
            </div>
            <div class="col">
                <h3>垂直模式</h3>
                <zt-radio-group v-model="value4" vertical>
                    <zt-radio label="选项四" border>选项四</zt-radio>
                    <zt-radio label="选项五" border>选项五</zt-radio>
                    <zt-radio label="选项六" border>选项六</zt-radio>
                </zt-radio-group>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <h3>按钮模式</h3>
                <zt-radio-group v-model="value8" button vertical>
                    <zt-radio label="备选四"></zt-radio>
                    <zt-radio label="备选五"></zt-radio>
                    <zt-radio label="备选六" border></zt-radio>
                    <zt-radio label="备选七" disabled></zt-radio>
                    <zt-radio label="备选八"></zt-radio>
                </zt-radio-group>
            </div>
            <div class="col">
                <h3>按钮模式禁用</h3>
                <zt-radio-group v-model="value8" button disabled>
                    <zt-radio label="备选四"></zt-radio>
                    <zt-radio label="备选五"></zt-radio>
                    <zt-radio label="备选六"></zt-radio>
                    <zt-radio label="备选七"></zt-radio>
                    <zt-radio label="备选八"></zt-radio>
                </zt-radio-group>
            </div>
        </div>
        <div>
            <h3>不同尺寸,只有在边框或按钮模式下生效</h3>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <zt-radio-group v-model="value9" button size="large">
                            <zt-radio label="备选四"></zt-radio>
                            <zt-radio label="备选五"></zt-radio>
                        </zt-radio-group>
                    </div>
                    <div class="row">
                        <zt-radio-group v-model="value9" button size="medium">
                            <zt-radio label="备选四"></zt-radio>
                            <zt-radio label="备选五"></zt-radio>
                        </zt-radio-group>
                    </div>
                    <div class="row">
                        <zt-radio-group v-model="value9" button size="small">
                            <zt-radio label="备选四"></zt-radio>
                            <zt-radio label="备选五"></zt-radio>
                        </zt-radio-group>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <zt-radio-group v-model="value10" size="large">
                            <zt-radio label="备选一" border></zt-radio>
                            <zt-radio label="备选二" border></zt-radio>
                        </zt-radio-group>
                    </div>
                    <div class="row">
                        <zt-radio-group v-model="value10">
                            <zt-radio label="备选一" border></zt-radio>
                            <zt-radio label="备选二" border></zt-radio>
                        </zt-radio-group>
                    </div>
                    <div class="row">
                        <zt-radio-group v-model="value10" size="small">
                            <zt-radio label="备选一" border></zt-radio>
                            <zt-radio label="备选二" border></zt-radio>
                        </zt-radio-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Radio',
    data() {
        return {
            value1: '',
            value2: '',
            value3: 'Android',
            value4: '选项四',
            value5: '',
            value6: '',
            value7: '备选一',
            value8: '备选五',
            value9: '备选五',
            value10: '备选一',
            value11: ''
        }
    },
    methods: {
        change(val) {
            this.$msg(this.value1)
            console.log(this.value1)
        },
        groupChange(val) {
            this.$msg(this.value4)
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
    display: flex;
    .col {
        margin-right: 20px;
    }
}
h3 {
    padding: 10px 0;
}
</style>
