import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { EquipoComponent } from './equipo/equipo.component';
import { GoleadorComponent } from './goleador/goleador.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcadorComponent,
    EquipoComponent,
    GoleadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
