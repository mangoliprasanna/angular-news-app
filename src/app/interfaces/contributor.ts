import { BasicNews } from './news-list';

export interface Contributor{
    id: string,
    webTitle: string,
    apiUrl: string,
    webUrl: string,
    profileImage: string,
    bio: string
    newsList: BasicNews[]
}