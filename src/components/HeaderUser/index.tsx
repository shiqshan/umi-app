import type { MenuProps } from 'antd';
import { Dropdown, message, Avatar, Divider, Space } from 'antd';
import React from 'react';
import global from '../../global.less';
import { UserOutlined, PoweroffOutlined, SettingOutlined, PayCircleOutlined } from '@ant-design/icons';
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
            <div className={global.action}>{user?.gold && <span>￥ {user.gold}</span>}</div>
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
