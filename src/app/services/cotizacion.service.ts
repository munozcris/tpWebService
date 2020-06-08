import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private _http : HttpClient) { }

  public getCambio( from:string, to:string, value:number, resultado:number): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'currency-exchange.p.rapidapi.com', 
        'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
      })
    };
    return this._http.get("https://currency-exchange.p.rapidapi.com/exchange?from="+from+"&to="+to+"&q="+value, httpOptions);
  }

  public getCambioD(from:string, to:string, value:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'currency-converter5.p.rapidapi.com', 
        'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
      }),
      params: {
        'from': from,
        'to' : to,
        'amount' : value
      }
    };
    return this._http.get("https://currency-converter5.p.rapidapi.com/currency/convert", httpOptions);
  }

  public getCambios(from:string, to:string): Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'currency-converter5.p.rapidapi.com', 
        'X-RapidAPI-Key': 'fba416aaf4msh0eef5b7075751a5p1f6713jsnc5231ef46df3'
      }),
      params: {
        'from': from,
        'to' : to,
        'amount' : '1'
      }
    };
    return this._http.get("https://currency-converter5.p.rapidapi.com/currency/convert", httpOptions);
  }
  
}
