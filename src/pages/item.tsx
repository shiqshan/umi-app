import React, { useEffect } from 'react';
import styles from './item.less';
import { request, useRequest } from 'umi';

export default function Page() {
  const getList = async () => {
    const data = await request('dev/user/getUserList');
    console.log('9898', data);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page item</h1>
    </div>
  );
}
