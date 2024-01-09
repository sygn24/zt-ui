<template>
    <div class="zt-page-size-select">
        <zt-select v-model="value" width="100" height="32" @change="pageSizeChange">
            <zt-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></zt-option>
        </zt-select>
    </div>
</template>

<script>
import ZtSelect from '../../Select'
import ZtOption from '../../SelectOption'
export default {
    name: 'PageSizeSelect',
    components: { ZtSelect, ZtOption },
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
            this.value = this.$parent.limit
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
.zt-page-size-select ::v-deep {
    .zt-select-option {
        text-align: center;
    }
    .zt-select-option.current {
        color: var(--themeColor);
    }
    .zt-select-drop {
        &::before {
            left: 35px;
        }
        &::after {
            left: 35px;
        }
    }
    .zt-select {
        &:hover {
            border-color: var(--themeColor);
        }
    }
}
</style>
