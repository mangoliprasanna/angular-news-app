import { Contributor } from './contributor';
import { BasicNews } from './news-list';

export interface NewsDetails{
    basic: BasicNews,
    body: string,
    contributor: Contributor[]
}