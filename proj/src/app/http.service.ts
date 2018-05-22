import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient){
    // this.getMovies();
  }
  

  
  addMovie(newMovie){
    console.log("Services",newMovie);
    return this._http.post(`/movie/`, newMovie)  // function call with function value returned
  }

  addReview(newReview){
    console.log("Services",newReview);
    return this._http.post(`/movie/`, newReview)  // function call with function value returned
  }

  getMovies(){
    return this._http.get('/movies/');
  }

  getOne(movieId){
    return this._http.get(`/movie/${movieId}` )
  }

  updateReview(newReview){
    console.log("Updating ePet", newReview);
    return this._http.put(`/movie/`, newReview)  // function call with function value returned
  }
 
  // likePet(ePet){
  //   console.log("Add likes in Services", ePet);
  //   return this._http.put(`/like/`, ePet) 
  // }

  delOne(movieId){
    return this._http.delete(`/movie/${movieId}`)
  }

  delItem(id){
    return this._http.delete(`/item/${id}`)
  }

 
}
