import { Component, OnInit } from '@angular/core';
import { CotizacionService } from './../../services/cotizacion.service';
import { Cotizacion } from 'src/app/models/cotizacion';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  moneda: Cotizacion;
  monedas: Array<Cotizacion>;
  resultados: Array<any>;
  from: string;
  to: string;
  ar: string;
  monto: number;
  total: number;
  tot:string;
  contador: number = 0;


  constructor(private cotizaService: CotizacionService) {
    this.resultados = new Array<any>();
    this.monedas = new Array<Cotizacion>();
    this.cargarMonedas();
  }

  public cambio() {
    this.total = 0;
    this.cotizaService.getCambio(this.from, this.to, this.monto, this.total).subscribe(
      (result) => {
        this.total = result;
      }
    );
  }

  public cambioD(){
    this.tot = "";
    console.log(this.monto);
    console.log(this.monto.toString());
    this.cotizaService.getCambioD(this.from, this.to, this.monto.toString()).subscribe(
      (result) => {
        this.resultados = result['rates'];
        this.tot = this.resultados[this.to].rate_for_amount;
        console.log(this.moneda.valor1 + "  " + this.moneda.valor2 + "  " + this.moneda.valor3 + "  " + this.moneda.valor4);
      });
  }

  public cargarMonedas() {
    this.cargarUSD();
    this.cargarEUR();
    this.cargarGBP();
    this.cargarARS();
  }

  cargarUSD() {
    this.from = "USD";
    this.to = "EUR, GBP, ARS";
    this.cotizaService.getCambios(this.from, this.to).subscribe(
      (result) => {
        this.resultados = result['rates'];
        this.moneda = new Cotizacion();
        this.moneda.nombre = "USD";
        this.moneda.valor1 = "1.0000";
        this.moneda.valor2 = this.resultados['EUR'].rate;
        this.moneda.valor3 = this.resultados['GBP'].rate;
        this.moneda.valor4 = this.resultados['ARS'].rate;
        this.monedas.push(this.moneda);
        console.log(this.moneda.valor1 + "  " + this.moneda.valor2 + "  " + this.moneda.valor3 + "  " + this.moneda.valor4);
      });
  }

  cargarEUR() {
    this.from = "EUR";
    this.to = "USD, GBP, ARS";
    this.cotizaService.getCambios(this.from, this.to).subscribe(
      (result) => {
        this.resultados = result['rates'];
        this.moneda = new Cotizacion();
        this.moneda.nombre = "EUR";
        this.moneda.valor2 = "1.0000";
        this.moneda.valor1 = this.resultados['USD'].rate;
        this.moneda.valor3 = this.resultados['GBP'].rate;
        this.moneda.valor4 = this.resultados['ARS'].rate;
        this.monedas.push(this.moneda);
      });
  }

  cargarGBP() {
    this.from = "GBP";
    this.to = "EUR, USD, ARS";
    this.cotizaService.getCambios(this.from, this.to).subscribe(
      (result) => {
        this.resultados = result['rates'];
        this.moneda = new Cotizacion();
        this.moneda.nombre = "GBP";
        this.moneda.valor3 = "1.0000";
        this.moneda.valor1 = this.resultados['USD'].rate;
        this.moneda.valor2 = this.resultados['EUR'].rate;
        this.moneda.valor4 = this.resultados['ARS'].rate;
        this.monedas.push(this.moneda);
      });
  }

  cargarARS() {
    this.from = "ARS";
    this.to = "EUR, GBP, USD";
    this.cotizaService.getCambios(this.from, this.to).subscribe(
      (result) => {
        this.resultados = result['rates'];
        this.moneda = new Cotizacion();
        this.moneda.nombre = "ARS";
        this.moneda.valor4 = "1.0000";
        this.moneda.valor1 = this.resultados['USD'].rate;
        this.moneda.valor3 = this.resultados['GBP'].rate;
        this.moneda.valor2 = this.resultados['EUR'].rate;
        this.monedas.push(this.moneda);
      });
  }
  //error => { alert("Error en la petición"); } )

  ngOnInit(): void {
  }

}
