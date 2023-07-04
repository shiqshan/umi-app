import { Effect, Reducer, Subscription, request } from 'umi';
import { UserInfo } from '@/api/user';

export interface UserModelType {
    namespace: 'user';
    state: UserInfo;
    reducers: {
        save: Reducer<UserInfo>;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',

    state: {
        nickname: '游客模式',
    },

    reducers: {
        save: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
};

export default UserModel;
