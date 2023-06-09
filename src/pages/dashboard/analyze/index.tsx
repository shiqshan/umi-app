/**
 * 数据可视化--分析页
 */
import React, { CSSProperties, useState } from 'react';
import { Card, Col, Row, Statistic, Tabs, Table } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import styles from './index.less';
import ColumnChart from '@/pages/dashboard/components/Column';
import DemoArea from '@/pages/dashboard/components/Area';
import DemoLiquid from '@/pages/dashboard/components/Liquid';
import DemoGauge from '@/pages/dashboard/components/DemoGauge';

const spanSize: number = 6;
const chartStyle: CSSProperties = {
    height: '120px',
};

export interface IChartProps {
    chartStyle: CSSProperties;
}

const Analyze = () => {
    const [tabKey, settabKey] = useState('1');

    const dataSource = [
        {
            key: '1',
            name: '工专路 0 号店',
            count: '3300',
            age: '1',
        },
        {
            key: '2',
            name: '工专路 2 号店',
            count: '3300',
            age: '2',
        },
        {
            key: '3',
            name: '工专路 3 号店',
            count: '3300',
            age: '3',
        },
        {
            key: '4',
            name: '工专路 4 号店',
            count: '3300',
            age: '4',
        },
        {
            key: '5',
            name: '工专路 5 号店',
            count: '3300',
            age: '5',
        },
        {
            key: '6',
            name: '工专路 6 号店',
            count: '3300',
            age: '6',
        },
    ];

    const columns = [
        {
            title: '排名',
            dataIndex: 'age',
            key: 'age',
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
                        <Statistic title="活跃用户" value={112893} />
                        <DemoArea chartStyle={chartStyle} />
                    </Card>
                </Col>
                <Col span={spanSize}>
                    <Card>
                        <Statistic title="总销售额" prefix={'￥'} value={112893} precision={2} />
                        <ColumnChart chartStyle={chartStyle} />
                    </Card>
                </Col>
                <Col span={spanSize}>
                    <Card>
                        <Statistic title="点赞数" value={1128} prefix={<LikeOutlined />} />
                        <DemoLiquid chartStyle={chartStyle} />
                    </Card>
                </Col>
                <Col span={spanSize}>
                    <Card>
                        <Statistic title="运营效果" value={'80%'} />
                        <DemoGauge chartStyle={chartStyle} />
                    </Card>
                </Col>
            </Row>

            <div className={styles.tabs_wrap}>
                <Tabs
                    defaultActiveKey={tabKey}
                    onChange={(activeKey) => settabKey(activeKey)}
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
