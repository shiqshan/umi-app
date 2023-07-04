import type { MenuProps } from 'antd';
import { Dropdown, message, Avatar, Divider } from 'antd';
import React from 'react';
import global from '../../global.less';
import { UserOutlined, PoweroffOutlined, SettingOutlined } from '@ant-design/icons';
import { user_api, UserInfo } from '@/api/user';
import { connect, history } from 'umi';
import { PathEnum } from '@/routes';
import { ConnectProps } from '@@/plugin-dva/connect';

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

const defaultImg = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

interface IProps extends ConnectProps {
    user?: UserInfo;
}

const HeaderUser: React.FC<IProps> = (props) => {
    const { user } = props;

    return (
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
                    <Avatar size="small" style={{ marginRight: '8px' }} icon={<img src={user?.avatar || defaultImg} />} />
                    <span style={{ color: '#fff' }}>{user?.nickname || user?.username}</span>
                </div>
            </a>
        </Dropdown>
    );
};

export default connect(({ user }: { user: UserInfo }) => ({ user: user }))(HeaderUser);
