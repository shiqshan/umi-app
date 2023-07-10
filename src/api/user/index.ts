/**
 * user接口定义
 */
import { Fetch, FetchApi, Pager } from '@/api/util';

//user 接口
const userBaseApi = '/api/user';

export interface ILoginParams {
    username: string;
    password: string;
}

export interface UserInfo {
    id?: string;
    username?: string;
    password?: string;
    nickname?: string;
    address?: string;
    sex?: string;
    tel_number?: string;
    qq?: string;
    createTime?: string;
    age?: number;
    id_sort?: number;
    isDelete?: number;
    avatar?: string;
}

export interface AddUserBody {
    id: string;
    name: string;
    address: string;
    sex: string;
    tel_number: string;
    qq?: string;
    account?: string;
    password?: string;
    age: number;
}

export interface IUserListParam {
    page: number;
    size: number;
}

export interface IRegisterParams {
    username: string;
    password: string;
}

export const user_api: {
    register: FetchApi<IRegisterParams>;
    isExist: FetchApi<{ username: string }, number>;
    login: FetchApi<ILoginParams, UserInfo>;
    getInfo: FetchApi;
    logout: FetchApi<null, string>;
    list: FetchApi<IUserListParam, Pager<UserInfo>>;
    add: FetchApi<AddUserBody, UserInfo>;
    update: FetchApi<AddUserBody, UserInfo>;
    delete: FetchApi<{ id: string }, null>;
    checkSession: FetchApi<unknown, number>;
} = {
    register: (body) => Fetch(`${userBaseApi}/register`, body),
    isExist: (body) => Fetch(`${userBaseApi}/is_exist`, body),
    login: (body) => Fetch(`${userBaseApi}/login`, body),
    getInfo: () => Fetch(`${userBaseApi}/info`),
    logout: () => Fetch(`${userBaseApi}/logout`),
    list: (body) => Fetch(`${userBaseApi}/getUserList`, body),
    add: (body) => Fetch(`${userBaseApi}/insertUser`, body),
    update: (body) => Fetch(`${userBaseApi}/updateUser`, body),
    delete: (body) => Fetch(`${userBaseApi}/deleteUser`, body),
    checkSession: () => Fetch(`${userBaseApi}/checkSession`),
};
