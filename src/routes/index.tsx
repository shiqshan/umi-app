import { IRoute } from 'umi'; // 引入的 umi 里的路由接口定义规则
/**
 * 路由文件
 */
export const Routes: IRoute[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/index' },
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            { path: `/user/list`, component: '@/pages/user/list' },
            { path: `/user/detail`, component: '@/pages/user/detail' },
        ],
    },
];
