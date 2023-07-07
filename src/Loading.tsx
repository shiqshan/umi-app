import React from 'react';
import { Spin } from 'antd';

//全局loading组件
const Loading = () => (
    <div style={{ height: '100%', paddingTop: '150px', display: 'flex', justifyContent: 'center' }}>
        <Spin spinning={true} />
    </div>
);

export default Loading;
