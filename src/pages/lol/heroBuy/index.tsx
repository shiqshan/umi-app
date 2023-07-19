import React, { useEffect, useState } from 'react';
import { Descriptions, Alert, Space, Button, message, Modal } from 'antd';
import styles from './index.less';
import { HeroDetail, lol_api } from '@/api/lol';
import { history } from 'umi';
import { order_api } from '@/api/order';
import { LoadingOutlined } from '@ant-design/icons';

const HeroBuy = (props: any) => {
    console.log('9898', props);
    const [info, setInfo] = useState<HeroDetail>();
    const {
        match: {
            params: { id },
        },
    } = props;

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = () => {
        lol_api.get_detail(id).then((res) => {
            if (res) {
                setInfo(res);
            }
        });
    };

    //创建订单
    const createOrder = () => {
        const bodyData = {
            productId: info?.hero.heroId,
            productInfo: info?.hero,
            orderAmount: info?.hero.goldPrice,
        };
        order_api.create(bodyData).then((res) => {
            if (res?.success) {
                Modal.destroyAll();
                history.push(`/lol/hero-pay/paying/${res.data?.orderId}`);
            } else {
                Modal.destroyAll();
                message.error('下单失败');
            }
        });
    };

    const doOrder = () => {
        Modal.info({
            style: { top: 200 },
            footer: null,
            icon: <LoadingOutlined />,
            content: '正在创建订单,请稍后...',
            afterClose: () => {},
            // maskStyle: { background: 'transparent' },
        });

        setTimeout(() => {
            //下单接口
            createOrder();
        }, 1500);
    };

    return (
        <div className={styles.buy_wrapper}>
            <div>
                <Alert message="下单后记得请及时支付，不要相信第三方支付" type="info" showIcon />
                <Descriptions bordered column={1} style={{ margin: '30px 0' }}>
                    <Descriptions.Item label="购买英雄">{(info?.hero?.name || '') + '-' + (info?.hero?.title || '')}</Descriptions.Item>
                    <Descriptions.Item label="所需金币">{info?.hero?.goldPrice || '-'}</Descriptions.Item>
                    <Descriptions.Item label="当前拥有">10000</Descriptions.Item>
                    <Descriptions.Item label="购买后剩余">3000</Descriptions.Item>
                </Descriptions>
                <div style={{ textAlign: 'center' }}>
                    <Space>
                        <Button type={'default'} onClick={() => history.goBack()}>
                            返回
                        </Button>
                        <Button type={'primary'} onClick={doOrder}>
                            立刻下单
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default HeroBuy;
