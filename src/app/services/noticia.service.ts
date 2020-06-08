import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) { }

  public getNoticias(categoria:string):Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'livescore6.p.rapidapi.com', 
        'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);
  }

}
