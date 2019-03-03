import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfomirService {
  
  constructor(private http: HttpClient) {
    console.log('Recuperar informacion de las MIR');
  }
  getNewReleases(){
    return this.http.get('https://angular-pruebas-mir.firebaseio.com/mir_basic_info.json');
  }
}
