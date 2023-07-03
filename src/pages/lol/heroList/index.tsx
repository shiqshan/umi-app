import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card, Col, Row, Space, Radio, Input, RadioChangeEvent } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { heroBaseSkinApi, HeroItem, lol_api } from '@/api/lol';
import styles from './index.less';
import { history } from 'umi';

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
let timer: NodeJS.Timeout | number | undefined = undefined;
let count: number = 0;
/**
 * lol英雄列表
 * @constructor
 */
const HeroList = () => {
    const [list, setList] = useState<HeroItem[]>([]);
    const [searchVal, setSearchVal] = useState<string>('');
    const [type_2, setType_2] = useState<string>('all');

    useEffect(() => {
        lol_api.hero_list().then((res) => {
            const { hero } = res;
            setList(hero || []);
        });
    }, []);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    };

    const radio_2 = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setType_2(e.target.value);
    };

    useEffect(() => {
        setImgSrc();
    }, [list, searchVal, type_2]);

    useEffect(() => {
        const section = document.getElementById('my-section');
        section?.addEventListener('scroll', handleScroll);
        console.log('9898', 'addEventListener');
        return () => {
            //组件卸载，重置
            section?.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
            timer = undefined;
            count = 0;
        };
    }, []);

    const setImgSrc = () => {
        const imgList = document.getElementsByClassName('hero-cover-img') as HTMLCollectionOf<HTMLImageElement>;
        // 获取可视窗口的高度。兼容所有浏览器
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // 获取滚动条滚动的高度
        const scrollTop = document.documentElement.scrollTop;
        if (count === imgList.length) {
            return;
        }
        for (let i = 0; i < imgList.length; i++) {
            let everyHeight = imgList[i].getBoundingClientRect().top;
            if (everyHeight - scrollTop <= screenHeight + 100) {
                if (imgList[i].src != imgList[i]['dataset'].src) {
                    imgList[i].src = imgList[i]['dataset'].src as string;
                    count += 1;
                }
            }
        }
    };

    const handleScroll = () => {
        if (!timer) {
            console.log('9898', 'handleScroll');
            timer = setTimeout(() => {
                setImgSrc();
                //执行完重置为null
                timer = undefined;
            }, 300);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <Space style={{ marginBottom: '20px' }}>
                <Input placeholder="搜索" onChange={search} suffix={<SearchOutlined />} />
                <Radio.Group onChange={radio_2} value={type_2}>
                    {heroType.map((data) => (
                        <Radio.Button value={data.key} key={data.key}>
                            {data.value}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Space>
            <Row gutter={[16, 16]}>
                {list.map((item) => (
                    <Col
                        flex={'160px'}
                        key={item.heroId}
                        style={{
                            display: (type_2 == 'all' || item.roles.indexOf(type_2) >= 0) && item.keywords.indexOf(searchVal) >= 0 ? '' : 'none',
                        }}
                    >
                        <Card
                            className={styles.card_wrapper}
                            hoverable={true}
                            bodyStyle={{ textAlign: 'center' }}
                            onClick={() =>
                                history.push({
                                    pathname: `/lol/hero-detail/${item.heroId}`,
                                    //query传参， 以？拼接， /lol/hero-detail/3?a=b
                                    // query: {
                                    //     a: 'b',
                                    // },
                                })
                            }
                            cover={
                                <div className={styles.cover_wrapper}>
                                    <img
                                        alt={item.name}
                                        id={item.heroId}
                                        className={'hero-cover-img'}
                                        data-src={`${heroBaseSkinApi}${Number(item.heroId) * 1000}.jpg`}
                                        src={require('@/public/icon/errorImg.png')}
                                    />
                                </div>
                            }
                        >
                            <Card.Meta className={styles.meta_wrapper} title={item.name} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HeroList;
