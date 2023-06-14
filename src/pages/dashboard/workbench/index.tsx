/**
 * 数据可视化--工作台
 */
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { getLocale } from '@@/plugin-locale/localeExports';

let num = 120;
let timer: ReturnType<typeof setInterval> | undefined = undefined;

const Workbench = () => {
    const [percent, setPercent] = useState<number>(num / 10);

    useEffect(() => {
        const timer_1 = setTimeout(() => {
            timer = setInterval(() => {
                if (num >= 1000) {
                    clearInterval(timer);
                }
                num += 1;
                setPercent(num / 10);
            }, 500);
        }, 2600);

        return () => {
            clearInterval(timer);
            clearTimeout(timer_1);
        };
    }, []);
    return (
        <div>
            <div className={styles.phone}>
                <div className={styles.screen}>
                    <div className={styles.number}>{percent + '%'}</div>
                    <div className={styles.ascending}>
                        <div className={styles.bubble}></div>
                        <div className={styles.bubble}></div>
                        <div className={styles.bubble}></div>
                        <div className={styles.bubble}></div>
                        <div className={styles.bubble}></div>
                        <div className={styles.bubble_home}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workbench;
