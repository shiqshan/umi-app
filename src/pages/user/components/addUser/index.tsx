import { Input, Drawer, Form, InputNumber, Select, Button, Spin, message } from 'antd';

/**
 * 新增用户抽屉组件
 */
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { DrawerProps } from 'antd/lib/drawer';
import { user_api, UserInfo } from '@/api/user';

interface IProps {
    afterSuccess?: () => void;
    afterClose?: () => void;
    data?: UserInfo | null;
}

const AddUser = forwardRef((props: DrawerProps & IProps, ref) => {
    const { afterSuccess, data, afterClose } = props;
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data) {
            form.setFieldsValue({ ...data });
        }
    }, [data]);

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
        if (data) {
            user_api.update({ ...values }).then((res) => {
                const { success } = res;
                if (success) {
                    message.success('修改成功');
                    onClose();
                    //成功的回调
                    afterSuccess?.();
                } else {
                    message.error(res.message || '修改失败');
                }
                setLoading(false);
            });
        } else {
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
        }
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        form.resetFields();
        afterClose?.();
    };

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return (
        <Drawer title="添加用户" placement="right" onClose={onClose} open={open} width={750} maskClosable={false} {...props}>
            <Spin spinning={loading}>
                <Form form={form} {...layout} onFinish={onFinish}>
                    <Form.Item name={'name'} label="姓名" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'id'} label="身份证号" rules={[{ required: true }]}>
                        <Input disabled={data ? true : false} />
                    </Form.Item>
                    <Form.Item name={'age'} label="年龄" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={'sex'} label="性别" rules={[{ required: true }]}>
                        <Select>
                            <Select.Option value={'男'}>男</Select.Option>
                            <Select.Option value={'女'}>女</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={'tel_number'} label="手机号" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'address'} label="地址" rules={[{ required: true }]}>
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
            </Spin>
        </Drawer>
    );
});

export default AddUser;
