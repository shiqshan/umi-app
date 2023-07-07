import React, { ReactPropTypes, useEffect, useState } from 'react';
import styles from './index.less';
import { IRouteComponentProps, history } from 'umi';
import { heroBaseSkinApi, HeroDetail, lol_api } from '@/api/lol';
import { Button, Card, Col, Empty, Row } from 'antd';
import { PathEnum } from '@/routes';

/**
 * 英雄详情页
 * @constructor
 */
const HeroDetali = (props: IRouteComponentProps<{ id: string }>) => {
    const {
        match: {
            params: { id },
        },
    } = props;
    const [info, setInfo] = useState<HeroDetail>();
    const [tabKey, setTabKey] = useState<string>('1');

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = () => {
        lol_api.get_detail(id).then((res) => {
            if (res) {
                console.log(res);
                setInfo(res);
            }
        });
    };

    const tabContent: Record<string, React.ReactNode> = {
        1: (
            <Button type={'primary'} onClick={() => history.push(`/lol/hero-buy`, { info: info })}>
                购买
            </Button>
        ),
        2: <p>app content</p>,
        3: <p>project content</p>,
    };

    const tabTitle = [
        {
            key: '1',
            tab: `总览`,
        },
        {
            key: '2',
            tab: `大神攻略`,
        },
        {
            key: '3',
            tab: `皮肤详情`,
        },
    ];

    return (
        <>
            <Row wrap={false}>
                <Col flex={'300px'} style={{ minWidth: '300px', padding: '0 12px' }}>
                    <Card>
                        <div className={styles.cover_wrapper}>
                            <img src={info?.hero && `${heroBaseSkinApi}${Number(info?.hero.heroId) * 1000}.jpg`} />
                            {info ? (
                                <>
                                    <audio autoPlay={true}>
                                        <source src={info?.hero.selectAudio} type="audio/ogg" />
                                        您的浏览器不支持 audio 元素。
                                    </audio>
                                    <audio>
                                        <source src={info?.hero.banAudio} type="audio/ogg" />
                                        您的浏览器不支持 audio 元素。
                                    </audio>
                                </>
                            ) : null}
                        </div>
                    </Card>
                </Col>
                <Col flex={1} style={{ maxWidth: '70%', padding: '0 12px' }}>
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
export default HeroDetali;
