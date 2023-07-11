import { defineConfig } from 'umi';
import { Routes } from './src/routes'; // 只能使用 ./ 形式引入模块， // const route = require('./src/routers')  // 使用require引入routers文件

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
        exclude: [],
    },
    locale: {
        antd: true,
    },
    dynamicImport: {
        loading: '@/Loading.tsx',
    }, //启用按需加载
    routes: Routes,
    fastRefresh: {},
    // 只需要 dev，这么配
    mfsu: {},
    dva: {
        immer: true,
        hmr: true,
        skipModelValidate: false,
    },
    theme: {
        // 'primary-color': '#3761F8',
        // 'primary-color': '#b59758',
        'primary-color': 'rgb(47, 84, 235)',
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
