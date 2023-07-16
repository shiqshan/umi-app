import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Popconfirm, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { order_api, OrderInfo } from '@/api/order';
import styles from './index.less';
import { heroAvatarApi } from '@/api/lol';

const OrderList = () => {
    const [data, setData] = useState<OrderInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [params, setParams] = useState({
        page: 1,
        size: 10,
    });
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getList();
    }, [params]);

    const getList = () => {
        setLoading(true);
        order_api.list({ ...params }).then((res) => {
            const { success, data } = res || { success: true, data: [] };
            if (success && data) {
                setData(data.list || []);
                setTotal(data.total || 0);
                setLoading(false);
            }
        });
    };

    const columns: ColumnsType<OrderInfo> = [
        {
            title: '订单编号',
            dataIndex: 'orderId',
            key: 'orderId',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '商品信息',
            dataIndex: 'productId',
            key: 'productId',
            render: (_, record) => (
                <div className={styles.avatar_wrap}>
                    <Avatar shape="square" size={48} src={`${heroAvatarApi}/${record?.productInfo?.alias}.png`} />
                    {record.productInfo ? (
                        <div style={{ marginLeft: '8px' }}>
                            <div className={styles.avatar_title}>{record?.productInfo?.name + '-' + record?.productInfo?.title}</div>
                            <div className={styles.avatar_desc}>￥{record.productInfo.goldPrice}</div>
                        </div>
                    ) : null}
                </div>
            ),
        },
        {
            title: '支付金额',
            dataIndex: 'orderAmount',
            key: 'orderAmount',
        },
        {
            title: '支付状态',
            dataIndex: 'orderStatus',
            key: 'orderStatus',
            render: () => <Badge status="success" text={'已支付'} />,
        },
        {
            title: '下单日期',
            dataIndex: 'orderDate',
            key: 'orderDate',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={undefined}>修改</a>
                    <Popconfirm
                        title="确定删除该用户吗?"
                        onConfirm={undefined}
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

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                size={'small'}
                rowKey={(record) => record.orderId}
                scroll={{ y: 560 }}
                pagination={{
                    pageSize: params.size,
                    current: params.page,
                    total: total,
                    onChange: (page, pageSize) => {
                        setParams({ ...params, page: page });
                    },
                }}
            />
        </>
    );
};

export default OrderList;
