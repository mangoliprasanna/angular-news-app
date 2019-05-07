import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsDetails;
  constructor(private _dataProvider: DataProviderService, private _title: Title, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this._dataProvider.getNewsDetails(this.getUrlFromParameters(params)).subscribe(data => {
        this.newsDetails = data["response"]["content"];
        console.log(this.newsDetails);
      })
    });
  }
  getUrlFromParameters(params): string {
    return params["section"] + "/" + params["year"] + "/" + params["month"] + "/" + params["month-no"] + "/" + params["newsid"]
  }
}
