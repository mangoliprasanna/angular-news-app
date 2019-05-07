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
  newsBody;
  constructor(private _dataProvider: DataProviderService, private _title: Title, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this._dataProvider.getNewsDetails(this.getUrlFromParameters(params)).subscribe(data => {
        this._title.setTitle(data["response"]["content"]["fields"]["headline"] + " | New App ")
        this.newsDetails = data["response"]["content"];
        this.newsBody = this.newsDetails.blocks.body[0];
      })
    });
  }
  getUrlFromParameters(params): string {
    return params["section"] + "/" + params["year"] + "/" + params["month"] + "/" + params["month-no"] + "/" + params["newsid"]
  }
}
