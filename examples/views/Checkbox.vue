<template>
    <div>
        <div class="row">
            <div class="col">
                <h3>单独使用,只能绑定布尔值</h3>
                <zt-checkbox label="选项一" v-model="value1" @change="change">选项一</zt-checkbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>禁用</h3>
                <zt-checkbox v-model="value2" disabled>Apple</zt-checkbox>
            </div>
            <div class="col">
                <h3>选中且禁用</h3>
                <zt-checkbox label="Android" v-model="value3" disabled></zt-checkbox>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>复选框组</h3>
                <zt-checkbox-group v-model="value4" @change="groupChange">
                    <zt-checkbox v-for="item in options1" :key="item" :label="item">{{ item }}</zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>禁用复选框组</h3>
                <zt-checkbox-group v-model="value5" disabled>
                    <zt-checkbox label="选项四">选项四</zt-checkbox>
                    <zt-checkbox label="选项五">选项五</zt-checkbox>
                    <zt-checkbox label="选项六">选项六</zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>禁用某一选项</h3>
                <zt-checkbox-group v-model="value6">
                    <zt-checkbox label="选项七">选项七</zt-checkbox>
                    <zt-checkbox label="选项八" disabled>选项八</zt-checkbox>
                    <zt-checkbox label="选项九">选项九</zt-checkbox>
                </zt-checkbox-group>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>显示全选按钮</h3>
                <zt-checkbox-group v-model="value44" show-check-all @checkAllChange="checkAllChange" @change="groupChange2">
                    <zt-checkbox v-for="item in options1" :key="item" :label="item">{{ item }}</zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>禁用复选框组</h3>
                <zt-checkbox-group v-model="value5" show-check-all disabled>
                    <zt-checkbox label="选项四">选项四</zt-checkbox>
                    <zt-checkbox label="选项五">选项五</zt-checkbox>
                    <zt-checkbox label="选项六">选项六</zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>禁用某一选项</h3>
                <zt-checkbox-group v-model="value6" show-check-all>
                    <zt-checkbox label="选项七">选项七</zt-checkbox>
                    <zt-checkbox label="选项八" disabled>选项八</zt-checkbox>
                    <zt-checkbox label="选项九">选项九</zt-checkbox>
                </zt-checkbox-group>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>带有边框</h3>
                <zt-checkbox-group v-model="value7" show-check-all check-all-border>
                    <zt-checkbox v-for="item in options2" :label="item" :key="item" border></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>带有边框</h3>
                <zt-checkbox-group v-model="value7" show-check-all check-all-border disabled>
                    <zt-checkbox v-for="item in options2" :label="item" :key="item" border></zt-checkbox>
                </zt-checkbox-group>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>垂直模式</h3>
                <zt-checkbox-group v-model="value4" vertical>
                    <zt-checkbox label="选项五"></zt-checkbox>
                    <zt-checkbox label="选项六"></zt-checkbox>
                    <zt-checkbox label="选项七"></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>垂直模式</h3>
                <zt-checkbox-group v-model="value4" vertical>
                    <zt-checkbox label="选项五" border></zt-checkbox>
                    <zt-checkbox label="选项六" border></zt-checkbox>
                    <zt-checkbox label="选项七" border></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <h3>按钮模式</h3>
                <zt-checkbox-group v-model="value8" button show-check-all>
                    <zt-checkbox label="备选四"></zt-checkbox>
                    <zt-checkbox label="备选五"></zt-checkbox>
                    <zt-checkbox label="备选六"></zt-checkbox>
                    <zt-checkbox label="备选七"></zt-checkbox>
                    <zt-checkbox label="备选八"></zt-checkbox>
                </zt-checkbox-group>
            </div>
            <div class="col">
                <h3>按钮模式禁用</h3>
                <zt-checkbox-group v-model="value8" button disabled show-check-all>
                    <zt-checkbox label="备选四"></zt-checkbox>
                    <zt-checkbox label="备选五"></zt-checkbox>
                    <zt-checkbox label="备选六"></zt-checkbox>
                    <zt-checkbox label="备选七"></zt-checkbox>
                    <zt-checkbox label="备选八"></zt-checkbox>
                </zt-checkbox-group>
            </div>
        </div>
        <div>
            <h3>不同尺寸,只有在边框或按钮模式下生效</h3>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <zt-checkbox-group v-model="value9" button size="large">
                            <zt-checkbox label="备选四"></zt-checkbox>
                            <zt-checkbox label="备选五"></zt-checkbox>
                            <zt-checkbox label="备选六"></zt-checkbox>
                        </zt-checkbox-group>
                    </div>
                    <div class="row">
                        <zt-checkbox-group v-model="value9" button size="medium">
                            <zt-checkbox label="备选四"></zt-checkbox>
                            <zt-checkbox label="备选五"></zt-checkbox>
                            <zt-checkbox label="备选六"></zt-checkbox>
                        </zt-checkbox-group>
                    </div>
                    <div class="row">
                        <zt-checkbox-group v-model="value9" button size="small">
                            <zt-checkbox label="备选四"></zt-checkbox>
                            <zt-checkbox label="备选五"></zt-checkbox>
                            <zt-checkbox label="备选六"></zt-checkbox>
                        </zt-checkbox-group>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <zt-checkbox-group v-model="value10" size="large">
                            <zt-checkbox label="备选一" border></zt-checkbox>
                            <zt-checkbox label="备选二" border></zt-checkbox>
                            <zt-checkbox label="备选三" border></zt-checkbox>
                        </zt-checkbox-group>
                    </div>
                    <div class="row">
                        <zt-checkbox-group v-model="value10">
                            <zt-checkbox label="备选一" border></zt-checkbox>
                            <zt-checkbox label="备选二" border></zt-checkbox>
                            <zt-checkbox label="备选三" border></zt-checkbox>
                        </zt-checkbox-group>
                    </div>
                    <div class="row">
                        <zt-checkbox-group v-model="value10" size="small">
                            <zt-checkbox label="备选一" border></zt-checkbox>
                            <zt-checkbox label="备选二" border></zt-checkbox>
                            <zt-checkbox label="备选三" border></zt-checkbox>
                        </zt-checkbox-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    data() {
        return {
            options1: ['选项一', '选项二', '选项三', '选项四'],
            options2: ['备选一', '备选二', '备选三', '备选四'],
            value1: true,
            value2: false,
            value3: true,
            value4: ['选项一', '选项三'],
            value44: ['选项一', '选项三'],
            value5: ['选项四', '选项五'],
            value6: [],
            value7: ['备选一', '备选二'],
            value8: [],
            value9: [],
            value10: [],
            value11: []
        }
    },
    methods: {
        change(val) {
            console.log(val, this.value1)
        },
        groupChange(val) {
            console.log(val)
            console.log(this.value4)
        },
        checkAllChange(val) {
            console.log(val)
            console.log(this.value44)
        },
        groupChange2(val) {
            console.log(val)
            console.log(this.value44)
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
