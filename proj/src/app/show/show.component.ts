import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  movieId: string;
  reviewList = [];
  movieTitle: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.movieId = params['id'] });

    this.getOneMovie();
  }

  getOneMovie() {
    let obserable = this._httpService.getOne(this.movieId);
    obserable.subscribe(info => {
      console.log(info['info']['review']);
      this.reviewList = info['info']['review'];
      this.movieTitle = info['info']['title']
    });    
  }

  onRemove(): void { 
    // console.log(`Click event is working with num param:${this.onePet['name']}, ${this.petId}`);
    let obserable = this._httpService.delOne(this.movieId);
    obserable.subscribe(info => {
      console.log(info);
      this._router.navigate(['/movies']);
    });  
  }

  onDel(id): void { 
    console.log(id);
    // let obserable = this._httpService.delItem(id);
    // obserable.subscribe(info => {
    //   console.log(info);
    //   // this._router.navigate(['/movies']);
    // });  
  }

}
