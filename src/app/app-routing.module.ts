import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SliderComponent } from './slider/slider.component';
import { SportsComponent } from './sports/sports.component';
import { TvComponent } from './tv/tv.component';
import{RegistrationComponent} from './registration/registration.component';
import { DisplayComponent } from './display/display.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { LetsplayComponent } from './letsplay/letsplay.component';

const routes: Routes = [
{path:'',redirectTo:'slider',pathMatch:'full'},
{path:'slider',component:SliderComponent},
{path:'tv',component:TvComponent},
{path:'movies',component:MoviesComponent},
{path:'sports',component:SportsComponent},
{path:'registration',component:RegistrationComponent},
{path:'display',component:DisplayComponent},
{path:'watchlist',component:WatchlistComponent},
{path:'letsplay',component:LetsplayComponent},
{path:'**',redirectTo:'slider'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
