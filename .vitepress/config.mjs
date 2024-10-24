import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-dosc/",
  head: [["link", { rel: "icon", href: "/vitepress-dosc/logo.ico" }]],
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "目录",
    outline: [2, 3],
    logo:"/logo.ico",

    nav: [
      { text: 'Home', link: '/' },
      { text:"测试",
        items:[
          { text: "首页", link: "/" },
          { text: "makedown示例", link: '/examples_text'},
        ],
      },
      { text: "front end", link:"/front-end/react/"},
      { text: "back end", link:"/back-end/rabbitmq/"},      
    ],

    sidebar: {
      "/examples_text": set_sidebar("/examples_text"),
      "/front-end/react": set_sidebar("/front-end/react"),
      "/back-end/rabbitmq": set_sidebar("/back-end/rabbitmq"),
    },

    // sidebar: [
    //   // {
    //   //   text: 'Examples',
    //   //   items: [
    //   //     { text: 'Markdown Examples', link: '/markdown-examples' },
    //   //     { text: 'Runtime API Examples', link: '/api-examples' }
    //   //   ]
    //   // },  
    // ],

   // 设置搜索框的样式
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oaomumu/' }
    ],

    footer:{
      copyright:"Copyright © 2024 Oaomumu"
    }
  }
})
