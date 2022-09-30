import React, { FC, useState } from 'react';
import styles from './hero.less';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}
const heroType = [
  { key: 'all', value: '全部' },
  { key: 'fighter', value: '战士' },
  { key: 'mage', value: '法师' },
  { key: 'tank', value: '坦克' },
  { key: 'assassin', value: '刺客' },
  { key: 'marksman', value: '射手' },
  { key: 'support', value: '辅助' },
];
const Hero: FC<PageProps> = (props) => {
  const { hero, dispatch } = props
  const [value, setValue] = useState('all');

  // console.log(hero.list);

  console.log(hero.list.filter((item: any) => value == "all" || item.roles.indexOf(value) >= 0));

  const onChange = (e: RadioChangeEvent) => {
    // console.log('radio checked', e.target.value);
    setValue(e.target.value);
    dispatch!({
      type: "hero/save", payload: {
        filterKey: e.target.value
      }
    })
  }
  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
      <div className={styles.radio_box}>
        <Radio.Group onChange={onChange} value={value}>
          {heroType.map(data => (
            <Radio value={data.key} key={`hero-rodio-${data.key}`}>
              {data.value}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <ul className={styles.hero_list}>
        {
          hero.list
            .filter((item: any) => value == "all" || item.roles.indexOf(value) >= 0)
            .map((item: any) => {
              return (
                <li key={item.heroId}>
                  <img src={`//game.gtimg.cn/images/lol/act/img/champion/${item.alias}.png`} />
                  <p>{item.name}</p>
                </li>
              )
            })
        }
      </ul>
    </div>
  );
}

export default connect(
  ({ hero }: { hero: HeroModelState }) => ({ hero }),
  null
)
  (Hero);