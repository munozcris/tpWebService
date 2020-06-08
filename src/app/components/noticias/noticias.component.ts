import { Component, OnInit } from '@angular/core';
import {Noticia} from './../../models/noticia';
import { NoticiaService } from './../../services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticia: Noticia;
  noticias : Array<Noticia>;
  categoria : string;
  bandera : boolean = false;

  constructor(private noticiaService: NoticiaService) {
    this.noticia = new Noticia();
    this.noticias = new Array<Noticia>();
   }

  ngOnInit(): void {
  }

  cargarNoticias(){
    this.noticiaService.getNoticias(this.categoria).subscribe( 
      (result) => {
          //es necesario que convierta el JSON que
          this.noticias = new Array<Noticia>(); 
          //this.noticias = result['arts'];
           result['arts'].forEach(element => {
           this.noticia = new Noticia(); 
           Object.assign(this.noticia,element);
           this.noticias.push(this.noticia);
          });
          console.log(this.noticias);
        }, 
        error => { alert("Error en la petición"); } )
        this.bandera=true;
      }
    }    
