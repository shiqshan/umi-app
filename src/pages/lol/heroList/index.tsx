import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { Card, Col, Form, Row, Space, Radio, Input, RadioChangeEvent } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { HeroItem, lol_api } from '@/api/lol';
import styles from './index.less';

export const heroType = [
    { key: 'all', value: '全部定位' },
    { key: 'fighter', value: '战士' },
    { key: 'mage', value: '法师' },
    { key: 'tank', value: '坦克' },
    { key: 'assassin', value: '刺客' },
    { key: 'marksman', value: '射手' },
    { key: 'support', value: '辅助' },
];

export const positionType = [
    { key: 'all', value: '全部定位' },
    { key: 'top', value: '上单' },
    { key: 'jungle', value: '打野' },
    { key: 'mid', value: '中单' },
    { key: 'bottom', value: '下路' },
    { key: 'support', value: '辅助' },
];
const HeroList = () => {
    const [form] = Form.useForm();
    const [list, setList] = useState<HeroItem[]>([]);
    const [searchVal, setSearchVal] = useState<string>('');
    const [type_1, setType_1] = useState<string>('all');
    const [type_2, setType_2] = useState<string>('all');

    useEffect(() => {
        lol_api.hero_list().then((res) => {
            const { hero } = res;
            setList(hero || []);
        });
    }, []);

    const getBaseSkin = () => {
        lol_api.skin_list().then((res) => {
            // const { skin } = res;
        });
    };

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    };

    const radio_1 = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setType_1(e.target.value);
    };

    const radio_2 = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setType_2(e.target.value);
    };

    return (
        <>
            <Space style={{ marginBottom: '20px' }}>
                <Input placeholder="搜索" onChange={search} suffix={<SearchOutlined />} />
                {/*<Radio.Group onChange={radio_1} value={type_1}>*/}
                {/*    {positionType.map(data => (*/}
                {/*        <Radio.Button value={data.key} key={`hero-rodio-${data.key}`}>*/}
                {/*            {data.value}*/}
                {/*        </Radio.Button>*/}
                {/*    ))}*/}
                {/*</Radio.Group>*/}
                <Radio.Group onChange={radio_2} value={type_2}>
                    {heroType.map((data) => (
                        <Radio.Button value={data.key} key={`hero-rodio-${data.key}`}>
                            {data.value}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Space>
            <Row gutter={[16, 16]}>
                {list
                    .filter((item) => (type_2 == 'all' || item.roles.indexOf(type_2) >= 0) && item.keywords.indexOf(searchVal) >= 0)
                    .map((item) => (
                        <Col flex={'160px'} key={item.heroId}>
                            <Card
                                className={styles.card_wrapper}
                                hoverable={true}
                                bodyStyle={{ textAlign: 'center' }}
                                cover={
                                    <div className={styles.cover_wrapper}>
                                        <img alt={item.name} src={`https://game.gtimg.cn/images/lol/act/img/skinloading/${Number(item.heroId) * 1000}.jpg`} />
                                    </div>
                                }
                            >
                                <Card.Meta className={styles.meta_wrapper} title={item.name} />
                            </Card>
                        </Col>
                    ))}
            </Row>
        </>
    );
};

export default HeroList;
