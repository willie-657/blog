import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: '前端博客',
    description: '前端博客',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '公共组件',
                link: 'http://192.168.8.162:4003'
            },
            {
                text: '前端错误日志',
                link: 'http://192.168.8.162:4005/dashboard'
            }
        ]
    },
})