import { Fetch, FetchApi, FetchResult } from '@/api/util';

const heroListApi = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js';
const heroSkinListApi = 'https://game.gtimg.cn/images/lol/act/img/js/cuSkinList/cuskin_list.js';
const heroAvatarApi = 'https://game.gtimg.cn/images/lol/act/img/champion/';
const heroBaseSkinApi = 'https://game.gtimg.cn/images/lol/act/img/skinloading/';

//英雄列表出参
interface HeroListResponse {
    fileName: string;
    fileTime: string;
    hero: HeroItem[];
    version: string;
}

//皮肤列表出参
interface SkinListResponse {
    name: string;
    isChromas: string; //是否是炫彩皮肤
    chromas: string[]; //相关炫彩皮肤的id列表
    tag: string;
    category: string;
    source: string;
}

//单个英雄出参
export interface HeroItem {
    alias: string;
    attack: string;
    banAudio: string;
    camp: string;
    campId: string;
    changeLabel: string;
    couponPrice: string;
    defense: string;
    difficulty: string;
    goldPrice: string;
    heroId: string;
    instance_id: string;
    isARAMweekfree: string;
    isWeekFree: string;
    ispermanentweekfree: string;
    keywords: string;
    magic: string;
    name: string;
    roles: string[];
    selectAudio: string;
    title: string;
}

export const lol_api: {
    hero_list: () => Promise<HeroListResponse>;
    skin_list: () => Promise<SkinListResponse>;
    get_avatar: (heroName: string) => Promise<unknown>;
    get_base_skin: (skinId: string) => Promise<unknown>;
} = {
    hero_list: () => fetch(heroListApi).then(async (res) => await res.json()),
    skin_list: () => fetch(heroSkinListApi).then(async (res) => await res.json()),
    get_avatar: (heroName) => fetch(`${heroAvatarApi}${heroName}.png`).then(async (res) => await res.json()),
    get_base_skin: (skinId) => fetch(`${heroBaseSkinApi}${skinId}.jpg`).then(async (res) => await res.json()),
};
