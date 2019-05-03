import { BasicNews } from './interfaces/news-list';
import { NewsDetails } from './interfaces/news-details';
import { Contributor } from './interfaces/contributor';

export class Utlities {
    constructor() { }
    processNewsDetails(response): NewsDetails {        
        var iteam = response["content"];
        var newsDetail = <NewsDetails>{
            basic: this.getBasicNews(iteam),
            body: iteam.fields.body,
            contributor: this.getContributor(iteam.tags)
        }
        return newsDetail;
    }

    processNewsList(response): BasicNews[] {
        var returnList: BasicNews[] = [];
        for (var k = 0; k < response.results.length; k++) {
            var iteam = response.results[k];
            returnList.push(<BasicNews>this.getBasicNews(iteam));
        }
        return returnList;
    }

    processContributor(response): Contributor {
        var contributorData = this.getSingleContributor(response["tag"]);
        contributorData["newsList"] = this.processNewsList(response);
        console.log(contributorData);
        return <Contributor>contributorData;
    }

    private getBasicNews(response): BasicNews {
        return <BasicNews>{
            id: response.id,
            sectionName: response.sectionName,
            publicationDate: response.webPublicationDate,
            sectionId: response.sectionId,
            headline: response.fields.headline,
            trailText: response.fields.trailText,
            thumbnail: response.fields.thumbnail,
            webUrl: response.webUrl,
            apiUrl: response.apiUrl
        };
    }
    private getSingleContributor(response): Contributor {
        return <Contributor>{
            id: response.id,
            webTitle: response.webTitle,
            apiUrl: response.apiUrl,
            webUrl: response.webUrl,
            profileImage: response.bylineImageUrl,
            bio: response.bio,
            newsList: null
        };
    }
    private getContributor(response): Contributor[] {
        var contributorList: Contributor[] = [];
        for (var k in response) {
            contributorList.push();
        }
        return contributorList;
    }
}