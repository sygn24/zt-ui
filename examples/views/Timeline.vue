<template>
  <div>
    <div class="row">
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
      <Timeline>
        <Timeline>
          <TimelineItem color="green">发布1.0版本</TimelineItem>
          <TimelineItem color="green">发布2.0版本</TimelineItem>
          <TimelineItem color="red">严重故障</TimelineItem>
          <TimelineItem color="blue">发布3.0版本</TimelineItem>
        </Timeline>
      </Timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline2'
}
</script>

<style lang="less" scoped>
.row {
  display: flex;
}
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
</style>