import React, { ComponentRef, useEffect, useRef, useState } from 'react';
import { Space, Table, Form, Input, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { user_api, UserInfo } from '@/api/user';
import styles from './list.less';
import AddUser from '@/pages/user/components/addUser';

let timer: NodeJS.Timeout;

interface AddRef {
    open: () => void;
    close: () => void;
}

const List = () => {
    const addRef = useRef<AddRef>(null);
    const [form] = Form.useForm();

    const [data, setData] = useState<UserInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getList();
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const getList = () => {
        setLoading(true);
        user_api.list().then((res) => {
            const { success, data } = res;
            if (success && data) {
                timer = setTimeout(() => {
                    setLoading(false);
                    setData(data);
                }, 500);
            }
        });
    };

    const columns: ColumnsType<UserInfo> = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '手机号',
            dataIndex: 'tel_number',
            key: 'tel_number',
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>编辑</a>
                    <a>删除</a>
                </Space>
            ),
        },
    ];

    const doSearch = () => {
        const body = form.getFieldsValue(true);
        getList();
    };

    const reset = () => {
        form.resetFields();
        getList();
    };

    const addUser = () => {
        if (addRef) {
            addRef?.current?.open();
        }
    };
    return (
        <>
            <div className={styles.form}>
                <Form form={form} layout={'inline'}>
                    <Form.Item label="姓名" name="username">
                        <Input width={200} allowClear />
                    </Form.Item>
                    <Form.Item label="手机号" name="tel_number">
                        <Input width={200} allowClear />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button onClick={reset}>重置</Button>
                            <Button type={'primary'} onClick={doSearch}>
                                搜索
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
                <Button type={'primary'} onClick={addUser}>
                    添加用户
                </Button>
            </div>
            <Table columns={columns} dataSource={data} loading={loading} />
            <AddUser ref={addRef} />
        </>
    );
};

export default List;
