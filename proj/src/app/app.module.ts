import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { ReviewComponent } from './review/review.component'; // <-- import FormsModule.

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NewComponent,
    ShowComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // <-- register FormsModule with our app.
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
