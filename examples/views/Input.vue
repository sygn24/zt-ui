<template>
    <div>
        <div class="row">
            <div class="col">
                <h3>基础用法</h3>
                <zt-input placeholder="请输入内容"></zt-input>
            </div>
            <div class="col">
                <h3>可直接设置 style 来改变输入框的宽、高</h3>
                <zt-input placeholder="请输入内容" style="width: 100px; height: 25px"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>禁用状态</h3>
                <zt-input laceholder="请输入内容" v-model="value8" disabled></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>带Icon的输入框</h3>
                <zt-input placeholder="请输入内容" style="margin-right: 20px" prefix-icon="user-fill" v-model="value2"></zt-input>
                <zt-input placeholder="请输入内容" suffix-icon="search" v-model="value2"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>可清空</h3>
                <zt-input placeholder="请输入内容" clearable v-model="value1"></zt-input>
                {{ value1 }}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>密码框</h3>
                <zt-input placeholder="请输入内容" type="password" show-password maxlength="10" v-model="value3"></zt-input>
            </div>
            <div class="col">
                <h3>可清空密码框，不能传show-password</h3>
                <zt-input placeholder="请输入内容" type="password" clearable v-model="value3"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>输入长度限制</h3>
                <zt-input placeholder="请输入内容" v-model="value4" maxlength="10" show-limit></zt-input>
            </div>
            <div class="col">
                <h3>输入长度限制，可清空</h3>
                <zt-input placeholder="请输入内容" maxlength="20" show-limit clearable v-model="value5"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>数字输入框</h3>
                <zt-input type="number" v-model="value6"></zt-input>
            </div>
            <div class="col">
                <h3>只读</h3>
                <zt-input readonly v-model="value8"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>文本域</h3>
                <zt-input :rows="3" type="textarea" maxlength="100" show-limit v-model="value7"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>暴露的方法</h3>
                <div>
                    <zt-button size="small" type="primary" @click="onFocus">获取焦点</zt-button>
                    <zt-button size="small" type="primary" @click="onBlur">失去焦点</zt-button>
                    <zt-button size="small" type="primary" @click="onSelect">选中</zt-button>
                </div>
                <zt-input ref="input1" v-model="value10" @keyupEnter="keyupEnter"></zt-input>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>事件回调</h3>
                <zt-input
                    @input="onInput"
                    @focus="foucs1"
                    @blur="blur1"
                    @change="change1"
                    @keyupEnter="keyupEnter"
                    v-model="value9"
                ></zt-input>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            value1: '双向绑定',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '双向绑定',
            value9: '',
            value10: '双向绑定'
        }
    },
    methods: {
        onFocus() {
            this.$refs.input1.focus()
        },
        onBlur() {
            this.$refs.input1.blur()
        },
        onSelect() {
            this.$refs.input1.select()
        },
        onInput(val) {
            this.$msg('输入的值:' + val)
        },
        foucs1(val) {
            this.$msg('聚焦时的值:' + val)
        },
        blur1(val) {
            this.$msg('失焦时的值:' + val)
        },
        change1(val) {
            this.$msg('改变后的值:' + val)
        },
        keyupEnter(e) {
            this.$msg('按下回车键')
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
    h3 {
        padding: 10px 0;
    }
    .zt-button {
        margin: 10px 10px 10px 0;
    }
}
</style>
