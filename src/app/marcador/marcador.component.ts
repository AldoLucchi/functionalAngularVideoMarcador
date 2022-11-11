import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  puntosLocales : number = 0;
  puntosVisitantes : number = 0;

  equipoLocal: any = {
    nombre: 'boca',
    logo: '/assets/img/logoboca.png',
    jugadores: [
      {nombre: 'Jugador1 Boca', puntos: 0, imagen: '/assets/img/jugadorboca1.jpg'},
      {nombre: 'Jugador2 Boca', puntos: 0, imagen: '/assets/img/jugadorboca2.jpg'},
    ]
  };

  equipoVisitante: any = {
    nombre: 'boca',
    logo: '/assets/img/logoriver.png',
    jugadores: [
      {nombre: 'Jugador1 River', puntos: 0, imagen: '/assets/img/jugadorriver1.png'},
      {nombre: 'Jugador2 River', puntos: 0, imagen: '/assets/img/jugadorriver2.png'},
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  getArcoLocal($event: any): void {
    this.puntosLocales += $event.puntos;
    this.equipoLocal.jugadores.forEach((elem: any) => {
      if(elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos
      }
    });
  }

  getArcoVisitante($event: any): void {
    this.puntosVisitantes += $event.puntos;
    this.equipoVisitante.jugadores.forEach((elem: any) => {
      if(elem.nombre === $event.nombreJugador) {
        elem.puntos += $event.puntos
      }
    });
  }


}
