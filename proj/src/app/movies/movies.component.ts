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
    
    let avgRating = 1
    for (const r of this.movieList) {
      console.log(r);  // movie obj
      this.rating = 0;
        for(const s in r){   // review array
          let len = r.review.length;
          for (const star of r.review) {
            this.rating += star.star
          }
          avgRating = Math.round(this.rating / len)
          this.rateList.push(avgRating);
          console.log("Rate array: ", this.rateList);
          break;
        }
        // add a new key/value pair to an object
        r['avg'] = avgRating;
    }
    console.log("Got our movies!", info['data']);
    
    });    
  }

}
