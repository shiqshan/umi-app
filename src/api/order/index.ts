import { Fetch, FetchApi, Pager } from '@/api/util';
import { HeroItem } from '@/api/lol';

//user 接口
const orderBaseApi = '/api/order';

export interface OrderInfo {
    orderId: string;
    userId: string;
    productId: string;
    productInfo: HeroItem;
    orderDate: string;
    paymentStatus: string;
    orderAmount: number;
    orderStatus: string;
}

export interface ListParams {
    page: number;
    size: number;
}

export interface OrderParams {
    productId?: string;
    productInfo?: {};
    orderAmount?: string;
}

export interface PayParams {
    orderId: string;
    orderAmount: number;
}

export const order_api: {
    create: FetchApi<OrderParams, OrderInfo>;
    list: FetchApi<ListParams, Pager<OrderInfo>>;
    getDetail: FetchApi<string, OrderInfo>;
    pay: FetchApi<PayParams>;
    delete: FetchApi<{ orderId: string | number }>;
} = {
    create: (body) => Fetch(`${orderBaseApi}/create`, body),
    list: (body) => Fetch(`${orderBaseApi}/list`, body),
    getDetail: (orderId) => Fetch(`${orderBaseApi}/detail?orderId=${orderId}`),
    pay: (body) => Fetch(`${orderBaseApi}/pay`, body),
    delete: (body) => Fetch(`${orderBaseApi}/delete`, body),
};
