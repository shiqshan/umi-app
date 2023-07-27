import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Alert, Button, Card, Col, Descriptions, Divider, Empty, message, Result, Row, Space, Spin, Statistic, Steps, theme } from 'antd';
import { order_api, OrderInfo } from '@/api/order';
import { ResultStatusType } from 'antd/es/result';
import { useDispatch } from '@@/plugin-dva/exports';
import { history } from 'umi';
import { PathEnum } from '@/routes';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 30;
const Paying: React.FC = (props: any) => {
    const {
        match: {
            params: { id },
        },
    } = props;
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);
    const [status, setStatus] = useState<ResultStatusType>('error');
    const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = () => {
        setLoading(true);
        order_api
            .getDetail(id)
            .then((res) => {
                if (res?.success) {
                    setOrderInfo(res.data || null);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const doPay = () => {
        setLoading(true);
        const body = {
            orderId: orderInfo?.orderId || '',
            orderAmount: orderInfo?.orderAmount || 0,
        };
        order_api
            .pay(body)
            .then((res) => {
                if (res?.success) {
                    setStatus('success');
                    next();
                    dispatch({
                        type: 'user/getInfo',
                    });
                } else {
                    setStatus('error');
                    message.error(res?.message);
                    next();
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const resultProps = {
        title: status === 'error' ? '支付失败' : '支付成功',
        subTitle: status === 'error' ? '请检查网络状况或余额' : '你已经成功购买该英雄',
    };

    const steps = [
        {
            title: '订单信息',
            content: (
                <>
                    {orderInfo?.paymentStatus != '1' && (
                        <>
                            <Countdown value={deadline} style={{ textAlign: 'center' }} />
                            <Alert message="支付后物品会直接到账，无法退回，请谨慎操作" type="info" showIcon style={{ margin: '20px 0' }} />
                        </>
                    )}
                    <Descriptions bordered column={1}>
                        <Descriptions.Item label="订单编号">{orderInfo?.orderId}</Descriptions.Item>
                        <Descriptions.Item label="下单时间">{orderInfo?.orderDate}</Descriptions.Item>
                        <Descriptions.Item label="支付状态">{orderInfo?.paymentStatus == '0' ? '待支付' : '已付款'}</Descriptions.Item>
                        <Descriptions.Item label="订单金额">{orderInfo?.orderAmount}</Descriptions.Item>
                    </Descriptions>
                    <Divider />
                    {orderInfo?.paymentStatus != '1' && (
                        <Space style={{ float: 'right' }} direction={'vertical'} align={'end'}>
                            <Space>
                                <span>订单须支付金币：</span>
                                <h2 className={styles.money}>￥{orderInfo?.orderAmount}</h2>
                            </Space>
                            <Button type={'primary'} onClick={doPay}>
                                立即支付
                            </Button>
                        </Space>
                    )}
                </>
            ),
        },
        {
            title: '支付结果',
            content: (
                <>
                    <Result
                        className={styles.result}
                        status={status}
                        {...resultProps}
                        extra={[
                            <Button type="primary" key="console" onClick={() => history.push(PathEnum.LOL_OrderList)}>
                                去订单列表
                            </Button>,
                        ]}
                    >
                        <div>
                            <Descriptions column={1}>
                                <Descriptions.Item label="订单金额">{orderInfo?.orderAmount}</Descriptions.Item>
                                <Descriptions.Item label="订单编号">{orderInfo?.orderId}</Descriptions.Item>
                                <Descriptions.Item label="支付时间">{Date.now()}</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Result>
                </>
            ),
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <Spin spinning={loading}>
            {
                <Card style={{ width: 1000, margin: 'auto' }}>
                    {orderInfo ? (
                        <>
                            <Steps current={current} items={items} />
                            <Row>
                                <Col className={styles.step_content}>{steps[current].content}</Col>
                            </Row>
                        </>
                    ) : (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'对不起，访问的订单不存在'} />
                    )}
                </Card>
            }
        </Spin>
    );
};

export default Paying;
