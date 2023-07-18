import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Descriptions, InputNumber, message, Row, Select, Steps, Input, Divider, Result, Space, Alert, Modal } from 'antd';
import styles from './index.less';
import { connect } from 'umi';
import { user_api, UserInfo } from '@/api/user';
import loading from '@/Loading';
import { LoadingOutlined } from '@ant-design/icons';
import { ResultStatusType } from 'antd/es/result';
import { useDispatch } from '@@/plugin-dva/exports';

let timer: NodeJS.Timer;
const Recharge = ({ user }: { user: UserInfo }) => {
    const [form] = Form.useForm();
    const [form_2] = Form.useForm();
    const dispatch = useDispatch();

    const [current, setCurrent] = useState(0);
    const [status, setStatus] = useState<ResultStatusType>('error');
    const options = [
        {
            label: user?.username,
            value: user?.username,
        },
    ];

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const initialValues = { username: options[0].value, username2: options[0].value, amount: 2000 };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    //充值接口
    const doRecharge = () => {
        user_api.set_gold({ gold: 500 }).then((res) => {
            Modal.destroyAll();
            if (res?.success && res.code == 1) {
                setStatus('success');
                dispatch({
                    type: 'user/getInfo',
                });
            } else {
                setStatus('error');
            }
        });
    };

    const resultProps = {
        title: status === 'error' ? '充值失败' : '充值成功',
        subTitle: status === 'error' ? '请检查网络状况' : '预计两小时内到账',
    };

    const steps = [
        {
            title: '填写充值信息',
            content: (
                <>
                    <Form layout="vertical" autoComplete="off" form={form} initialValues={initialValues} onFinish={undefined}>
                        <Form.Item name="username" label="充值账户" rules={[{ required: true, message: '请选择充值账户' }]}>
                            <Select style={{ width: 328 }} options={options} />
                        </Form.Item>
                        <Form.Item name="username2" label="收款账户" rules={[{ required: true, message: '请选择充值账户' }]}>
                            <Select style={{ width: 328 }} options={options} />
                        </Form.Item>
                        <Form.Item name="amount" label="充值金额" rules={[{ required: true, message: '请输入充值金额' }]}>
                            <InputNumber prefix="￥" style={{ width: 328 }} step={500} />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                onClick={() => {
                                    form.validateFields().then((res) => {
                                        next();
                                    });
                                }}
                            >
                                下一步
                            </Button>
                        </Form.Item>
                    </Form>
                </>
            ),
        },
        {
            title: '确认充值信息',
            content: (
                <>
                    <Alert message="确认充值后，资金将直接打入账户，无法退回。" type="info" showIcon style={{ marginBottom: 24 }} />
                    <Descriptions bordered column={1}>
                        <Descriptions.Item label="充值账户">{initialValues.username}</Descriptions.Item>
                        <Descriptions.Item label="收款账户">{initialValues.username2}</Descriptions.Item>
                        <Descriptions.Item label="充值金额">{initialValues.amount}</Descriptions.Item>
                    </Descriptions>
                    <Divider />
                    <Form layout="vertical" autoComplete="off" initialValues={{ password: 123456 }} form={form_2}>
                        <Form.Item name="password" label="支付密码" rules={[{ required: true, message: '请输入支付密码' }]}>
                            <Input.Password style={{ width: 328 }} />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button onClick={prev}>上一步</Button>
                                <Button
                                    type="primary"
                                    onClick={() => {
                                        form_2.validateFields().then((res) => {
                                            Modal.info({
                                                style: { top: 200 },
                                                footer: null,
                                                icon: <LoadingOutlined />,
                                                content: '正在充值,请稍后...',
                                                afterClose: () => {
                                                    next();
                                                },
                                                // maskStyle: { background: 'transparent' },
                                            });
                                            timer = setTimeout(() => {
                                                doRecharge();
                                            }, 2000);
                                        });
                                    }}
                                >
                                    确定
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </>
            ),
        },
        {
            title: '完成',
            content: (
                <>
                    <Result
                        className={styles.result}
                        status={status}
                        {...resultProps}
                        extra={[
                            <Button type="primary" key="console" onClick={() => setCurrent(0)}>
                                继续充值
                            </Button>,
                            <Button key="buy">查看账单</Button>,
                        ]}
                    >
                        <div>
                            <Descriptions column={1}>
                                <Descriptions.Item label="充值账户">{initialValues.username}</Descriptions.Item>
                                <Descriptions.Item label="收款账户">{initialValues.username2}</Descriptions.Item>
                                <Descriptions.Item label="充值金额">{initialValues.amount}</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </Result>
                </>
            ),
        },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return (
        <>
            <Card>
                <Steps
                    style={{ maxWidth: '960px', margin: 'auto' }}
                    current={current}
                    items={items}
                    // status='error'
                />
                <Row>
                    <Col className={styles.step_content}>{steps[current].content}</Col>
                </Row>
            </Card>
        </>
    );
};

export default connect(({ user }: { user: UserInfo }) => ({ user: user }), null)(Recharge);
