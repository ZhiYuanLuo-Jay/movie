import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  newReview: any;
  err: string;
  movieId: string;
  movieTitle: string;
  // buttonStatus: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

 
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.movieId = params['id'] });

    this.newReview = {
      title: "",
      id:this.movieId,
      review:[{
        name:"",
        star: 5,
        content:"",
      }]
    }

    this.getOneMovie();
  }

  getOneMovie() {
    let obserable = this._httpService.getOne(this.movieId);
    obserable.subscribe(info => {
      console.log(info['info']['review']);
      this.movieTitle = info['info']['title'];
    });    
  }

  onSubmit() {
    let obserable = this._httpService.updateReview(this.newReview);
    obserable.subscribe(postdata => {
    console.log("Got Updated data back", postdata);
    if (postdata['message'] == 'Error'){
      this.err = postdata['error']['message'];
      console.log("Got entry error.", postdata['error']['message']);
      // this.buttonStatus = true;
    } else {
      this._router.navigate(['/movies']);
    }       
    })

    // Reset this.newTask to a new, clean object.
  }

}
