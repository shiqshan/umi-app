import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Space } from 'antd';
import styles from './index.less';
import global from '../global.less';
import HeaderUser from '@/components/HeaderUser';
import MyMenu, { BreadcrumbConfig } from '@/menu';
import { IRouteComponentProps } from 'umi';

const { Header, Content, Sider, Footer } = Layout;

const BasicLayout = (props: any) => {
    const {
        location: { pathname },
        children,
        history,
        match,
    }: IRouteComponentProps = props;
    const [path, setPath] = useState<string>(pathname);
    // console.log('9898', location, match);

    useEffect(() => {
        // history的listen方法可以监听路径的修改
        history.listen((location: { pathname: string }) => {
            setPath(location.pathname);
        });
    }, []);

    const onSelect = ({ item, key, keyPath }: any) => {
        console.log('9898', key);
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
                        // defaultSelectedKeys={[pathname]}
                        selectedKeys={[path]}
                        onSelect={onSelect}
                        defaultOpenKeys={MyMenu?.map((item) => item?.key as string)}
                        style={{ height: '100%', borderRight: 0 }}
                        items={MyMenu}
                    />
                </Sider>
                <Layout style={{ padding: '0 16px 16px' }} className={styles.section} id={'my-section'}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={BreadcrumbConfig.get(path)?.map((item, index) => ({ title: item }))} />
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
