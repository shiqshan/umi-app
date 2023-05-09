import React from 'react';
import { Layout, Menu, Breadcrumb, Space } from 'antd';
import styles from './index.less';
import global from '../global.less';
import { Link } from 'umi';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import HeaderUser from '@/components/HeaderUser';

const { Header, Content, Sider, Footer } = Layout;

const menuData = [
    { route: 'hero', name: '英雄' },
    { route: 'item', name: '局内道具' },
    { route: 'summoner', name: '召唤师技能' },
];
const BasicLayout = (props: any) => {
    const {
        location: { pathname },
        children,
    } = props;

    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    });

    return (
        <Layout className={styles.main_layout}>
            <Header className={styles.header}>
                <div className={styles.logo}>
                    <img src={'//game.gtimg.cn/images/lol/v3/logo-public.png'} />
                </div>
                <div style={{ flex: '1 1 0%' }}></div>
                <Space className={styles.header_right}>
                    <HeaderUser />
                    <div className={global.action}></div>
                </Space>
                {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]}>*/}
                {/*    {menuData.map((menu) => (*/}
                {/*        <Menu.Item key={`/${menu.route}`}>*/}
                {/*            <Link to={menu.route}>{menu.name}</Link>*/}
                {/*        </Menu.Item>*/}
                {/*    ))}*/}
                {/*</Menu>*/}
            </Header>
            {/*<Content style={{ padding: '0 50px' }}>*/}
            {/*    <div style={{ background: '#fff', padding: 24, minHeight: 280, overflow: 'hidden' }}>{children}</div>*/}
            {/*</Content>*/}
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={items2} />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
            {/*<Footer style={{ textAlign: 'center' }}>*/}
            {/*    <div id="afooter"></div>*/}
            {/*    <script src="//game.gtimg.cn/images/js/2018foot/foot.js"></script>*/}
            {/*</Footer>*/}
        </Layout>
    );
};

export default BasicLayout;
