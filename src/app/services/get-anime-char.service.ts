import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAnimeCharService {
  results: any[]
  constructor(private http: HttpClient) {}
  
  
 
  getAnimeByName(name){
    let url = `https://api.jikan.moe/v3/search/anime?q=${name}`
    
    return this.http.get(url).pipe(
      map((res) => {
        const array = []
        const data = res['results'].map(obj => {
        array.push(obj) 
        })
        return array
        })
      )
  }

  
  getAnime(id):Observable<{}>{
    let url = `https://api.jikan.moe/v3/anime/${id}`
    
    return this.http.get(url)
  }
      
    
 
}