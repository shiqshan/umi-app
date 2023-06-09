import React from 'react';
import { Liquid } from '@ant-design/plots';
import { LiquidConfig } from '@ant-design/charts';
import { Statistic } from '@antv/g2plot/src/types';
import { IChartProps } from '@/pages/dashboard/analyze';

const DemoLiquid = ({ chartStyle }: IChartProps) => {
    const config: LiquidConfig = {
        percent: 0.25,
        // @ts-ignore
        shape: (x, y, width, height) => {
            const path = [];
            const w = Math.min(width, height);

            for (let i = 0; i < 5; i++) {
                path.push([
                    i === 0 ? 'M' : 'L',
                    (Math.cos(((18 + i * 72) * Math.PI) / 180) * w) / 2 + x,
                    (-Math.sin(((18 + i * 72) * Math.PI) / 180) * w) / 2 + y,
                ]);
                path.push(['L', (Math.cos(((54 + i * 72) * Math.PI) / 180) * w) / 4 + x, (-Math.sin(((54 + i * 72) * Math.PI) / 180) * w) / 4 + y]);
            }

            path.push(['Z']);
            return path;
        },
        statistic: {
            content: {
                style: {
                    fontSize: '12px',
                },
            },
        },
        outline: {
            border: 2,
            distance: 4,
            style: {
                stroke: '#FFC100',
                strokeOpacity: 0.65,
            },
        },
        wave: {
            length: 128,
        },
        theme: {
            styleSheet: {
                brandColor: '#FAAD14',
            },
        },
    };
    return <Liquid {...config} style={{ ...chartStyle }} />;
};

export default DemoLiquid;
