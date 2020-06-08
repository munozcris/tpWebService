import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import {HttpClientModule} from '@angular/common/http';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { CovidComponent } from './components/covid/covid.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDataTableModule} from "angular-9-datatable";
import { TraduccionComponent } from './components/traduccion/traduccion.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    HoroscopoComponent,
    HeaderComponent,
    FooterComponent,
    CotizacionComponent,
    CovidComponent,
    TraduccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
