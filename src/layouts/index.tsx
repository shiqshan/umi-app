import React from 'react';
import { Layout, Menu, Breadcrumb, Space } from 'antd';
import styles from './index.less';
import global from '../global.less';
import HeaderUser from '@/components/HeaderUser';
import MyMenu, { BreadcrumbConfig } from '@/menu';

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
            </Header>
            <Layout>
                <Sider width={230} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[pathname]}
                        onSelect={onSelect}
                        defaultOpenKeys={['dashboard']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={MyMenu}
                    />
                </Sider>
                <Layout style={{ padding: '0 16px 16px' }} className={styles.section}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        {BreadcrumbConfig.get(pathname)?.map((item, index) => (
                            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                    <Content className={styles.content}>{children}</Content>
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
