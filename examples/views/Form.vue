<template>
    <div>
        <div class="row">
            <zt-form ref="form" :model="formdata" :rules="rules" label-width="80px">
                <zt-form-item label="活动名称" prop="name">
                    <zt-input placeholder="请输入活动名称" v-model="formdata.name" clearable style="width: 220px; height: 40px" />
                </zt-form-item>
                <zt-form-item label="活动区域" prop="area">
                    <zt-select placeholder="请选择活动区域" v-model="formdata.area" clearable style="width: 220px; height: 40px">
                        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
                    </zt-select>
                </zt-form-item>
                <zt-form-item label="即时配送" prop="delivery">
                    <zt-switch v-model="formdata.delivery"></zt-switch>
                </zt-form-item>
                <zt-form-item label="星级" prop="rate">
                    <zt-rate v-model="formdata.rate" :count="8" half>
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
                        <zt-radio label="线上品牌商赞助"></zt-radio>
                        <zt-radio label="线下场地免费"></zt-radio>
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
    </div>
</template>

<script>
export default {
    name: 'Form',

    data() {
        return {
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

    mounted() {},

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
