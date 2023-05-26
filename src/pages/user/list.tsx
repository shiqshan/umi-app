import React, { useEffect, useRef, useState } from 'react';
import { Space, Table, Form, Input, Button, Popconfirm, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
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
    const [editUserInfo, setEditUserInfo] = useState<UserInfo | null>(null);
    const [params, setParams] = useState({
        page: 1,
        size: 10,
    });
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getList();
        return () => {
            clearTimeout(timer);
        };
    }, [params]);

    const getList = () => {
        setLoading(true);
        user_api.list({ ...params }).then((res) => {
            const { success, data } = res;
            if (success && data) {
                timer = setTimeout(() => {
                    setLoading(false);
                    setData(data.list || []);
                    setTotal(data.total || 0);
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
                    <a onClick={() => editUser(record)}>修改</a>
                    <Popconfirm
                        title="确定删除该用户吗?"
                        onConfirm={() => deleteUser(record.id)}
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        okText="确定"
                        cancelText="取消"
                    >
                        <a>删除</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const doSearch = () => {
        const body = form.getFieldsValue(true);
        setParams({ ...params, ...body });
    };

    const reset = () => {
        form.resetFields();
        setParams({ page: 1, size: 10 });
    };

    const addUser = () => {
        if (addRef) {
            addRef?.current?.open();
        }
    };

    const editUser = (info: UserInfo) => {
        if (addRef) {
            addRef?.current?.open();
            setEditUserInfo(info);
        }
    };

    const deleteUser = (id: string) => {
        user_api.delete({ id: id }).then((res) => {
            const { success } = res;
            if (success) {
                message.success('删除成功！');
                getList();
            } else {
                message.error('删除失败！');
            }
        });
    };

    return (
        <>
            <div className={styles.form}>
                <Form form={form} layout={'inline'}>
                    <Form.Item label="姓名" name="name">
                        <Input width={200} allowClear />
                    </Form.Item>
                    <Form.Item label="手机号" name="tel_number">
                        <Input width={200} allowClear />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type={'primary'} onClick={doSearch}>
                                搜索
                            </Button>
                            <Button onClick={reset}>重置</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
            <Button type={'primary'} onClick={addUser} className={styles.add_btn}>
                添加用户
            </Button>
            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                pagination={{
                    pageSize: params.size,
                    current: params.page,
                    total: total,
                }}
            />
            <AddUser
                ref={addRef}
                data={editUserInfo}
                afterSuccess={getList}
                afterClose={() => {
                    setEditUserInfo(null);
                }}
            />
        </>
    );
};

export default List;
