import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './services/data-provider.service';
import { Utlities } from './utilities';
import { BasicNews } from './interfaces/news-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  processor = new Utlities();
  newsList: BasicNews[];
  constructor(private _dataProvider: DataProviderService){
  }
  ngOnInit(): void {
    
    /*
    this._dataProvider.getSectionNewsList("football").subscribe((data) =>{
      this.newsList = this.processor.processNewsList(data["response"]);
      console.log(this.newsList);
    })

    this._dataProvider.getNewsDetails("football/blog/2019/may/03/premier-league-10-things-to-look-out-for-this-weekend").subscribe((data) =>{
      console.log(this.processor.processNewsDetails(data["response"]));
    });

    this._dataProvider.getContributorDetails("profile/pauldoyle").subscribe((data) => {
      this.processor.processContributor(data["response"]);
    })

    */
    
  }
}