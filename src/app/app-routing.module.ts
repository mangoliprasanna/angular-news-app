import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ContributorDetailComponent } from './components/contributor-detail/contributor-detail.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':section-id', component: SectionDetailComponent },
  { path: 'profile/:profile-id', component: ContributorDetailComponent },
  { path: ':section/:year/:month/:month-no/:newsid', component: NewsDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
