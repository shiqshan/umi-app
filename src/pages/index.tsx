import { connect, ConnectProps, History } from 'umi';
import styles from './index.less';
import { Button, Checkbox, Divider, Form, Input, message, Space } from 'antd';
import React, { useMemo, useState } from 'react';
import { ILoginParams, user_api } from '@/api/user';
import Icon, { UserOutlined, LockOutlined, WechatFilled } from '@ant-design/icons';
import Login from '@/pages/login/login';
import Register from '@/pages/login/register';

const IndexPage = ({ history }: { history: History }) => {
    return (
        <div>
            <Login />
        </div>
    );
};

export default IndexPage;
