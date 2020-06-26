import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoPagina } from '../app/interfaces/info-pagina.interface';

@Injectable ({
    providedIn: 'root'
})

export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    constructor( private  http: HttpClient ) {


       // console.log ('Servicio de InfoPagina listo');

        this.http.get('assets/data/data-pagina.json')
            // tslint:disable-next-line: align
            .subscribe((resp: InfoPagina) => {
                this.cargada = true;
                this.info = resp;
                console.log(resp);

});

    }
}
