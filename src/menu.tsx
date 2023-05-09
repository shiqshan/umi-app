import React from 'react';
import { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const MyMenu: MenuProps['items'] = [
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
