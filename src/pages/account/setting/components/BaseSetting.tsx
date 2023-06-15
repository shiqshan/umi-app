import React from 'react';
import { Button, Image, message, Space, Upload, Form, InputNumber, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import styles from '../index.less';

/**
 * 基本设置
 * @constructor
 */
const BaseSetting = () => {
    const props: UploadProps = {
        beforeUpload: (file) => {
            const isPNG = file.type === 'image/png';
            if (!isPNG) {
                message.error(`${file.name} is not a png file`);
            }
            return isPNG || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
            console.log(info.fileList);
        },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <>
            <h2>{'基本设置'}</h2>
            <Space align={'end'} style={{ marginLeft: '26px', marginBottom: '24px' }}>
                <Image width={80} src={require('@/public/icon/ikunAvatar.webp')} />
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>上传新头像</Button>
                </Upload>
            </Space>
            <div className={styles.base_set_form}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{ width: '500px' }}>
                    <Form.Item name={['user', 'name']} label="姓名" rules={[{ required: true }]}>
                        <Input defaultValue={'ikun小黑子'} />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="年龄" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber defaultValue={28} />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="网址">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="个人说明">
                        <Input.TextArea defaultValue={'一个真正的man，必须要会唱跳rap篮球！'} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            提交修改
                        </Button>
                    </Form.Item>
                </Form>

                <Image width={300} src={require('@/public/icon/ikun.webp')} />
            </div>
        </>
    );
};

export default BaseSetting;
