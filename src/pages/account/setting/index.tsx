import React, { useState } from 'react';
import styles from './index.less';
import { Menu, Tabs } from 'antd';
import BaseSetting from '@/pages/account/setting/components/BaseSetting';
import SafeSetting from './components/SafeSetting';
import AccountBind from '@/pages/account/setting/components/AccountBind';
import MessageNotice from '@/pages/account/setting/components/MessageNotice';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const AccountSetting = () => {
    const [key, setKey] = useState<string>('1');

    const items: ItemType[] = [
        { label: '基本设置', key: '1' },
        { label: '安全设置', key: '2' },
        { label: '账号绑定', key: '3' },
        { label: '消息通知', key: '4' },
    ];

    const onSelect = ({ key }: any) => {
        setKey(key);
    };

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <Menu items={items} mode="inline" onSelect={onSelect} selectedKeys={[key]} style={{ height: '100%' }} />
            </div>
            <div className={styles.right}>
                {key === '1' && <BaseSetting />}
                {key === '2' && <SafeSetting />}
                {key === '3' && <AccountBind />}
                {key === '4' && <MessageNotice />}
            </div>
        </div>
    );
};

export default AccountSetting;
