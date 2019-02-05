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
  }

}
