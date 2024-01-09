module.exports = {
    title: 'ZT-UI组件库',
    description: '封装了一些常用的组件',
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
                '/components/comps/button.md',
                '/components/comps/icon.md',
                '/components/comps/radio.md',
                '/components/comps/checkbox.md',
                '/components/comps/input.md',
                '/components/comps/select.md',
                '/components/comps/rate.md',
                '/components/comps/switch.md',
                '/components/comps/form.md',
                '/components/comps/message.md',
                '/components/comps/modal.md',
                '/components/comps/confirm.md',
                '/components/comps/menu.md',
                '/components/comps/pagination.md',
                '/components/comps/tabs.md',
                '/components/comps/progress.md',
                '/components/comps/tooltip.md'
            ]
        }
    },
    base:'/zt-ui/',
    plugins: ['demo-container']
}
