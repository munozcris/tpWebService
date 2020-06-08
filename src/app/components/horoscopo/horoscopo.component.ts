import { Component, OnInit } from '@angular/core';
import { Horoscopo } from './../../models/horoscopo';
import {HoroscopoService} from './../../services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  signos: Array<string>;
  horoscopo:string = "";
  nombre:string;
  fecha:Date;
  fechaForm : string;
  horoscopos: Array <any>;
  horoscopoMes:string = "";

  constructor(private horosService: HoroscopoService) {
    this.signos = ['Aries', 'Leo', 'Sagittarius', 'Taurus', 'Virgo', 'Capricorn', 'Gemini', 'Libra', 'Aquarius', 'Cancer', 'Scorpio', 'Pisces'];
  }

  ngOnInit(): void {
  }

  cargarSignos(pos : number){
    this.nombre = this.signos[pos];
    this.fecha = new Date();
    this.cargarDia();
    this.cargarMes();
  }

  cargarHoroscopo(){
    console.log(this.fecha);
    this.fechaForm = this.fecha.toString();
    console.log(this.fechaForm);
    this.horosService.getHoroscopo(this.fechaForm).subscribe( 
      (result) => {
        console.log(result[0]);
        this.horoscopo = result['result'];
        console.log(this.horoscopo);
      }
    )
  console.log(this.horoscopo);
  }

  cargarDia(){
    this.fechaForm = this.fecha.getFullYear().toString() + "-0" + this.fecha.getMonth().toString() + "-0"+this.fecha.getDay().toString();
    this.horosService.getHoroscopoDia(this.nombre, this.fechaForm).subscribe(
      (result) =>{
        this.horoscopos = result['result'];
        this.horoscopo = this.horoscopos['description'];
      }
    )
  }

  cargarMes(){
    console.log(this.nombre);
    this.fechaForm = this.fecha.getFullYear().toString() + "-0" + this.fecha.getMonth().toString();
    console.log("fechaaa"+this.fechaForm);
    console.log(this.nombre.toLowerCase());
    this.horosService.getHoroscopoMes(this.nombre.toLowerCase(), this.fechaForm).subscribe(
      (result) =>{
        this.horoscopos = result['result'];
        
        this.horoscopoMes = this.horoscopos['description'];
      }
    )
    console.log("meeees"+this.horoscopoMes);
  }

}
