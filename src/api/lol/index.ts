import { Fetch, FetchApi, FetchResult } from '@/api/util';

export const heroListApi = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js';
export const heroSkinListApi = 'https://game.gtimg.cn/images/lol/act/img/js/cuSkinList/cuskin_list.js';
export const heroAvatarApi = 'https://game.gtimg.cn/images/lol/act/img/champion';
export const heroBaseSkinApi = 'https://game.gtimg.cn/images/lol/act/img/skinloading/';
export const heroDetailApi = 'https://game.gtimg.cn/images/lol/act/img/js/hero/';

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
    shortBio: string; //英雄描述
}

//皮肤出参
export interface SkinItem {
    chromaImg: string;
    chromas: string;
    chromasBelongId: string;
    description: string;
    emblemsName: string;
    heroId: string;
    heroName: string;
    heroTitle: string;
    iconImg: string;
    isBase: string;
    loadingImg: string;
    mainImg: string;
    name: string;
    publishTime: string;
    skinId: string;
    sourceImg: string;
    suitType: string;
    vedioPath: string;
    videoImg: string;
}

export interface SpellsItem {
    abilityIconPath: string;
    abilityVideoPath: string;
    cooldown: string[];
    cooldownburn: string;
    cost: string;
    costburn: string;
    description: string;
    dynamicDescription: string;
    heroId: string;
    name: string;
    range: string[];
    spellKey: string;
}

export interface HeroDetail {
    hero: HeroItem;
    skins: SkinItem[];
    spells: SpellsItem[];
}

export const lol_api: {
    hero_list: () => Promise<HeroListResponse>;
    skin_list: () => Promise<SkinListResponse>;
    get_avatar: (heroName: string) => Promise<unknown>;
    get_base_skin: (skinId: string) => Promise<unknown>;
    get_detail: (heroId: string) => Promise<HeroDetail>;
} = {
    hero_list: () => fetch(heroListApi).then(async (res) => await res.json()),
    skin_list: () => fetch(heroSkinListApi).then(async (res) => await res.json()),
    get_avatar: (heroName) => fetch(`${heroAvatarApi}/${heroName}.png`).then(async (res) => await res.json()),
    get_base_skin: (skinId) => fetch(`${heroBaseSkinApi}${skinId}.jpg`).then(async (res) => await res.json()),
    get_detail: (heroId) => fetch(`${heroDetailApi}${heroId}.js`).then(async (res) => await res.json()),
};
