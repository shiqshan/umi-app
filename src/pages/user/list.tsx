import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { user_api, UserInfo } from '@/api/user';

let timer: NodeJS.Timeout;

const List = () => {
    const [data, setData] = useState<UserInfo[]>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getList();
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const getList = () => {
        user_api.list().then((res) => {
            const { success, data } = res;
            if (success) {
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

    return (
        <>
            <Table columns={columns} dataSource={data} loading={loading} />
        </>
    );
};

export default List;
