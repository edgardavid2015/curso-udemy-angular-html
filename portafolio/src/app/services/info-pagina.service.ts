import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  cargaDeInfo = false;
  equipo:any;

  constructor(private http:HttpClient) {
    
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina) => {
      this.cargaDeInfo = true;
      this.info = resp;
    })
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-f0baa-default-rtdb.firebaseio.com/equipo.json').subscribe((resp:any) => {
      this.equipo = resp;
      console.log(resp);
    })

   }
}
