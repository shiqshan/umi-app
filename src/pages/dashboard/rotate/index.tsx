import React, { ReactElement, useEffect } from 'react';
import styles from './index.less';

const img_1 = 'https://game.gtimg.cn/images/lol/act/img/skinloading/157000.jpg';
const img_2 = 'https://game.gtimg.cn/images/lol/act/img/skinloading/164000.jpg';
const img_3 = 'https://game.gtimg.cn/images/lol/act/img/skinloading/222000.jpg';
const img_4 = 'https://game.gtimg.cn/images/lol/act/img/skinloading/875000.jpg';
const img_5 = 'https://game.gtimg.cn/images/lol/act/img/skinloading/4000.jpg';
const img_6 = 'https://game.gtimg.cn/images/lol/act/img/skinloading/350000.jpg';

const arr = [img_1, img_2, img_3, img_4, img_5, img_6];

const Rotate: React.FC = () => {
    useEffect(() => {
        const list: NodeListOf<HTMLElement> = document.querySelectorAll('.item');
        const deg = 360 / arr.length;
        const count = arr.length;
        const r = 400 / 2;
        for (let i = 0; i < list.length; i++) {
            let t = (Math.PI / 180) * (i * deg);
            const x = Math.sin(t) * r;
            const y = -Math.cos(t) * r;
            list[i].style.transform = `translate(${x}px, ${y}px)`;
        }
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {arr.map((item, index) => (
                    <div className={`${styles.item} item`} key={index}>
                        <img src={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rotate;
