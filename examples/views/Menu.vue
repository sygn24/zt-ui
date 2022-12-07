<template>
    <div class="menu">
        <div class="row">
            <div class="col">
                <h3>垂直模式</h3>
                <zt-menu v-model="activeindex1" @onSelect="onSelect">
                    <zt-menu-item index="1">
                        <ZtIcon icon="file" />
                        <span class="title">文章管理</span>
                    </zt-menu-item>
                    <zt-menu-item index="2">
                        <ZtIcon icon="comment" />
                        <span class="title">评论管理</span>
                    </zt-menu-item>
                    <zt-menu-item index="3">
                        <ZtIcon icon="setting" />
                        <span class="title">系统设置</span>
                    </zt-menu-item>
                </zt-menu>
            </div>
            <div class="col">
                <h3>水平模式</h3>
                <zt-menu v-model="activeindex1" model="horizontal" @onSelect="onSelect">
                    <zt-menu-item index="1">文章管理</zt-menu-item>
                    <zt-menu-item index="2">评论管理</zt-menu-item>
                    <zt-menu-item index="3">系统设置</zt-menu-item>
                </zt-menu>
            </div>
            <div class="col">
                <h3>分组</h3>
                <zt-menu v-model="activeindex2">
                    <zt-menu-item-group>
                        <span slot="title">内容管理</span>
                        <zt-menu-item index="1-1">
                            <ZtIcon icon="file" />
                            <span class="title">文章管理</span>
                        </zt-menu-item>
                        <zt-menu-item index="1-2">
                            <ZtIcon icon="comment" />
                            <span class="title">评论管理</span>
                        </zt-menu-item>
                    </zt-menu-item-group>
                    <zt-menu-item-group title="统计分析">
                        <zt-menu-item index="2-1">
                            <ZtIcon icon="like" />
                            <span class="title">用户留存</span>
                        </zt-menu-item>
                        <zt-menu-item index="2-2">
                            <ZtIcon icon="meh" />
                            <span class="title">流失用户</span>
                        </zt-menu-item>
                    </zt-menu-item-group>
                </zt-menu>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>下拉菜单</h3>
                <zt-menu v-model="activeindex3">
                    <zt-submenu index="1">
                        <template slot="title">
                            <ZtIcon icon="file" />
                            <span class="title">内容管理</span>
                        </template>
                        <zt-menu-item index="1-1">
                            <ZtIcon icon="file" />
                            <span class="title">文章管理</span>
                        </zt-menu-item>
                        <zt-menu-item index="1-2">
                            <ZtIcon icon="comment" />
                            <span class="title">评论管理</span>
                        </zt-menu-item>
                    </zt-submenu>
                    <zt-submenu index="2">
                        <template slot="title">
                            <ZtIcon icon="edit" />
                            <span class="title">统计分析管理</span>
                        </template>
                        <zt-menu-item-group>
                            <span slot="title">内容统计</span>
                            <zt-menu-item index="2-1">
                                <ZtIcon icon="file" />
                                <span class="title">文章统计</span>
                            </zt-menu-item>
                            <zt-submenu index="2-2">
                                <template slot="title">
                                    <ZtIcon icon="navigation" />
                                    <span class="title">评论统计</span>
                                </template>
                                <zt-menu-item index="2-2-1"> 最新评论 </zt-menu-item>
                                <zt-menu-item index="2-2-2"> 热门评论 </zt-menu-item>
                            </zt-submenu>
                        </zt-menu-item-group>
                        <zt-menu-item-group title="人员统计">
                            <zt-menu-item index="2-3"> 新人统计 </zt-menu-item>
                            <zt-submenu index="2-4">
                                <template slot="title">
                                    <ZtIcon icon="navigation" />
                                    <span class="title">人员管理</span>
                                </template>
                                <zt-menu-item index="2-4-1"> 用户留存 </zt-menu-item>
                                <zt-menu-item index="2-4-2"> 流失用户 </zt-menu-item>
                                <zt-submenu index="2-4-3">
                                    <template slot="title">
                                        <ZtIcon icon="navigation" />
                                        <span class="title">统计分析</span>
                                    </template>
                                    <zt-menu-item index="2-4-3-1">
                                        <ZtIcon icon="like" />
                                        <span class="title">用户留存</span>
                                    </zt-menu-item>
                                    <zt-menu-item index="2-4-3-2">
                                        <ZtIcon icon="meh" />
                                        <span class="title">流失用户</span>
                                    </zt-menu-item>
                                </zt-submenu>
                            </zt-submenu>
                        </zt-menu-item-group>
                    </zt-submenu>
                </zt-menu>
            </div>
            <div class="col">
                <h3>水平下拉</h3>
                <zt-menu v-model="activeindex4" model="horizontal" @onSelect="onSelect">
                    <zt-menu-item index="1">文章管理</zt-menu-item>
                    <zt-menu-item index="2">评论管理</zt-menu-item>
                    <zt-submenu index="3">
                        <template slot="title">
                            <span>内容管理</span>
                        </template>
                        <zt-menu-item-group title="内容管理">
                            <zt-menu-item index="3-1"> 文章管理 </zt-menu-item>
                            <zt-menu-item index="3-2"> 评论管理 </zt-menu-item>
                        </zt-menu-item-group>
                        <zt-menu-item-group title="统计分析">
                            <zt-menu-item index="3-3"> 用户留存 </zt-menu-item>
                            <zt-menu-item index="3-4"> 流失用户流失用户</zt-menu-item>
                        </zt-menu-item-group>
                    </zt-submenu>
                </zt-menu>
            </div>
            <div class="col">
                <h3>下拉菜单，只保持一个子菜单展开</h3>
                <zt-menu v-model="activeindex3" unique-opened>
                    <zt-submenu index="1">
                        <template slot="title">
                            <ZtIcon icon="file" />
                            <span class="title">内容管理</span>
                        </template>
                        <zt-menu-item index="1-1">
                            <ZtIcon icon="file" />
                            <span class="title">文章管理</span>
                        </zt-menu-item>
                        <zt-menu-item index="1-2">
                            <ZtIcon icon="comment" />
                            <span class="title">评论管理</span>
                        </zt-menu-item>
                    </zt-submenu>
                    <zt-submenu index="2">
                        <template slot="title">
                            <ZtIcon icon="edit" />
                            <span class="title">统计分析管理</span>
                        </template>
                        <zt-menu-item-group>
                            <span slot="title">内容统计</span>
                            <zt-menu-item index="2-1">
                                <ZtIcon icon="file" />
                                <span class="title">文章统计</span>
                            </zt-menu-item>
                            <zt-submenu index="2-2">
                                <template slot="title">
                                    <ZtIcon icon="navigation" />
                                    <span class="title">评论统计</span>
                                </template>
                                <zt-menu-item index="2-2-1"> 最新评论 </zt-menu-item>
                                <zt-menu-item index="2-2-2"> 热门评论 </zt-menu-item>
                            </zt-submenu>
                        </zt-menu-item-group>
                        <zt-menu-item-group title="人员统计">
                            <zt-menu-item index="2-3"> 新人统计 </zt-menu-item>
                            <zt-submenu index="2-4">
                                <template slot="title">
                                    <ZtIcon icon="navigation" />
                                    <span class="title">人员管理</span>
                                </template>
                                <zt-menu-item index="2-4-1"> 用户留存 </zt-menu-item>
                                <zt-menu-item index="2-4-2"> 流失用户 </zt-menu-item>
                                <zt-submenu index="2-4-3">
                                    <template slot="title">
                                        <ZtIcon icon="navigation" />
                                        <span class="title">统计分析</span>
                                    </template>
                                    <zt-menu-item index="2-4-3-1">
                                        <ZtIcon icon="like" />
                                        <span class="title">用户留存</span>
                                    </zt-menu-item>
                                    <zt-menu-item index="2-4-3-2">
                                        <ZtIcon icon="meh" />
                                        <span class="title">流失用户</span>
                                    </zt-menu-item>
                                </zt-submenu>
                            </zt-submenu>
                        </zt-menu-item-group>
                    </zt-submenu>
                </zt-menu>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>自定义颜色和宽度,隐藏边框和激活状态线条</h3>
                <zt-menu
                    v-model="activeindex5"
                    :background-color="backgroundColor"
                    :text-color="textColor"
                    :active-text-color="activeTextColor"
                    :active-background-color="activebackgroundColor"
                    :show-active-line="false"
                    :show-border="false"
                >
                    <zt-menu-item index="1">
                        <ZtIcon icon="file" />
                        <span class="title">文章管理</span>
                    </zt-menu-item>
                    <zt-menu-item index="2">
                        <ZtIcon icon="comment" />
                        <span class="title">评论管理</span>
                    </zt-menu-item>
                    <zt-menu-item index="3">
                        <ZtIcon icon="setting" />
                        <span class="title">系统设置</span>
                    </zt-menu-item>
                </zt-menu>
            </div>
            <div class="col">
                <h3>隐藏边框 自定义高度</h3>
                <zt-menu
                    v-model="activeindex5"
                    model="horizontal"
                    background-color="#545c64"
                    :text-color="textColor"
                    active-text-color="var(--warning)"
                    active-line-color="var(--warning)"
                    :show-border="false"
                    height="80px"
                >
                    <zt-menu-item index="1">
                        <ZtIcon icon="file" />
                        <span class="title">文章管理</span>
                    </zt-menu-item>
                    <zt-menu-item index="2">
                        <ZtIcon icon="comment" />
                        <span class="title">评论管理</span>
                    </zt-menu-item>
                    <zt-submenu index="3">
                        <template slot="title">
                            <span>内容管理</span>
                        </template>
                        <zt-menu-item-group title="内容管理">
                            <zt-menu-item index="3-1"> 文章管理 </zt-menu-item>
                            <zt-menu-item index="3-2"> 评论管理 </zt-menu-item>
                        </zt-menu-item-group>
                        <zt-menu-item-group title="统计分析">
                            <zt-menu-item index="3-3"> 用户留存 </zt-menu-item>
                            <zt-menu-item index="3-4"> 流失用户流失用户</zt-menu-item>
                        </zt-menu-item-group>
                    </zt-submenu>
                    <zt-menu-item index="4">人员管理 </zt-menu-item>
                </zt-menu>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>路由模式</h3>
                <zt-menu v-model="activeindex6" router>
                    <zt-menu-item index="/form">Form表单 </zt-menu-item>
                    <zt-menu-item index="/pagination"> Pagination分页 </zt-menu-item>
                </zt-menu>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',

    data() {
        return {
            activeindex1: '1',
            activeindex2: '2-1',
            activeindex3: '1-1',
            activeindex4: '3-2',
            activeindex5: '2',
            activeindex6: '',
            backgroundColor: '#101117',
            textColor: '#babbbd',
            activeTextColor: '#fff',
            activebackgroundColor: 'var(--primary)'
        }
    },
    methods: {
        onSelect(index) {
            this.$msg('当前激活' + index)
        }
    }
}
</script>

<style lang="less" scoped>
.menu {
    height: 1500px;
}
.row {
    display: flex;
    margin-bottom: 40px;
    .col {
        margin-right: 40px;
    }
}
h3 {
    padding: 10px 0;
}
.title {
    margin-left: 5px;
}
</style>
