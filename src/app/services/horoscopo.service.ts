import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) {

   }

   public getHoroscopo(fecha : string): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'zodiac-sign.p.rapidapi.com', 
        'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
      }),
      params: {
        'date': '2020-06-12'
      }
    };
    return this._http.get("https://zodiac-sign.p.rapidapi.com/sign", httpOptions)}


    public getHoroscopoDia(signo:string, fecha:string):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({
          'X-RapidAPI-Host':  'horoscope5.p.rapidapi.com', 
          'X-RapidAPI-Key': '9d396b9d7amsh786d6758313d89ep133af5jsnd0c6c0df1518'
        }),
        params: {
          'sign' : signo,
          'date' : '2020-06-05'
        }
      };
      return this._http.get("https://horoscope5.p.rapidapi.com/general/daily", httpOptions)
    }
  
    public getHoroscopoMes(signo:string, fecha:string):Observable<any>{

      const httpOptions = {
        headers: new HttpHeaders({
          'X-RapidAPI-Host':  'horoscope5.p.rapidapi.com', 
          'X-RapidAPI-Key': '9d396b9d7amsh786d6758313d89ep133af5jsnd0c6c0df1518'
        }),
        params: {
          'sign' : signo,
          'date' : fecha
        }
      };
      return this._http.get("https://horoscope5.p.rapidapi.com/career/monthly", httpOptions)
    }
}
