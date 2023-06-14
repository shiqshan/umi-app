import React from 'react';
import { List, Switch } from 'antd';
import { SoundTwoTone } from '@ant-design/icons';

/**
 * 消息通知
 * @constructor
 */
const MessageNotice = () => {
    return (
        <>
            <h2>{'消息通知'}</h2>

            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={[1]}
                renderItem={(item) => (
                    <>
                        <List.Item actions={[<Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />]}>
                            <List.Item.Meta title={'账户消息'} description={'其他用户的消息将以站内信的形式通知'} avatar={<SoundTwoTone />} />
                        </List.Item>

                        <List.Item actions={[<Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />]}>
                            <List.Item.Meta title={'系统消息'} description={'系统消息将以站内信的形式通知'} avatar={<SoundTwoTone />} />
                        </List.Item>

                        <List.Item actions={[<Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />]}>
                            <List.Item.Meta title={'待办任务'} description={'待办任务将以站内信的形式通知'} avatar={<SoundTwoTone />} />
                        </List.Item>
                    </>
                )}
            />
        </>
    );
};

export default MessageNotice;
