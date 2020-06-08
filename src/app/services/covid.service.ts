import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http: HttpClient) { }

  public getDatos(pais, fecha): Observable<any>{

  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Host':  'covid-19-data.p.rapidapi.com', 
      'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
    }),
    params: {
      'date': fecha,
      'name': pais
    }
  };
  return this._http.get("https://covid-19-data.p.rapidapi.com/report/country/name", httpOptions)}

  public getDatosMundo(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-data.p.rapidapi.com', 
        'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
      })
    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/totals", httpOptions)}
}
