import type { MenuProps } from 'antd';
import { Dropdown, message, Avatar, Divider } from 'antd';
import React from 'react';
import global from '../../global.less';
import { UserOutlined, PoweroffOutlined, SettingOutlined } from '@ant-design/icons';
import { user_api } from '@/api/user';
import { history } from 'umi';
import { PathEnum } from '@/routes';

const items: MenuProps['items'] = [
    {
        label: '个人中心',
        key: '1',
        icon: <UserOutlined />,
        onClick: () => {
            history.push(PathEnum.Account_Center);
        },
    },
    {
        label: '个人设置',
        key: '2',
        icon: <SettingOutlined />,
        onClick: () => {
            history.push(PathEnum.Account_Setting);
        },
    },
    {
        type: 'divider',
    },
    {
        label: '退出登录',
        key: '3',
        icon: <PoweroffOutlined />,
        onClick: () => {
            user_api.logout().then((res) => {
                if (res.success) {
                    history.push('/');
                }
            });
        },
    },
];

const HeaderUser: React.FC = () => (
    <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        dropdownRender={(menu) => (
            <>
                {menu}
                <Divider style={{ margin: 0 }} />
            </>
        )}
    >
        <a onClick={(e) => e.preventDefault()}>
            <UserAvatar />
        </a>
    </Dropdown>
);

const UserAvatar = () => (
    <div className={global.action}>
        <Avatar size="small" style={{ marginRight: '8px' }} icon={<img src={'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'} />} />
        <span style={{ color: '#fff' }}> {'某个游客'}</span>
    </div>
);

export default HeaderUser;
