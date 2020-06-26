import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../app/interfaces/info-pagina.interface';

@Injectable ({
    providedIn: 'root'
})

export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    equipo: any[] = [];

    constructor( private  http: HttpClient ) {


        this.cargarInfo();
        this.cargarEquipo();
    }

    private cargarInfo(){
           // console.log ('Servicio de InfoPagina listo');

           this.http.get('assets/data/data-pagina.json')
           // tslint:disable-next-line: align
           .subscribe((resp: InfoPagina) => {
               this.cargada = true;
               this.info = resp;
              // console.log(resp);

            });
    }

    private cargarEquipo() {
        this.http.get('https://angular-html-2cbb0.firebaseio.com/equipo.json')
        // tslint:disable-next-line: align
        .subscribe((resp: any) => {
            this.equipo = resp;
           // console.log(resp);

         });

    }
}
