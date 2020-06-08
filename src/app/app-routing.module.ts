import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HoroscopoComponent} from './components/horoscopo/horoscopo.component';
import {NoticiasComponent} from './components/noticias/noticias.component';
import {CovidComponent} from './components/covid/covid.component';
import {CotizacionComponent} from './components/cotizacion/cotizacion.component';
import {TraduccionComponent} from './components/traduccion/traduccion.component';


const routes: Routes = [
  {path: 'noticias', component: NoticiasComponent},
  {path: 'horoscopo', component: HoroscopoComponent},
  {path: 'covid', component: CovidComponent},
  {path: 'cotizacion', component: CotizacionComponent},
  {path: 'traduccion', component: TraduccionComponent},
  {path: '', component: NoticiasComponent, pathMatch:'full'},
  {path: '**', pathMatch:'full', redirectTo: 'noticias'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
