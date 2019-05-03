import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  API_KEY: string = "68e66e95-8802-47f1-8eca-3aaf1dcdf17b";
  PAGE_SIZE: number = 30;
  constructor(private _http: HttpClient) { }

  getNewsDetails(id): Observable<string> {
    return this._http.get<string>("https://content.guardianapis.com/" + id + "?show-fields=thumbnail,thumbnail,trailText,headline,body&show-tags=contributor" + "&api-key=" + this.API_KEY);
  }

  getSectionNewsList(id, page: number = 1): Observable<string> {
    return this._http.get<string>("https://content.guardianapis.com/" + id + "?show-fields=thumbnail,thumbnail,trailText,headline&page-size=" + this.PAGE_SIZE + "&api-key=" + this.API_KEY + "&page=" + page);
  }

  getContributorDetails(id): Observable<string> {
    return this._http.get<string>("https://content.guardianapis.com/" + id + "?show-fields=thumbnail,thumbnail,trailText,headline&page-size=" + this.PAGE_SIZE + "&api-key=" + this.API_KEY);
  }
}
