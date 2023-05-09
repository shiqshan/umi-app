import React from 'react';
import { Layout, Menu, Breadcrumb, Space } from 'antd';
import styles from './index.less';
import global from '../global.less';
import HeaderUser from '@/components/HeaderUser';
import MyMenu from '@/menu';

const { Header, Content, Sider, Footer } = Layout;

const BasicLayout = (props: any) => {
    const {
        location: { pathname },
        children,
        history,
    } = props;
    // console.log('9898', location, children);

    const onSelect = ({ item, key, keyPath }: any) => {
        history.push(`${key}`);
    };
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
            <Layout>
                <Sider width={230} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[pathname]}
                        onSelect={onSelect}
                        defaultOpenKeys={['user']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={MyMenu}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 16,
                            margin: 0,
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
