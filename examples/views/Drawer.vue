<template>
    <div>
        <div class="row">
            <h3>基础用法</h3>
            <zt-button type="primary" @click="show1 = true">打开抽屉</zt-button>
            <zt-drawer :visible.sync="show1" title="提示" @on-ok="onOk" @on-cancel="onCancel">这是一段信息</zt-drawer>
        </div>
        <div class="row">
            <h3>其他方向</h3>
            <zt-button type="primary" @click="show7 = true">左边</zt-button>
            <zt-drawer :visible.sync="show7" title="左边" direction="left" @on-ok="onOk" @on-cancel="onCancel">这是一段信息</zt-drawer>
            <zt-button type="primary" @click="show8 = true">上边</zt-button>
            <zt-drawer :visible.sync="show8" title="上边" direction="top" @on-ok="onOk" @on-cancel="onCancel">这是一段信息</zt-drawer>
            <zt-button type="primary" @click="show9 = true">下边</zt-button>
            <zt-drawer :visible.sync="show9" title="下边" direction="bottom" @on-ok="onOk" @on-cancel="onCancel">这是一段信息</zt-drawer>
        </div>
        <div class="row">
            <h3>隐藏头部和底部</h3>
            <zt-button type="primary" @click="show2 = true">打开抽屉</zt-button>
            <zt-drawer :visible.sync="show2" title="提示" :show-header="false" :show-footer="false">隐藏头部和底部</zt-drawer>
        </div>
        <div class="row">
            <h3>自定义头部、内容、底部</h3>
            <zt-button type="success" @click="show3 = true">自定义头部、内容、底部</zt-button>
            <zt-drawer :visible.sync="show3">
                <template #title>
                    <div>
                        <ZtIcon icon="info" color="var(--primary)" size="20" />
                        <span>自定义标题</span>
                    </div>
                </template>
                <div>
                    <Timeline pending>
                        <TimelineItem>
                            <p class="time">1976年</p>
                            <p class="content">Apple I 问世</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">1984年</p>
                            <p class="content">发布 Macintosh</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2007年</p>
                            <p class="content">发布 iPhone</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2010年</p>
                            <p class="content">发布 iPad</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2011年10月5日</p>
                            <p class="content">史蒂夫·乔布斯去世</p>
                        </TimelineItem>
                    </Timeline>
                    <Timeline pending>
                        <TimelineItem>
                            <p class="time">1976年</p>
                            <p class="content">Apple I 问世</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">1984年</p>
                            <p class="content">发布 Macintosh</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2007年</p>
                            <p class="content">发布 iPhone</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2010年</p>
                            <p class="content">发布 iPad</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">2011年10月5日</p>
                            <p class="content">史蒂夫·乔布斯去世</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <template #footer>
                    <div>
                        <zt-button size="small" @click="onCancel" style="margin-right: 10px">取 消</zt-button>
                        <zt-button type="primary" size="small" @click="sumbit" :loading="loading">提 交</zt-button>
                    </div>
                </template>
            </zt-drawer>
        </div>
        <div class="row">
            <h3>打开和关闭的回调</h3>
            <zt-button type="primary" @click="show4 = true">打开和关闭的回调</zt-button>
            <zt-drawer
                :visible.sync="show4"
                title="回调"
                @open="open"
                @close="close"
                @opened="opened"
                @closed="closed"
            >打开和关闭的回调</zt-drawer>
        </div>
        <div class="row">
            <h3>禁用遮罩层关闭</h3>
            <zt-button type="info" @click="show5 = true">禁用遮罩层关闭</zt-button>
            <zt-drawer
                :visible.sync="show5"
                title="禁用"
                @on-ok="onOk"
                @on-cancel="onCancel"
                :mask-closable="false"
            >禁用遮罩层关闭</zt-drawer>
        </div>
        <div class="row">
            <h3>隐藏遮罩层</h3>
            <zt-button type="info" @click="show10 = true">隐藏遮罩层</zt-button>
            <zt-drawer
                :visible.sync="show10"
                title="隐藏遮罩层"
                @on-ok="onOk"
                @on-cancel="onCancel"
                :show-mask="false"
            >隐藏遮罩层</zt-drawer>
        </div>
        <div class="row">
            <h3>嵌套抽屉</h3>
            <zt-button type="primary" @click="show6 = true">嵌套抽屉</zt-button>
            <zt-drawer :visible.sync="show6" title="外层抽屉" width="50%" :show-footer="false">
                <div>我是外层抽屉</div>
                <zt-button type="primary" size="small" @click="show1 = true">打开内层抽屉</zt-button>
                <zt-drawer :visible.sync="show1" title="内层抽屉" @on-ok="onOk" @on-cancel="onCancel">内层抽屉</zt-drawer>
            </zt-drawer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
            show7: false,
            show8: false,
            show9: false,
            show10: false,
            loading: false
        }
    },
    methods: {
        onOk() {
            this.$msg.success('点击了确定')
        },
        onCancel() {
            this.$msg.warning('点击了取消')
            this.show3 = false
        },
        sumbit() {
            this.loading = true
            this.$msg('提交')
            setTimeout(() => {
                this.show3 = false
                this.loading = false
            }, 1000)
        },
        open() {
            this.$msg.success('打开抽屉')
        },
        opened() {
            this.$msg.success('打开抽屉动画结束的回调')
        },
        close() {
            this.$msg('关闭抽屉')
        },
        closed() {
            this.$msg('关闭抽屉动画结束的回调')
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
    .zt-button{
        margin-right: 10px;
    }
}
</style>
