import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';
import { Link } from 'umi';

const { Header, Content, Footer } = Layout;

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
    return (
        <Layout>
            <Header>
                <div className={styles.logo}>
                    <img src={'//game.gtimg.cn/images/lol/v3/logo-public.png'} />
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]} style={{ lineHeight: '64px' }}>
                    {menuData.map((menu) => (
                        <Menu.Item key={`/${menu.route}`}>
                            <Link to={menu.route}>{menu.name}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280, overflow: 'hidden' }}>{children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <div id="afooter"></div>
                <script src="//game.gtimg.cn/images/js/2018foot/foot.js"></script>
            </Footer>
        </Layout>
    );
};

export default BasicLayout;
