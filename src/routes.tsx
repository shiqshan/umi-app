import { IRoute } from 'umi'; // 引入的 umi 里的路由接口定义规则
/**
 * 路由文件
 */
//路径映射
export enum PathEnum {
    Login = '/login',
    Register = '/register',
    Dashboard_Analyze = '/dashboard/analyze',
    Dashboard_Workbench = '/dashboard/workbench',
    Dashboard_Rotate = '/dashboard/rotate',

    User_List = '/user/list',
    User_Detail = '/user/detail',

    Account_Center = '/account/center',
    Account_Setting = '/account/setting',
    Account_SetPassword = '/account/set-password',

    LOL_HeroList = '/lol/hero-list',
    LOL_OrderList = '/lol/order-list',
    LOL_HeroDetail = '/lol/hero-detail/:id',
    LOL_HeroBuy = '/lol/hero-buy',
}

export const Routes: IRoute[] = [
    { path: '/', redirect: PathEnum.Login },
    { path: PathEnum.Login, component: '@/pages/index' },
    { path: PathEnum.Register, component: '@/pages/login/register' },
    {
        path: '/',
        component: '@/layouts/index',
        wrappers: ['@/wrappers/auth'],
        routes: [
            { path: PathEnum.User_List, component: '@/pages/user/list' },
            { path: PathEnum.User_Detail, component: '@/pages/user/detail' },
            { path: PathEnum.Dashboard_Analyze, component: '@/pages/dashboard/analyze' },
            { path: PathEnum.Dashboard_Workbench, component: '@/pages/dashboard/workbench' },
            { path: PathEnum.Dashboard_Rotate, component: '@/pages/dashboard/rotate' },
            { path: PathEnum.Account_Center, component: '@/pages/account/center' },
            { path: PathEnum.Account_Setting, component: '@/pages/account/setting' },
            { path: PathEnum.Account_SetPassword, component: '@/pages/account/setPassword' },
            { path: PathEnum.LOL_HeroList, component: '@/pages/lol/heroList' },
            { path: PathEnum.LOL_OrderList, component: '@/pages/lol/orderList' },
            { path: PathEnum.LOL_HeroDetail, component: '@/pages/lol/heroDetail' },
            { path: PathEnum.LOL_HeroBuy, component: '@/pages/lol/heroBuy' },

            /**404 须放在最下面**/
            { component: '@/pages/404/index' },
        ],
    },
];
