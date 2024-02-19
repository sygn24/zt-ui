<template>
    <div>
        <div class="row">
            <zt-time-line pending>
                <zt-time-line-item>
                    <p class="time">1976年</p>
                    <p class="content">Apple I 问世</p>
                </zt-time-line-item>
                <zt-time-line-item>
                    <p class="time">1984年</p>
                    <p class="content">发布 Macintosh</p>
                </zt-time-line-item>
                <zt-time-line-item>
                    <p class="time">2007年</p>
                    <p class="content">发布 iPhone</p>
                </zt-time-line-item>
                <zt-time-line-item>
                    <p class="time">2010年</p>
                    <p class="content">发布 iPad</p>
                </zt-time-line-item>
                <zt-time-line-item>
                    <p class="time">2011年10月5日</p>
                    <p class="content">史蒂夫·乔布斯去世</p>
                </zt-time-line-item>
            </zt-time-line>
            <zt-time-line>
                <zt-time-line-item color="green">发布1.0版本</zt-time-line-item>
                <zt-time-line-item color="green">发布2.0版本</zt-time-line-item>
                <zt-time-line-item color="red">严重故障</zt-time-line-item>
                <zt-time-line-item color="blue">发布3.0版本</zt-time-line-item>
            </zt-time-line>
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
