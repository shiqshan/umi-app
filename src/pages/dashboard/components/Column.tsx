import React from 'react';
import { Column } from '@ant-design/plots';
import { ColumnConfig } from '@ant-design/charts';
import { IChartProps } from '@/pages/dashboard/analyze';

const ColumnChart = ({ chartStyle }: IChartProps) => {
    const data = [
        {
            type: '1',
            sales: 38,
        },
        {
            type: '2',
            sales: 52,
        },
        {
            type: '3',
            sales: 61,
        },
        {
            type: '4',
            sales: 61,
        },
        {
            type: '5',
            sales: 23,
        },
        {
            type: '6',
            sales: 32,
        },
        {
            type: '7',
            sales: 45,
        },
    ];

    const config: ColumnConfig = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        columnStyle: {
            // lineWidth: 1,
        },
        yAxis: {},
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
    };
    return <Column {...config} style={{ ...chartStyle }} />;
};

export default ColumnChart;
