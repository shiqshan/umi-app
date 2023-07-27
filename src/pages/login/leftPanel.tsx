import React from 'react';
import { Carousel } from 'antd';
import styles from './index.less';

/**
 * 登录页左侧轮播
 * @constructor
 */
const LeftPanel: React.FC = () => {
    const imgList = [
        {
            name: '武神 贾克斯',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_dc8c76b5-004c-4bb0-b2b5-44297ece29b2.jpg',
        },
        {
            name: '源代码 卡蜜尔',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_43c279dd-49eb-4216-a822-fb7924fd8bf0.jpg',
        },
        {
            name: '神王 德莱厄斯',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_cf5b4905-68b0-4443-870b-f8114ecbbfc2.jpg',
        },
        {
            name: '玉剑传说 无双',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_b8ae47e7-2b65-4dfa-876a-4dade2fcf13e.jpg',
            style: {
                objectPosition: 'right center',
            },
        },
        {
            name: '黎明使者 锐雯',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_95b14254-477c-49c1-849d-c63a0a9b5b66.jpg',
            style: {
                objectPosition: 'right center',
            },
        },
        {
            name: '凌云之翼 艾瑞莉娅',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_fc94114a-eea6-4dc0-a049-81ce6364a636.jpg',
            style: {
                objectPosition: 'right center',
            },
        },
        {
            name: '战斗学院 杰斯',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_3acb76f2-b993-444d-af85-0d73ee558a5c.jpg',
        },
        {
            name: '西部牛仔 亚索',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_1004e2ca-db2e-469e-b2dd-292c057e3dee.jpg',
            style: {
                objectPosition: 'right center',
            },
        },
        {
            name: '吕布 奉先',
            url: 'https://game.gtimg.cn/images/lol/act/img/skin/big_bdc14fb4-d92f-4abb-9563-373765c26c7f.jpg',
        },
    ];

    return (
        <>
            <Carousel autoplay effect="fade">
                {imgList.map((item, index) => (
                    <div key={index}>
                        <img className={styles.left_cover} src={item.url} alt={item.name} style={item.style || undefined} />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default LeftPanel;
