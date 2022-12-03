import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor() { }

  obtenerDatos(){
    console.log("El servicio porfolio está corriendo");
  }
}
