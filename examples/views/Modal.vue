<template>
  <div>
    <div class="row">
      <h3>基础用法</h3>
      <zt-button type="primary" @click="show1=true">打开对话框</zt-button>
      <zt-modal
        :visible.sync="show1"
        title="提示"
        width="30%"
        @on-ok="onOk"
        @on-cancel="onCancel"
      >这是一段信息</zt-modal>
    </div>
    <div class="row">
      <h3>隐藏关闭按钮和底部操作按钮</h3>
      <zt-button type="primary" @click="show2=true">打开对话框</zt-button>
      <zt-modal
        :visible.sync="show2"
        title="提示"
        width="30%"
        :show-close="false"
        :show-footer="false"
      >隐藏关闭按钮和底部操作按钮</zt-modal>
    </div>
    <div class="row">
      <h3>自定义头部、内容、底部</h3>
      <zt-button type="success" @click="show3=true">自定义头部、内容、底部</zt-button>
      <zt-modal :visible.sync="show3" width="50%">
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
            <zt-button size="medium" @click="onCancel" style="margin-right:10px">取 消</zt-button>
            <zt-button type="primary" size="medium" @click="sumbit" :loading="loading">提 交</zt-button>
          </div>
        </template>
      </zt-modal>
    </div>
    <div class="row">
      <h3>打开和关闭的回调</h3>
      <zt-button type="primary" @click="show4=true">打开和关闭的回调</zt-button>
      <zt-modal
        :visible.sync="show4"
        title="回调"
        width="30%"
        @open="open"
        @close="close"
        @opened="opened"
        @closed="closed"
      >打开和关闭的回调</zt-modal>
    </div>
    <div class="row">
      <h3>禁用遮罩层关闭</h3>
      <zt-button type="info" @click="show5=true">禁用遮罩层关闭</zt-button>
      <zt-modal
        :visible.sync="show5"
        title="禁用"
        width="30%"
        @on-ok="onOk"
        @on-cancel="onCancel"
        :mask-closable="false"
      >禁用遮罩层关闭</zt-modal>
    </div>
    <div class="row">
      <h3>嵌套对话框</h3>
      <zt-button type="primary" @click="show6=true">嵌套对话框</zt-button>
      <zt-modal
        :visible.sync="show6"
        title="外层对话框"
        width="50%"
        :append-to-body="true"
        :destroy-on-close="true"
      >
        <div>我是外层对话框</div>
        <zt-modal
          :visible.sync="show1"
          title="内层对话框"
          width="30%"
          top="20vh"
          @on-ok="onOk"
          @on-cancel="onCancel"
        >内层对话框</zt-modal>
        <template #footer>
          <div class="zt-modal-btns">
            <zt-button size="medium" @click="show6=false" style="margin-right:10px">取 消</zt-button>
            <zt-button type="primary" size="medium" @click="show1=true">打开内层对话框</zt-button>
          </div>
        </template>
      </zt-modal>
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
      loading: false
    }
  },
  methods: {
    onOk() {
      this.$msg.success('点击了确认')
    },
    onCancel() {
      this.$msg.warning('点击了取消')
      this.show3 = false
    },
    sumbit() {
      this.loading = true
      this.$msg("提交")
      setTimeout(() => {
        this.show3 = false
        this.loading = false
      }, 1000)
    },
    open() {
      this.$msg.success('打开对话框')
    },
    opened() {
      this.$msg.success('打开对话框动画结束的回调')
    },
    close() {
      this.$msg('关闭对话框')
    },
    closed() {
      this.$msg('关闭对话框动画结束的回调')
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