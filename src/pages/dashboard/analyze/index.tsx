import React, { CSSProperties, useState } from 'react';
import { Card, Col, Row, Statistic, Tabs, Table, Tooltip, DatePicker } from 'antd';
import Icon, { LikeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import ColumnChart from '@/pages/dashboard/components/Column';
import DemoArea from '@/pages/dashboard/components/Area';
import DemoLiquid from '@/pages/dashboard/components/Liquid';
import DemoGauge from '@/pages/dashboard/components/DemoGauge';
import { ColumnsType } from 'antd/es/table';

const RangePicker: any = DatePicker.RangePicker;
const spanSize: number = 6;
const chartStyle: CSSProperties = {
    height: '120px',
};

export interface IChartProps {
    chartStyle: CSSProperties;
}

interface DataType {
    key: string;
    name: string;
    age: number;
    count: number;
}

/**
 * 数据可视化--分析页
 */
const Analyze = () => {
    const [tabKey, settabKey] = useState('1');

    const dataSource: DataType[] = [
        {
            key: '1',
            name: '工专路 0 号店',
            count: 3300,
            age: 1,
        },
        {
            key: '2',
            name: '工专路 2 号店',
            count: 3300,
            age: 2,
        },
        {
            key: '3',
            name: '工专路 3 号店',
            count: 3300,
            age: 3,
        },
        {
            key: '4',
            name: '工专路 4 号店',
            count: 3300,
            age: 4,
        },
        {
            key: '5',
            name: '工专路 5 号店',
            count: 3300,
            age: 5,
        },
        {
            key: '6',
            name: '工专路 6 号店',
            count: 3300,
            age: 6,
        },
    ];

    const columns: ColumnsType<DataType> = [
        {
            title: '排名',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            render: (text, record, index) => {
                return index === 0 ? <FirstIcon /> : text;
            },
        },
        {
            title: '门店',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: tabKey == '1' ? '销售额' : '访问量',
            dataIndex: 'count',
            key: 'count',
        },
    ];

    return (
        <div>
            <Row justify="space-between" gutter={[16, 16]}>
                <Col span={spanSize}>
                    <Card>
                        <div style={{ position: 'relative' }}>
                            <Statistic title="活跃用户" value={112893} />
                            <CardExtra />
                        </div>
                        <DemoArea chartStyle={chartStyle} />
                    </Card>
                </Col>
                <Col span={spanSize}>
                    <Card>
                        <div style={{ position: 'relative' }}>
                            <Statistic title="总销售额" prefix={'￥'} value={112893} precision={2} />
                            <CardExtra />
                        </div>
                        <ColumnChart chartStyle={chartStyle} />
                    </Card>
                </Col>
                <Col span={spanSize}>
                    <Card>
                        <div style={{ position: 'relative' }}>
                            <Statistic title="点赞数" value={1128} prefix={<LikeOutlined />} />
                            <CardExtra />
                        </div>
                        <DemoLiquid chartStyle={chartStyle} />
                    </Card>
                </Col>
                <Col span={spanSize}>
                    <Card>
                        <div style={{ position: 'relative' }}>
                            <Statistic title="运营效果" value={'80%'} />
                            <CardExtra />
                        </div>
                        <DemoGauge chartStyle={chartStyle} />
                    </Card>
                </Col>
            </Row>

            <div className={styles.tabs_wrap}>
                <Tabs
                    defaultActiveKey={tabKey}
                    onChange={(activeKey) => settabKey(activeKey)}
                    tabBarExtraContent={<RangePicker />}
                    items={[
                        {
                            label: '销售额',
                            key: '1',
                            children: (
                                <Row wrap={false}>
                                    <Col flex={1}>
                                        <ColumnChart chartStyle={{ height: 320 }} />
                                    </Col>
                                    <Col>
                                        <div style={{ width: '370px', padding: '0 32px 32px 72px' }}>
                                            <h3>门店销售额排名</h3>
                                            <Table dataSource={dataSource} columns={columns} bordered={true} pagination={false} size={'small'} />
                                        </div>
                                    </Col>
                                </Row>
                            ),
                        },
                        {
                            label: '访问量',
                            key: '2',
                            children: (
                                <Row wrap={false}>
                                    <Col flex={1}>
                                        <DemoArea chartStyle={{ height: 320 }} />
                                    </Col>
                                    <Col>
                                        <div style={{ width: '370px', padding: '0 32px 32px 72px' }}>
                                            <h3>访问量排名</h3>
                                            <Table dataSource={dataSource} columns={columns} bordered={true} pagination={false} size={'small'} />
                                        </div>
                                    </Col>
                                </Row>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default Analyze;

const CardExtra = () => {
    return (
        <Tooltip title={'指标说明'}>
            <InfoCircleOutlined style={{ position: 'absolute', right: 0, top: 0, lineHeight: '22px', color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
    );
};

const FirstIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M44 4H31L27 14.3001C31.4614 15.2057 35.2038 18.0914 37.2699 22L44 4Z"
                fill="none"
                stroke="#f8e71c"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 4H4L10.7301 22C12.7962 18.0914 16.5386 15.2057 21 14.3001L17 4Z"
                fill="none"
                stroke="#f8e71c"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M39 29C39 37.2843 32.2843 44 24 44C15.7157 44 9 37.2843 9 29C9 26.4718 9.62546 24.0897 10.7301 22C12.7962 18.0914 16.5386 15.2057 21 14.3001C21.9693 14.1033 22.9726 14 24 14C25.0274 14 26.0307 14.1033 27 14.3001C31.4614 15.2057 35.2038 18.0914 37.2699 22C38.3745 24.0897 39 26.4718 39 29Z"
                fill="none"
                stroke="#f8e71c"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M24 35V22L21 23M24 35H28M24 35H20" stroke="#f8e71c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
