<template>
    <zt-select v-model="value" width="100" height="30" @onChange="pageSizeChange">
        <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
    </zt-select>
</template>

<script>
import { Select, Option } from '../../Select'
export default {
    name: 'PageSizeSelect',
    components: { Select, Option },
    created() {
        this.initPageSizes()
    },
    data() {
        return {
            value: '',
            options: []
        }
    },
    methods: {
        initPageSizes() {
            this.value = this.$parent.size
            this.$parent.pageSizes.forEach(page => {
                let pageItem = {
                    value: page,
                    label: `${page}条/页`
                }
                this.options.push(pageItem)
            })
        },
        pageSizeChange() {
            this.$emit('pageSizeChange', this.value)
        }
    }
}
</script>

<style lang="less" scoped>
::v-deep .zt-select-option {
    text-align: center;
}
::v-deep .zt-select-drop {
    &::before {
        left: 35px;
    }
    &::after {
        left: 35px;
    }
}
</style>
