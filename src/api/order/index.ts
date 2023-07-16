import { Fetch, FetchApi, Pager } from '@/api/util';
import { HeroItem } from '@/api/lol';

//user 接口
const orderBaseApi = '/api/order';

export interface OrderInfo {
    orderId: number;
    userId: string;
    productId: string;
    productInfo: HeroItem;
    orderDate: string;
    paymentStatus: string;
    orderAmount: string;
    orderStatus: string;
}

export interface ListParams {
    page: number;
    size: number;
}

export const order_api: {
    buy: FetchApi<{ productId: string | number; orderAmount: string | number }, OrderInfo>;
    list: FetchApi<ListParams, Pager<OrderInfo>>;
} = {
    buy: (body) => Fetch(`${orderBaseApi}/buy`, body),
    list: (body) => Fetch(`${orderBaseApi}/list`, body),
};
