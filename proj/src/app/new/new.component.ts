import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newMovie: any;
  err: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this.newMovie = {
      title: "",
      review:[{
        name:"",
        star: 5,
        content:"",
      }]
    }
  }

  onSubmit() {
    // this.newMovie = {
    //   title:this.newMovie.title,
    //   review:[{
    //     name:this.newMovie.name,
    //     star:this.newMovie.star,
    //     content:this.newMovie.content,
    //   }]
    // }
    let addObserable = this._httpService.addMovie(this.newMovie);
    addObserable.subscribe(postdata => {
      console.log("Got data from post back", postdata);
      if (postdata['message'] == 'Error'){
        this.err = postdata['error']['message'];
        console.log("Got entry error.", postdata['error']['message']);
      } else {
        this._router.navigate(['/movies']);
      }
    })

    // Reset this.newTask to a new, clean object.
  }


}
