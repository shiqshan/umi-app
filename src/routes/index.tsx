import { IRoute } from 'umi'; // 引入的 umi 里的路由接口定义规则
/**
 * 路由文件
 */
//路径映射
export enum PathEnum {
    Dashboard_Analyze = '/dashboard/analyze',
    Dashboard_Workbench = '/dashboard/workbench',
    Dashboard_Rotate = '/dashboard/rotate',

    User_List = '/user/list',
    User_Detail = '/user/detail',

    Account_Center = '/account/center',
    Account_Setting = '/account/setting',
}

export const Routes: IRoute[] = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: '@/pages/index' },
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            { path: PathEnum.User_List, component: '@/pages/user/list' },
            { path: PathEnum.User_Detail, component: '@/pages/user/detail' },
            { path: PathEnum.Dashboard_Analyze, component: '@/pages/dashboard/analyze' },
            { path: PathEnum.Dashboard_Workbench, component: '@/pages/dashboard/workbench' },
            { path: PathEnum.Dashboard_Rotate, component: '@/pages/dashboard/rotate' },
            { path: PathEnum.Account_Center, component: '@/pages/account/center' },
            { path: PathEnum.Account_Setting, component: '@/pages/account/setting' },

            /**404 须放在最下面**/
            { component: '@/pages/404/index' },
        ],
    },
];
