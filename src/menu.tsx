import React from 'react';
import { MenuProps } from 'antd';
import { UserOutlined, DashboardOutlined, IdcardOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { PathEnum } from '@/routes';

//路由面包屑Map
export const BreadcrumbConfig = new Map<string, string[]>([
    [PathEnum.Dashboard_Analyze, ['数据可视化', '分析页']],
    [PathEnum.Dashboard_Workbench, ['数据可视化', '工作台']],
    [PathEnum.Dashboard_Rotate, ['数据可视化', '旋转动画']],
    [PathEnum.User_List, ['用户管理', '用户列表']],
    [PathEnum.User_Detail, ['用户管理', '用户详情']],
    [PathEnum.Account_Center, ['个人管理', '个人中心']],
    [PathEnum.Account_Setting, ['个人管理', '个人设置']],
    [PathEnum.LOL_HeroList, ['英雄联盟', '英雄列表']],
    [PathEnum.LOL_OrderList, ['英雄联盟', '购买记录']],
]);

const MyMenu: MenuProps['items'] = [
    {
        key: `dashboard`,
        icon: <DashboardOutlined />,
        label: `数据可视化`,
        children: [
            {
                key: PathEnum.Dashboard_Analyze,
                icon: null,
                label: `分析页`,
            },
            {
                key: PathEnum.Dashboard_Workbench,
                icon: null,
                label: `工作台`,
            },
            {
                key: PathEnum.Dashboard_Rotate,
                icon: null,
                label: `旋转动画`,
            },
        ],
    },
    {
        key: `lol`,
        icon: <GooglePlusOutlined />,
        label: `英雄联盟`,
        children: [
            {
                key: PathEnum.LOL_HeroList,
                icon: null,
                label: `英雄列表`,
            },
            {
                key: PathEnum.LOL_OrderList,
                icon: null,
                label: `购买记录`,
            },
        ],
    },
    {
        key: `user`,
        icon: <UserOutlined />,
        label: `用户管理`,
        children: [
            {
                key: PathEnum.User_List,
                icon: null,
                label: `用户列表`,
            },
            {
                key: PathEnum.User_Detail,
                icon: null,
                label: `用户详情`,
            },
        ],
    },
    {
        key: `account`,
        icon: <IdcardOutlined />,
        label: `个人管理`,
        children: [
            {
                key: PathEnum.Account_Center,
                icon: null,
                label: `个人中心`,
            },
            {
                key: PathEnum.Account_Setting,
                icon: null,
                label: `个人设置`,
            },
        ],
    },
];

export default MyMenu;
