import React from 'react';
import { Descriptions, Alert, Space, Button } from 'antd';
import styles from './index.less';
import { HeroDetail } from '@/api/lol';

const HeroBuy = (props: any) => {
    console.log('9898', props);
    const {
        location: { state },
    } = props;
    const info: HeroDetail = state?.info;
    return (
        <div className={styles.buy_wrapper}>
            <div>
                <Alert message="确认购买后，无法退回。" type="info" showIcon />
                <Descriptions bordered column={1} style={{ margin: '30px 0' }}>
                    <Descriptions.Item label="购买英雄">{info.hero.name + '  ' + info.hero.title}</Descriptions.Item>
                    <Descriptions.Item label="所需金币">{info.hero.goldPrice}</Descriptions.Item>
                    <Descriptions.Item label="当前拥有">10000</Descriptions.Item>
                    <Descriptions.Item label="购买后剩余">3000</Descriptions.Item>
                </Descriptions>
                <div style={{ textAlign: 'center' }}>
                    <Space>
                        <Button type={'default'}>不买了</Button>
                        <Button type={'primary'}>下单</Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default HeroBuy;
