import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { PoliticsComponent } from './politics/politics.component';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Entertainment', component: EntertainmentComponent },
  { path: 'Business', component: BusinessComponent },
  { path: 'Sports', component: SportsComponent },
  { path: 'Politics', component: PoliticsComponent },
  { path: 'Health', component: HealthComponent },
  { path: 'Login', component: LoginComponent },
  

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
