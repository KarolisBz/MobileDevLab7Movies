import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // http
import { Observable } from 'rxjs'; // rxjs

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  
  GetMovieData():Observable<any> {
    return this.httpClient.get("https://www.omdbapi.com/?apikey=28196dda&s=%27war%27");
  }
}
