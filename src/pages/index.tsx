import { History, request, useRequest } from 'umi';
import styles from './index.less';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { ILoginParams, user_api } from '@/api/user';

const IndexPage = ({ history }: { history: History }) => {
    const [loading, setLoading] = useState<boolean>(false);

    const onFinish = (values: ILoginParams) => {
        doLogin({ ...values });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const doLogin = ({ username, password }: ILoginParams) => {
        user_api.login({ username, password }).then((res) => {
            console.log(res);
            const { success, data } = res;
            if (success || true) {
                setLoading(false);
                history.push(`/home`);
            }
        });
    };

    return (
        <div className={styles.main}>
            <div className={styles.form_wrap}>
                <h2>登录你的账户</h2>
                <Form
                    className={styles.login_form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" block size={'large'} className={styles.login_btn} loading={loading}>
                        登录
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default IndexPage;
