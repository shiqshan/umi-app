import React from 'react';
import { Avatar, List, Skeleton } from 'antd';
import { PhoneTwoTone, UnlockTwoTone, BulbTwoTone, MailTwoTone } from '@ant-design/icons';
import { history } from 'umi';
import { PathEnum } from '@/routes';

/**
 * 安全设置
 * @constructor
 */
const SafeSetting = () => {
    return (
        <>
            <h2>{'安全设置'}</h2>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={[1]}
                renderItem={(item) => (
                    <>
                        <List.Item
                            actions={[
                                <a key="list-loadmore-more" onClick={() => history.push(PathEnum.Account_SetPassword)}>
                                    修改
                                </a>,
                            ]}
                        >
                            <List.Item.Meta title={'账户密码'} description={'当前密码强度：强'} avatar={<UnlockTwoTone />} />
                        </List.Item>

                        <List.Item actions={[<a key="list-loadmore-more">修改</a>]}>
                            <List.Item.Meta title={'密保手机'} description={'已绑定手机：138****8293'} avatar={<PhoneTwoTone />} />
                        </List.Item>

                        <List.Item actions={[<a key="list-loadmore-more">设置</a>]}>
                            <List.Item.Meta title={'密保问题'} description={'未设置密保问题'} avatar={<BulbTwoTone />} />
                        </List.Item>

                        <List.Item actions={[<a key="list-loadmore-more">修改</a>]}>
                            <List.Item.Meta title={'绑定邮箱'} description={'已绑定邮箱：ant**sn.com'} avatar={<MailTwoTone />} />
                        </List.Item>
                    </>
                )}
            />
        </>
    );
};

export default SafeSetting;
