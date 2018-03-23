import {RouterModule, Routes} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdviceComponent } from './advice/advice.component';
import { DestinationComponent } from './destination/destination.component';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'advice', component: AdviceComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'about', component: AboutComponent },
  { path: 'info', component: InfoComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdviceComponent,
    DestinationComponent,
    OfferComponent,
    AboutComponent,
    InfoComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
