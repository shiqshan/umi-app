import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Card, Col, Divider, Input, Row, Empty, Tag } from 'antd';
import type { InputRef } from 'antd';
import { ConsoleSqlOutlined, GlobalOutlined, LaptopOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './index.less';
import { Link } from 'umi';
import { PathEnum } from '@/routes';

const img_1 = 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png';
const img_2 = 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png';
const img_3 = 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png';
const img_4 = 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png';

/**
 * 个人中心
 * @constructor
 */
const AccountCenter = () => {
    const [tags, setTags] = useState<string[]>(['大长腿', '幽默']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    const [tabKey, setTabKey] = useState<string>('1');

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const tabContent: Record<string, React.ReactNode> = {
        article: <p>article content</p>,
        app: <p>app content</p>,
        project: <p>project content</p>,
    };

    const tabTitle = [
        {
            key: '1',
            tab: `推荐文章`,
        },
        {
            key: '2',
            tab: `热门应用`,
        },
        {
            key: '3',
            tab: `简单项目`,
        },
    ];

    return (
        <>
            <Row wrap={false}>
                <Col flex={'0 0 30%'} style={{ minWidth: '300px', padding: '0 12px' }}>
                    <Card>
                        <div className={styles.avatar_wrap}>
                            <img src={require('@/public/icon/ikunAvatar.webp')} />
                            <h3>{'小黑子'}</h3>
                            <span>{'海纳百川，有容乃大'}</span>
                        </div>
                        <div className={styles.desc_wrap}>
                            <p>
                                <ConsoleSqlOutlined style={{ marginRight: 8 }} />
                                数据专家
                            </p>
                            <p>
                                <GlobalOutlined style={{ marginRight: 8 }} />
                                浙江省杭州市
                            </p>
                            <p>
                                <LaptopOutlined style={{ marginRight: 8 }} />
                                研发部
                            </p>
                        </div>
                        <Divider />
                        <div className={styles.tag_wrap}>
                            <div>标签</div>
                            <Tag color="success">技术大牛</Tag>
                            <Tag color="processing">专注设计</Tag>
                            <Tag color="warning">海纳百川</Tag>
                            {tags.map((item, index) => (
                                <Tag key={index} color="default">
                                    {item}
                                </Tag>
                            ))}
                            {inputVisible && (
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    size="small"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputConfirm}
                                    onPressEnter={handleInputConfirm}
                                />
                            )}
                            {!inputVisible && (
                                <Tag className="site-tag-plus" onClick={showInput}>
                                    <PlusOutlined /> 自定义添加
                                </Tag>
                            )}
                        </div>
                        <Divider />
                        <div className={styles.team_wrap}>
                            <div>团队</div>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Link to={PathEnum.Dashboard_Analyze}>
                                        <Avatar src={img_1} />
                                        支付宝支付宝
                                    </Link>
                                </Col>
                                <Col span={12}>
                                    <Link to={PathEnum.Dashboard_Analyze}>
                                        <Avatar src={img_2} />
                                        前端Angular
                                    </Link>
                                </Col>
                                <Col span={12}>
                                    <Link to={PathEnum.Dashboard_Analyze}>
                                        <Avatar src={img_3} />
                                        蚂蚁金服设计平台
                                    </Link>
                                </Col>
                                <Col span={12}>
                                    <Link to={PathEnum.Dashboard_Analyze}>
                                        <Avatar src={img_4} />
                                        React官方文档
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col flex={'0 0 70%'} style={{ maxWidth: '70%', padding: '0 12px' }}>
                    <Card
                        style={{ width: '100%' }}
                        tabList={tabTitle}
                        activeTabKey={tabKey}
                        onTabChange={(key) => {
                            setTabKey(key);
                        }}
                    >
                        {tabContent[tabKey]}
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AccountCenter;
