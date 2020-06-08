import { Component, OnInit } from '@angular/core';
import {TraductorService} from './../../services/traductor.service';

@Component({
  selector: 'app-traduccion',
  templateUrl: './traduccion.component.html',
  styleUrls: ['./traduccion.component.css']
})
export class TraduccionComponent implements OnInit {

  source:string;
  target:string;
  q:string;
  traduccion:string;
  resultado:Array<any>;
  traducciones:Array<any>;

  constructor(private traductorService:TraductorService) { }

  ngOnInit(): void {
  }

  traducir(){
    this.q = "hello world";
    this.target = "es";
    this.source = "en";
    this.traductorService.postTraduccion(this.source, this.q, this.target).subscribe(
      (result) =>{
        console.log("paso el post");
        this.resultado = result['data'];
        console.log("resultadoop"+ this.resultado);
        this.traducciones = this.resultado['translations'];
        this.traduccion = this.traducciones[0].translatedText;
        console.log(this.traduccion);
      }
    )
  }

}
