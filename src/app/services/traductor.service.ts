import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http:HttpClient) { }

  public postTraduccion(source:string, q:string, target:string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'google-translate1.p.rapidapi.com', 
        'X-RapidAPI-Key': '9d396b9d7amsh786d6758313d89ep133af5jsnd0c6c0df1518'
      }),
      params: {
        'source' : source,
        'q' : q,
        'target' : target
      }
    };
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", httpOptions)
  }
}
