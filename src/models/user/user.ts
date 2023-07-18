import { Effect, Reducer, Subscription, request } from 'umi';
import { user_api, UserInfo } from '@/api/user';
import { FetchResult } from '@/api/util';

export interface UserModelType {
    namespace: 'user';
    state: UserInfo;
    reducers: {
        save: Reducer<UserInfo>;
    };
    effects: {
        query?: Effect;
        getInfo?: Effect;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',

    state: {
        id: '',
        nickname: '',
        avatar: '',
    },

    reducers: {
        save: (state, action) => {
            return { ...state, ...action.payload };
        },
    },

    effects: {
        *getInfo({ type, payload }, { put, call, select }) {
            // const data: [] = yield request('/web201605/js/herolist.json');
            const res: FetchResult<UserInfo> = yield user_api.getInfo();
            const data = res?.data;
            if (res?.success && res.code == 1) {
                yield put({
                    type: 'save',
                    payload: { ...data },
                });
            } else {
                yield put({
                    type: 'save',
                    payload: { nickname: '游客模式' },
                });
            }
        },
    },
};

export default UserModel;
