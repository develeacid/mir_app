import { Component, OnInit } from '@angular/core';
import { ImprimirService } from '../../services/imprimir.service';

@Component({
  selector: 'app-tindicador',
  templateUrl: './tindicador.component.html',
  styleUrls: ['./tindicador.component.css']
})
export class TindicadorComponent implements OnInit {

  imprimir:any[] = [];

  constructor( private _imprimirService:ImprimirService ) {
    console.log('constructor');

  }

  ngOnInit() {

    this.imprimir = this._imprimirService.getImprimir();

    console.log(this.imprimir);
    console.log(this.imprimir[0]);
    console.log(this.imprimir[0][0]);
    console.log(this.imprimir[0][0].nombre);
    console.log(this.imprimir[0][0].estrategia);
    console.log(this.imprimir[0][0].estrategia[0]);
  }

}
