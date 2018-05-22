import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { NewComponent } from './new/new.component';
import { ReviewComponent } from './review/review.component';
import { ShowComponent } from './show/show.component';

// import { BurbankComponent } from './burbank/burbank.component';
// import { ChicagoComponent } from './chicago/chicago.component';
// import { DallasComponent } from './dallas/dallas.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/new', component: NewComponent},
  {path: 'movies/:id/review', component: ReviewComponent},
  {path: 'movies/:id', component: ShowComponent},
  {path: '', pathMatch: 'full', redirectTo: '/movies' },
  // {path: '**', component: SanjoseComponent }
  // the ** will catch anything that did not match any of the above routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
