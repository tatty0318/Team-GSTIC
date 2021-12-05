import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarraNavegacionComponent} from './plantilla/barra-navegacion/barra-navegacion.component';
import {ErrorComponent} from './plantilla/error/error.component';
import {HomeComponent} from './plantilla/home/home.component';
import {PiePaginaComponent} from './plantilla/pie-pagina/pie-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
