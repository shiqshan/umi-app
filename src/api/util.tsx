import { message } from 'antd';

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
            message.error(e.toString());
        })
        .finally(() => {});
};
