// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 如果部署在 https://<USERNAME>.github.io/empire-duo/，请设置 base
  // base: '/empire-duo', 
  site: 'https://your-username.github.io',
  integrations: [
    starlight({
      title: 'Empire Duo',
      logo: {
        inline: true,
        content: '📜', // 也可以替换为你的 SVG Logo
      },
      social: {
        github: 'https://github.com/your-username/empire-duo',
      },
      // 核心：开启多语言
      defaultLocale: 'zh',
      locales: {
        zh: { label: '简体中文', lang: 'zh-CN' },
        en: { label: 'English', lang: 'en-US' },
      },
      // 引入自定义样式
      customCss: ['./src/styles/custom.css'],
      // 侧边栏配置
      sidebar: [
        {
          label: '历史考据 / Research',
          autogenerate: { directory: 'research' },
        },
        {
          label: '设定维基 / Wiki',
          autogenerate: { directory: 'wiki' },
        },
      ],
      // 禁用让它看起来像 IT 文档的元素
      editLink: { baseUrl: null },
      lastUpdated: false,
    }),
  ],
});