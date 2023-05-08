import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/index' },
    { path: '/home', component: '@/layouts/index' },
  ],
  fastRefresh: {},
  // 只需要 dev，这么配
  // mfsu: {},
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: false,
  },
  theme: {
    'primary-color': 'rgb(114, 46, 209);',
  },
  proxy: {
    // "/api": {
    //   // "target": "https://pvp.qq.com", //王者荣耀接口
    //   "target": "https://game.gtimg.cn", //英雄联盟接口
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api": "" }
    // },
    '/api': {
      target: 'http://localhost:8080/api', //本地接口
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
