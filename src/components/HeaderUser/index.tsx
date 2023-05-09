import type { MenuProps } from 'antd';
import { Dropdown, message, Avatar, Divider } from 'antd';
import React from 'react';
import global from '../../global.less';
import { UserOutlined, PoweroffOutlined, SettingOutlined } from '@ant-design/icons';

const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
    {
        label: '个人中心',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '个人设置',
        key: '2',
        icon: <SettingOutlined />,
    },
    {
        type: 'divider',
    },
    {
        label: '退出登录',
        key: '3',
        icon: <PoweroffOutlined />,
    },
];

const HeaderUser: React.FC = () => (
    <Dropdown
        menu={{ items, onClick }}
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
