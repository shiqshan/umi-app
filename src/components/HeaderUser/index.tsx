import type { MenuProps } from 'antd';
import { Dropdown, message, Avatar, Divider, Space } from 'antd';
import React from 'react';
import global from '../../global.less';
import Icon, { UserOutlined, PoweroffOutlined, SettingOutlined, PayCircleOutlined } from '@ant-design/icons';
import { user_api, UserInfo } from '@/api/user';
import { connect, history } from 'umi';
import { PathEnum } from '@/routes';
import { ConnectProps } from '@@/plugin-dva/connect';
import { downlodad } from '@/api/util';

const items: MenuProps['items'] = [
    {
        label: '充值',
        key: '0',
        icon: <PayCircleOutlined />,
        onClick: () => {
            history.push(PathEnum.User_Recharge);
        },
    },
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
                    history.push('/login');
                }
            });
        },
    },
];

const defaultImg = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

interface IProps extends ConnectProps {
    user?: UserInfo;
}

const HeaderUser: React.FC<IProps> = (props) => {
    const { user } = props;

    return (
        <Space>
            <div className={global.action}>
                <Icon component={GoldSvg} style={{ marginRight: '8px' }} />
                <span>{user?.gold ?? 0}</span>
            </div>
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
                    {/*<UserAvatar />*/}
                    <div className={global.action}>
                        <Avatar size="small" style={{ marginRight: '8px' }} icon={<img src={user?.avatar ? downlodad(user.avatar) : defaultImg} />} />
                        <span style={{ color: '#fff' }}>{user?.nickname || user?.username}</span>
                    </div>
                </a>
            </Dropdown>
        </Space>
    );
};

export default connect(({ user }: { user: UserInfo }) => ({ user: user }))(HeaderUser);

const GoldSvg = () => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="14" cy="10" rx="10" ry="5" stroke="#f8e71c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M4 10C4 10 4 14.2386 4 17C4 19.7614 8.47715 22 14 22C19.5228 22 24 19.7614 24 17C24 15.3644 24 10 24 10"
            stroke="#f8e71c"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 17C4 17 4 21.2386 4 24C4 26.7614 8.47715 29 14 29C19.5228 29 24 26.7614 24 24C24 22.3644 24 17 24 17"
            stroke="#f8e71c"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 24C4 24 4 28.2386 4 31C4 33.7614 8.47715 36 14 36C19.5228 36 24 33.7614 24 31C24 29.3644 24 24 24 24"
            stroke="#f8e71c"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4 31C4 31 4 35.2386 4 38C4 40.7614 8.47715 43 14 43C19.5228 43 24 40.7614 24 38C24 36.3644 24 31 24 31"
            stroke="#f8e71c"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <ellipse cx="34" cy="24" rx="10" ry="5" stroke="#f8e71c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M24 24C24 24 24 28.2386 24 31C24 33.7614 28.4772 36 34 36C39.5228 36 44 33.7614 44 31C44 29.3644 44 24 44 24"
            stroke="#f8e71c"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M24 31C24 31 24 35.2386 24 38C24 40.7614 28.4772 43 34 43C39.5228 43 44 40.7614 44 38C44 36.3644 44 31 44 31"
            stroke="#f8e71c"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
