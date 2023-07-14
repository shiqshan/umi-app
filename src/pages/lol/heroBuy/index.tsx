import React from 'react';
import { Descriptions, Alert, Space, Button, message } from 'antd';
import styles from './index.less';
import { HeroDetail } from '@/api/lol';
import { history } from 'umi';
import { order_api } from '@/api/order';

const HeroBuy = (props: any) => {
    console.log('9898', props);
    const {
        location: { state },
    } = props;
    const info: HeroDetail = state?.info;

    const doBuy = () => {
        order_api.buy({ productId: info?.hero.heroId, orderAmount: info?.hero.goldPrice }).then((res) => {
            if (res?.success) {
                message.success('已购买');
            } else {
                message.error('购买失败');
            }
        });
    };

    return (
        <div className={styles.buy_wrapper}>
            <div>
                <Alert message="确认购买后，无法退回。" type="info" showIcon />
                <Descriptions bordered column={1} style={{ margin: '30px 0' }}>
                    <Descriptions.Item label="购买英雄">{info?.hero.name + '  ' + info?.hero.title}</Descriptions.Item>
                    <Descriptions.Item label="所需金币">{info?.hero.goldPrice}</Descriptions.Item>
                    <Descriptions.Item label="当前拥有">10000</Descriptions.Item>
                    <Descriptions.Item label="购买后剩余">3000</Descriptions.Item>
                </Descriptions>
                <div style={{ textAlign: 'center' }}>
                    <Space>
                        <Button type={'default'} onClick={() => history.goBack()}>
                            返回
                        </Button>
                        <Button type={'primary'} onClick={doBuy}>
                            购买
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default HeroBuy;
