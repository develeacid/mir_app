import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TindicadorComponent } from './pages/tindicador/tindicador.component';
//RUTAS
import { AppRoutingModule } from './shared/app.routing.module';
//GRAFICAS
import { ChartsModule } from 'ng2-charts';
//SERVICIOS
import { ImprimirService } from './services/imprimir.service';
import { InfomirService } from './services/infomir.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    TindicadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    ImprimirService,
    InfomirService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
