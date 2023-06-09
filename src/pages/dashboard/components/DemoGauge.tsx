import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/plots';
import { GaugeConfig } from '@ant-design/charts';
import { IChartProps } from '@/pages/dashboard/analyze';

const DemoGauge = ({ chartStyle }: IChartProps) => {
    const config: GaugeConfig = {
        percent: 0.85,
        range: {
            color: '#30BF78',
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
            pin: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
        },
        axis: {
            label: {
                formatter(v) {
                    return Number(v) * 100;
                },
            },
            subTickLine: {
                count: 3,
            },
        },
        statistic: {
            content: {
                // formatter: ({ percent }) => `Rate: ${(percent * 100).toFixed(0)}%`,
                style: {
                    color: 'rgba(0,0,0,0.65)',
                    fontSize: '12px',
                },
            },
        },
    };
    return <Gauge {...config} style={{ ...chartStyle }} />;
};

export default DemoGauge;
