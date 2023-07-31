import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParqueaderoComponent } from './paginas/parqueadero/parqueadero.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';
import { FacturaComponent } from './paginas/factura/factura.component';
import { HistorialComponent } from './paginas/historial/historial.component';
import { TicketComponent } from './paginas/ticket/ticket.component';

const routes: Routes = [
  {path:"paginas/parqueadero", component: ParqueaderoComponent},
  {path:"paginas/cliente", component: ClienteComponent},
  {path:"paginas/vehiculo", component: VehiculoComponent},
  {path:"paginas/factura", component: FacturaComponent},
  {path:"paginas/historial", component: HistorialComponent},
  {path:"paginas/ticket", component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
