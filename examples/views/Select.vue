<template>
    <div class="select">
        <div class="row">
            <h3>基础用法</h3>
            <zt-select v-model="value1">
                <zt-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></zt-option>
            </zt-select>
        </div>
        <div class="row">
            <h3>有禁用选项</h3>
            <zt-select v-model="value2">
                <zt-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                ></zt-option>
            </zt-select>
        </div>
        <div class="row">
            <h3>禁用状态</h3>
            <zt-select v-model="value3" disabled>
                <zt-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></zt-option>
            </zt-select>
        </div>
        <div class="row">
            <h3>可清除单选</h3>
            <zt-select v-model="value4" clearable>
                <zt-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></zt-option>
            </zt-select>
        </div>
        <div class="row">
            <h3>自定义默认提示内容，选项改变的回调</h3>
            <zt-select v-model="value5" placeholder="请选择食物" clearable @change="change">
                <zt-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></zt-option>
            </zt-select>
        </div>
        <div class="row">
            <h3>自定义宽高和字体大小</h3>
            <zt-select v-model="value6" width="100" height="30" font-size="13">
                <zt-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></zt-option>
            </zt-select>
        </div>
        <div class="row">
            <h3>没有选项数据</h3>
            <zt-select v-model="value7" placeholder="请选择食物">
                <zt-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></zt-option>
            </zt-select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',

    data() {
        return {
            value1: '',
            value2: '选项2',
            value3: '',
            value4: '选项1',
            value5: '',
            value6: 20,
            value7: '',
            options1: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            options2: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎',
                    disabled: true
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            options3: [
                {
                    value: 10,
                    label: '10条/页'
                },
                {
                    value: 20,
                    label: '20条/页'
                },
                {
                    value: 30,
                    label: '30条/页'
                },
                {
                    value: 40,
                    label: '40条/页'
                }
            ],
            options4: []
        }
    },

    methods: {
        change(label) {
            this.$msg('选择了' + this.value5 + '--' + label)
        }
    }
}
</script>

<style lang="less" scoped>
.row {
    margin-bottom: 20px;
    h3 {
        padding: 10px 0;
    }
}
</style>
