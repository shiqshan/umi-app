import { defineConfig } from 'umi';
import { Routes } from './src/routes'; // 只能使用 ./ 形式引入模块， // const route = require('./src/routers')  // 使用require引入routers文件

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    dynamicImport: {}, //启用按需加载
    routes: Routes,
    fastRefresh: {},
    // 只需要 dev，这么配
    // mfsu: {},
    dva: {
        immer: true,
        hmr: true,
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
