import React from 'react';
import { Button, Result } from 'antd';
import { history } from 'umi';
import { PathEnum } from '@/routes';

const NotFound: React.FC = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="页面未找到"
                extra={
                    <Button type="primary" onClick={() => history.push(PathEnum.Dashboard_Analyze)}>
                        回到首页
                    </Button>
                }
            />
        </div>
    );
};

export default NotFound;
