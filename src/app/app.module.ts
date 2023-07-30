import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParqueaderoComponent } from './paginas/parqueadero/parqueadero.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { FacturaComponent } from './paginas/factura/factura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//materials
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HistorialComponent } from './paginas/historial/historial.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponent,
    ClienteComponent,
    VehiculoComponent,
    FacturaComponent,
    HistorialComponent,
    TicketComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
