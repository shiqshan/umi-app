import { message } from 'antd';
import { history } from 'umi';

export interface FetchResult<T = unknown> {
    code?: number;
    success: boolean;
    message?: string;
    data?: T;
}

export interface FetchApi<T = unknown, F = unknown> {
    (body?: T): Promise<FetchResult<F>>;
}

export interface Pager<T> {
    page?: number;
    size?: number;
    total?: number;
    list?: T[];
}

export const downlodad = (fielName: string) => `/api/common/download?fileName=${fielName}`;

export const Fetch = async <F = unknown, T = unknown>(url: string, data?: F, init?: RequestInit): Promise<T> => {
    return fetch(url, {
        credentials: 'include',
        headers: {
            'Content-Type': data instanceof FormData ? 'application/x-www-form-urlencoded' : 'application/json',
        },
        method: data ? 'POST' : 'GET',
        body: data instanceof FormData ? data : data && JSON.stringify(data),
        ...init,
    })
        .then(async (res) => {
            // console.log('9898res', res, res.headers?.get('Redirect'));
            if (res.status === 302 && res.headers?.get('Redirect')) {
                window.location.href = '/login';
            }
            if (res.redirected) {
                location.reload();
            } else {
                const result = await res.json();
                if (result.status == 403) {
                    location.reload();
                }
                if (!result.success && result.error) {
                    message.error(result.error);
                }
                return result;
            }
        })
        .catch((e) => {
            // history.replace('/login');
            message.error('访问服务器失败');
        })
        .finally(() => {});
};
