import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CollectionsComponent } from './collections/collections.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { SportsComponent } from './sports/sports.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RollservicesService } from './rollservices.service';
import { SliderAllComponent } from './slider-all/slider-all.component';
import { DisplayComponent } from './display/display.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { LetsplayComponent } from './letsplay/letsplay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CollectionsComponent,
    TvComponent,
    MoviesComponent,
    SportsComponent,
    RegistrationComponent,
    SliderAllComponent,
    DisplayComponent,
    WatchlistComponent,
    LetsplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [RollservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
