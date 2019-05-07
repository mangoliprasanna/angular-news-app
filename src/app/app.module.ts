import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataProviderService } from './services/data-provider.service';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ContributorDetailComponent } from './components/contributor-detail/contributor-detail.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsDetailComponent,
    ContributorDetailComponent,
    SectionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DataProviderService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
