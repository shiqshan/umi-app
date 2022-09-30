import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: false,
  },
  proxy: {
    "/api": {
      // "target": "https://pvp.qq.com", //王者荣耀接口
      "target": "https://game.gtimg.cn", //英雄联盟接口
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  }
});
