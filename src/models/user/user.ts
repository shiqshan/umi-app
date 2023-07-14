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
        id: '',
        nickname: '',
        avatar: '',
    },

    reducers: {
        save: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
};

export default UserModel;
