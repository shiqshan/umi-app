import { Input, Drawer, Form, InputNumber, Select, Button, Spin, message } from 'antd';

/**
 * 新增用户抽屉组件
 */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { DrawerProps } from 'antd/lib/drawer';
import { user_api, UserInfo } from '@/api/user';

interface IProps {
    afterSuccess?: () => void;
}

const AddUser = forwardRef((props: DrawerProps & IProps, ref) => {
    const { afterSuccess } = props;
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useImperativeHandle(
        ref,
        () => ({
            open: showDrawer,
            close: onClose,
        }),
        [],
    );

    const onFinish = (values: UserInfo) => {
        setLoading(true);
        user_api.add({ ...values }).then((res) => {
            const { success } = res;
            if (success) {
                message.success('添加成功');
                onClose();
                //成功的回调
                afterSuccess?.();
            } else {
                message.error(res.message || '添加失败');
            }
            setLoading(false);
        });
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return (
        <Spin spinning={loading}>
            <Drawer title="添加用户" placement="right" onClose={onClose} open={open} width={500} maskClosable={false} {...props}>
                <Form form={form} {...layout} onFinish={onFinish}>
                    <Form.Item name={'name'} label="姓名" rules={[{ required: true }]} help={'请输入姓名'}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'id'} label="身份证号" rules={[{ required: true }]} help={'请输入身份证号'}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'age'} label="年龄" rules={[{ required: true }]} help={'请输入年龄'}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={'sex'} label="性别" rules={[{ required: true }]} help={'请选择性别'}>
                        <Select>
                            <Select.Option value={'男'}>男</Select.Option>
                            <Select.Option value={'女'}>女</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={'tel_number'} label="手机号" rules={[{ required: true }]} help={'请填写手机号'}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'address'} label="地址" rules={[{ required: true }]} help={'请填写地址'}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
                            提交
                        </Button>
                        <Button htmlType="button" onClick={onClose}>
                            取消
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </Spin>
    );
});

export default AddUser;
