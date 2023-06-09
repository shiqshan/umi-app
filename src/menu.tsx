import React from 'react';
import { MenuProps } from 'antd';
import { UserOutlined, DashboardOutlined } from '@ant-design/icons';

//路由面包屑Map
export const BreadcrumbConfig = new Map<string, string[]>([
    ['/user/list', ['用户管理', '用户列表']],
    ['/user/detail', ['用户管理', '用户详情']],
    ['/dashboard/analyze', ['数据可视化', '分析页']],
    ['/dashboard/workbench', ['数据可视化', '工作台']],
]);

const MyMenu: MenuProps['items'] = [
    {
        key: `dashboard`,
        icon: <DashboardOutlined />,
        label: `数据可视化`,
        children: [
            {
                key: `/dashboard/analyze`,
                icon: null,
                label: `分析页`,
            },
            {
                key: `/dashboard/workbench`,
                icon: null,
                label: `工作台`,
            },
        ],
    },
    {
        key: `user`,
        icon: <UserOutlined />,
        label: `用户管理`,
        children: [
            {
                key: `/user/list`,
                icon: null,
                label: `用户列表`,
            },
            {
                key: `/user/detail`,
                icon: null,
                label: `用户详情`,
            },
        ],
    },
];

export default MyMenu;
