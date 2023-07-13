import React, { useState } from 'react';
import styles from './index.less';
import { Alert, Button, Card, Form, Input, message } from 'antd';
import { user_api } from '@/api/user';
import { ValidateStatus } from 'antd/es/form/FormItem';

interface IMessage {
    message: string;
    status: ValidateStatus;
}

const SetPassword = () => {
    const [form] = Form.useForm();

    const [okPasswordStatus, setOkPasswordStatus] = useState<ValidateStatus>('validating');
    const [oldStatus, setOldStatus] = useState<IMessage>({ message: '', status: '' });

    const onFinish = (values: any) => {
        console.log('Success:', values);
        if (values.newPassword !== values.okPassword) {
            setOkPasswordStatus('error');
        }
        user_api.set_password({ ...values }).then((res) => {
            // code == 0, 原密码不正确  code == 500， 修改失败
            if (res?.success && res.code === 1) {
                message.success('修改成功');
            } else if (res.code === 0) {
                setOldStatus({ message: '旧密码不正确', status: 'error' });
            } else {
                message.error('修改失败');
            }
        });
    };

    const onFinishFailed = ({ values, errorFields }: any) => {
        console.log('9898', errorFields);
        // @ts-ignore
        errorFields.map((item) => {
            if (item.name?.[0] === 'okPassword') {
                setOkPasswordStatus('error');
            }
            if (item.name?.[0] === 'oldPassword') {
                setOldStatus({
                    message: item.errors?.[0],
                    status: 'error',
                });
            }
        });
    };

    return (
        <div style={{ padding: '60px 30px 30px 30px' }}>
            <Alert message="密码是账号的安全保证， 请谨慎修改，不要轻易将密码告诉他人！" type="error" style={{ width: 1000, margin: '0 auto' }} />
            <div className={styles.main}>
                <Card title="修改密码" style={{ width: 1000 }}>
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="旧密码"
                            name="oldPassword"
                            help={oldStatus.message}
                            validateStatus={oldStatus.status}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入旧密码',
                                },
                            ]}
                        >
                            <Input
                                placeholder={'请输入旧密码'}
                                onChange={(e) => {
                                    setOldStatus({ message: '', status: '' });
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="新密码" name="newPassword" rules={[{ required: true, message: '请输入新密码' }]}>
                            <Input placeholder={'请输入新密码'} />
                        </Form.Item>

                        <Form.Item
                            label="确认新密码"
                            name="okPassword"
                            validateStatus={okPasswordStatus}
                            help={okPasswordStatus === 'error' && '两次密码不一致'}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                placeholder={'再次输入新密码'}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value !== form.getFieldValue('newPassword')) {
                                        setOkPasswordStatus('error');
                                    } else {
                                        setOkPasswordStatus('validating');
                                    }
                                }}
                            />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                确认修改
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default SetPassword;
