import { Component, OnInit } from '@angular/core';
import {CovidService} from 'src/app/services/covid.service';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  pais :  Pais;
  mundo : Array<string>;
  paises : Array<Pais>;
  resultados : Array <any>;
  nombrePais : string;
  confirmados : boolean=false;
  fallecidos : boolean=false;
  recuperados : boolean=false;

  constructor(private covidService:CovidService) { 
    //this.cargarNombres();
    this.mundo = new Array<string>();
    this.pais = new Pais();
    this.cargarMundo();
    this.paises = new Array<Pais>();
  }

  cargarMundo(){
    this.covidService.getDatosMundo().subscribe(
      (result) =>{
        this.resultados = result;
        this.pais.nombre = "Todo el mundo";
        this.pais.confirmados = this.resultados[0].confirmed;
        this.pais.recuperados = this.resultados[0].recovered;
        this.pais.fallecidos = this.resultados[0].deaths;
        this.pais.bandera = "mundo.png";
        this.paises.push(this.pais);
        this.pais = new Pais();
      }
    )
  }

  obtenerDatosPais(){
    let fecha="2020-04-01";
    this.covidService.getDatos(this.nombrePais, fecha).subscribe(
      (result)=>{
        this.resultados = result;
        this.pais.nombre = this.resultados[0].country;
        if(this.confirmados){
          this.pais.confirmados = this.resultados[0].provinces[0].confirmed;
        }
        if(this.recuperados){
          this.pais.recuperados = this.resultados[0].provinces[0].recovered;
        }
        if(this.fallecidos){
          this.pais.fallecidos = this.resultados[0].provinces[0].deaths;
        }
        this.pais.bandera= this.nombrePais + ".png"
        this.paises.push(this.pais);
        this.pais = new Pais();
      },
      (error)=>{
        console.log(this.resultados)
      }
    )
    }    

  ngOnInit(): void {
  }

}
