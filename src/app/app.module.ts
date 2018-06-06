import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GotHttpService } from './got-http-service.service';
import { FilterPipe } from './filter.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { FullpageviewComponent } from './fullpageview/fullpageview.component';
import { ErrornotfoundComponent } from './errornotfound/errornotfound.component';
import { ErrorbadrequestComponent } from './errorbadrequest/errorbadrequest.component';
import { ErrorauthenticationfailedComponent } from './errorauthenticationfailed/errorauthenticationfailed.component';
import { ErrorurltoolongComponent } from './errorurltoolong/errorurltoolong.component';
import RateLimiter from 'rxjs-ratelimiter';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {MDBBootstrapModule , CarouselModule, WavesModule } from 'angular-bootstrap-md';
import 'hammerjs';
import { ClickOutsideModule } from 'ng4-click-outside';
import { SliderModule } from 'angular-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    FilterPipe,
    FullpageviewComponent,
    ErrornotfoundComponent,
    ErrorbadrequestComponent,
    ErrorauthenticationfailedComponent,
    ErrorurltoolongComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    CarouselModule,
    SliderModule,
    ClickOutsideModule,
    WavesModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'fullpageview', component: FullpageviewComponent},
      {path: 'errornotfound', component: ErrornotfoundComponent},
      {path: 'errorbadrequest', component: ErrorbadrequestComponent},
      {path: 'errorauthenticationfailed', component: ErrorauthenticationfailedComponent},
      {path: 'errorurltoolong', component: ErrorurltoolongComponent},
      {path: 'about', component: AboutComponent},
      {path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

