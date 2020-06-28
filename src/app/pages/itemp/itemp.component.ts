import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.inteface';

@Component({
  selector: 'app-itemp',
  templateUrl: './itemp.component.html',
  styleUrls: ['./itemp.component.css']
})
export class ItempComponent implements OnInit{

  producto: ProductoDescripcion;
  id: string;


  constructor( private route: ActivatedRoute,
               public productosService: ProductosService ) {}
  ngOnInit() {

    this.route.params
    .subscribe( parametros => {


      // console.log(parametros['id']);

      this.productosService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            this.producto = producto;
          });

    });

  }
}
