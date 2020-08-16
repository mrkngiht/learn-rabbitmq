const { description } = require('../../package')

module.exports = {
  lang: 'zh_CN',
  title: 'RabbitMQ入门教程',
  description: 'RabbitMQ入门使用教程,RabbitMQ基础性的概念知识,RabbitMQ的一些使用场景和应用教程实例。',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/mrkngiht/learn-rabbitmq',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: '介绍',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/':getSidebarGuide(),
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

function getSidebarGuide () {
  return [
    {
      title: 'RabbitMQ简介',
      collapsable: false,
      children: [
        '',
        'intro',
      ]
    },
    {
      title: '安装',
      collapsable: false,
      children: [
    'platforms',
        'installing_on_debian_ubuntu',
      ]
    },
    {
      title: 'AMQP协议',
      collapsable: false,
      children: [
        'amqp_0-9-1_model_explained',
        'amqp-0-9-1-quickref',
      ]
    },
    {
      title: '编程实例',
      collapsable: false,
      children: [
        'hello_world',
        'work_queues',
    'publish_subscribe',
    'routing',
    'topics',
    'rpc',
      ]
    }
  ]
}
