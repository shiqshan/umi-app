/**
 * user接口定义
 */
import { Fetch, FetchApi } from '@/api/util';

//user 接口
const userBaseApi = 'api/user';

export interface ILoginParams {
    username: string;
    password: string;
}

export interface UserInfo {
    id: string;
    name: string;
    address: string;
    sex: string;
    tel_number: string;
    qq: string;
    account: string;
    password: string;
    age: number;
    id_sort: number;
}

export const user_api: {
    login: FetchApi<ILoginParams, UserInfo>;
} = {
    login: (body) => Fetch(`${userBaseApi}/login`, body),
};
