module.exports = {
    title: 'ZT-UI组件库',
    description: '参照Element-ui、iView组件库的样式，基于Vue2自己动手封装，实现了一些简单的组件，用于学习练手。',
    port: '8088',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/components/' },
            { text: 'Gitee源码', link: 'https://gitee.com/sygn/zt-ui' }
        ],
        sidebar: {
            '/components/': [
                '/components/',
                {
                    title: '基础组件',
                    collapsable: true, // 是否可折叠，默认为true
                    children: ['/components/comps/button.md', '/components/comps/icon.md']
                },
                {
                    title: '表单组件',
                    collapsable: true,
                    children: [
                        '/components/comps/input.md',
                        '/components/comps/radio.md',
                        '/components/comps/checkbox.md',
                        '/components/comps/switch.md',
                        '/components/comps/select.md',
                        '/components/comps/rate.md',
                        '/components/comps/form.md'
                    ]
                },
                {
                    title: '视图组件',
                    collapsable: true,
                    children: [
                        '/components/comps/message.md', 
                        '/components/comps/modal.md', 
                        '/components/comps/confirm.md',
                        '/components/comps/drawer.md',
                        '/components/comps/loading.md',
                        '/components/comps/carousel.md',
                        '/components/comps/progress.md', 
                        '/components/comps/tooltip.md'
                    ]
                },
                {
                    title: '导航组件',
                    collapsable: true,
                    children: [
                        '/components/comps/menu.md',
                        '/components/comps/pagination.md',
                        '/components/comps/tabs.md',
                    ]
                },
                {
                    title: '其他组件',
                    collapsable: true,
                    children: ['/components/comps/timeline.md']
                }
            ]
        }
    },
    base: '/zt-ui/',
    plugins: ['demo-container']
}
