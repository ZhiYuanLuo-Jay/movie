import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList = [];
  rating : number;
  rateList = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this.getMovies();   // Best practice is to invoke function in ngOnInit() not in the constructor.
  }

  getMovies(){
    let obserable = this._httpService.getMovies();
    obserable.subscribe(info => {
    this.movieList = info['data'];
    
    
    for (const r of this.movieList) {
      console.log(r);
      this.rating = 0;
        for(const s in r){
          // console.log("array length", r.review.length);
          let len = r.review.length;
          for (const star of r.review) {
            // console.log(star.star)
            this.rating += star.star
          }
          // console.log(this.rating);
          // console.log(Math.round(this.rating / len));
          this.rateList.push(Math.round(this.rating / len));
          console.log(this.rateList);
          console.log(r);
          break;
        }
        
    }
    console.log("Got our movies!", info['data']);
    
    });    
  }

}
