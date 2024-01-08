# Form 表单

## 基础用法

::: demo

```html
<template>
    <div class="row">
        <zt-form label-position="top" inline>
            <zt-form-item label="表单对齐方式">
                <zt-radio-group v-model="labelPosition" button>
                    <zt-radio label="left">左对齐</zt-radio>
                    <zt-radio label="right">右对齐</zt-radio>
                    <zt-radio label="top">顶部对齐</zt-radio>
                </zt-radio-group>
            </zt-form-item>
            <zt-form-item label="是否禁用表单">
                <zt-switch v-model="formDisabled"></zt-switch>
            </zt-form-item>
        </zt-form>
    </div>
    <div class="row">
        <zt-form ref="form" :model="formdata" :rules="rules" label-width="100px" :label-position="labelPosition" :disabled="formDisabled">
            <zt-form-item label="活动名称" prop="name">
                <zt-input placeholder="请输入活动名称" v-model="formdata.name" clearable />
            </zt-form-item>
            <zt-form-item label="活动区域" prop="area">
                <zt-select placeholder="请选择活动区域" v-model="formdata.area" clearable>
                    <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
                </zt-select>
            </zt-form-item>
            <zt-form-item label="即时配送" prop="delivery">
                <zt-switch v-model="formdata.delivery"></zt-switch>
            </zt-form-item>
            <zt-form-item label="星级" prop="rate">
                <zt-rate v-model="formdata.rate" :count="8" color="var(--primary)" half>
                    <span style="color: var(--primary)">{{ formdata.rate }} 星</span>
                </zt-rate>
            </zt-form-item>
            <zt-form-item label="活动性质" prop="type">
                <zt-checkbox-group v-model="formdata.type">
                    <zt-checkbox label="美食/餐厅线上活动"></zt-checkbox>
                    <zt-checkbox label="地推活动"></zt-checkbox>
                    <zt-checkbox label="线下主题活动"></zt-checkbox>
                    <zt-checkbox label="单纯品牌曝光"></zt-checkbox>
                </zt-checkbox-group>
            </zt-form-item>
            <zt-form-item label="特殊资源" prop="resource">
                <zt-radio-group v-model="formdata.resource">
                    <zt-radio label="线上品牌商赞助" border></zt-radio>
                    <zt-radio label="线下场地免费" border></zt-radio>
                </zt-radio-group>
            </zt-form-item>
            <zt-form-item label="活动形式" prop="desc">
                <zt-input type="textarea" v-model="formdata.desc" maxlength="100" show-limit />
            </zt-form-item>
            <zt-form-item>
                <zt-button type="primary" style="margin-right: 15px" @click="submit">立即创建</zt-button>
                <zt-button @click="reset">重置</zt-button>
            </zt-form-item>
        </zt-form>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                labelPosition: 'right',
                formDisabled: true,
                formdata: {
                    name: '',
                    area: '',
                    delivery: false,
                    rate: 3,
                    type: ['线下主题活动'],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                    area: [{ required: true, message: '请选择活动区域', trigger: 'blur' }],
                    type: [
                        {
                            type: 'array',
                            required: true,
                            message: '请至少选择一个活动性质',
                            trigger: 'change'
                        }
                    ],
                    resource: [
                        {
                            required: true,
                            message: '请至少选择一个特殊资源',
                            trigger: 'change'
                        }
                    ],
                    desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
                },
                options: [
                    {
                        value: '区域一',
                        label: '区域一'
                    },
                    {
                        value: '区域二',
                        label: '区域二'
                    },
                    {
                        value: '区域三',
                        label: '区域三'
                    },
                    {
                        value: '区域四',
                        label: '区域四'
                    }
                ]
            }
        },
        methods: {
            submit() {
                // 表单校验
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.$msg.success('校验成功')
                    } else {
                        this.$msg.error('校验失败')
                    }
                })
            },
            reset() {
                this.$refs.form.clearValidate()
                this.formdata = {
                    name: '',
                    area: '',
                    delivery: false,
                    rate: 3,
                    type: ['线下主题活动'],
                    resource: '',
                    desc: ''
                }
            }
        }
    }
</script>
```

:::

## API

### Form Props

| <div style="width:100px">参数</div> | <div style="width:150px">说明</div> | 类型    | <div style="width:200px">可选值</div> | 默认值  |
| :---------------------------------- | :---------------------------------- | :------ | ------------------------------------- | :------ |
| model                               | 表单数据对象                        | Object  | —                                     | —       |
| rules                               | 表单验证规则                        | Object  | —                                     | —       |
| label-width                         | 表单域标签的宽度                    | String  | —                                     | —       |
| label-position                      | 表单域标签的位置                    | String  | `rifht`、`left`、`top`                | `right` |
| inline                              | 行内表单模式                        | Boolean | —                                     | false   |
| disabled                            | 是否禁用该表单内的所有组件          | Boolean | —                                     | false   |

### Form Methods

| 方法名        | 说明                                         | 回调参数 |
| ------------- | :------------------------------------------- | :------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数 | callback |
| clearValidate | 移除整个表单项的校验结果                     | —        |

### FormItme Props

| 参数     | 说明              | 类型    | 可选值 | 默认值 |
| :------- | :---------------- | :------ | ------ | :----- |
| prop     | 表单域 model 字段 | String  | —      | —      |
| label    | 标签文本          | String  | —      | —      |
| required | 是否必填          | Boolean | —      | false  |
| disabled | 是否禁用          | Boolean | —      | false  |
