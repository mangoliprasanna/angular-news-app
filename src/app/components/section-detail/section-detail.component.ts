import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from 'src/app/services/data-provider.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})
export class SectionDetailComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute, private _dataProvider: DataProviderService, private _title: Title) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
    });
  }
}
