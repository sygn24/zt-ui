<template>
    <div>
        <div class="row">
            <div class="item">
                <zt-tooltip content="top-start上左上左" placement="top-start" theme="light">
                    <zt-button>上左</zt-button>
                </zt-tooltip>
            </div>
            <div class="item">
                <zt-tooltip content="top上边上边" placement="top" theme="light">
                    <zt-button>上边</zt-button>
                </zt-tooltip>
            </div>
            <div class="item">
                <zt-tooltip content="top-end上右上右" placement="top-end">
                    <zt-button>上右</zt-button>
                </zt-tooltip>
            </div>
            <div class="item">
                <zt-tooltip content="top-start下左下左" placement="bottom-start" theme="light">
                    <zt-button>下左</zt-button>
                </zt-tooltip>
            </div>
            <div class="item">
                <zt-tooltip content="bot下边下边bot" placement="bottom">
                    <zt-button>下边</zt-button>
                </zt-tooltip>
            </div>
            <div class="item">
                <zt-tooltip content="top-end下右下右" placement="bottom-end">
                    <zt-button>下右</zt-button>
                </zt-tooltip>
            </div>
        </div>
        <div class="row2">
            <div class="item2">
                <zt-tooltip content="left-start左上" placement="left-start">
                    <zt-button>左上</zt-button>
                </zt-tooltip>
            </div>
            <div class="item2">
                <zt-tooltip content="left左边左边" placement="left" theme="light">
                    <zt-button>左边</zt-button>
                </zt-tooltip>
            </div>
            <div class="item2">
                <zt-tooltip content="left-end左下" placement="left-end">
                    <zt-button>左下</zt-button>
                </zt-tooltip>
            </div>
            <div class="item2">
                <zt-tooltip content="right-start右上" placement="right-start">
                    <zt-button>右上</zt-button>
                </zt-tooltip>
            </div>
            <div class="item2">
                <zt-tooltip content="right右边右边" placement="right" theme="light">
                    <zt-button>右边</zt-button>
                </zt-tooltip>
            </div>
            <div class="item2">
                <zt-tooltip content="right-end右下" placement="right-end">
                    <zt-button>右下</zt-button>
                </zt-tooltip>
            </div>
            <div class="item2">
                <zt-tooltip placement="right-end">
                    <zt-button>测试插槽使用</zt-button>
                    <div slot="content">
                        测试测试测试测试测试测试
                        <br />第二行信息
                    </div>
                </zt-tooltip>
            </div>
            <zt-tooltip placement="right-end" :delay="1000" content="延时1s显示">
                <zt-button>延时1s显示</zt-button>
            </zt-tooltip>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tooltip'
}
</script>

<style lang="less" scoped>
.row {
    display: flex;
    margin-top: 50px;
    .item {
        margin: 0 10px 10px 0;
    }
}
.row2 {
    margin-left: 180px;
    .item2 {
        margin-bottom: 20px;
    }
}
</style>
