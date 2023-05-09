import { ResponseError } from 'umi-request';

export const request = {
    prefix: '/api',
    headers: {
        Accept: '*/*',
        'Content-type': 'application/json;charset=utf-8',
    },
    errorHandler: (error: ResponseError) => {
        // 集中处理错误
        console.log(error);
    },
};
