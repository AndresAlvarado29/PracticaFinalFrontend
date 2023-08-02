import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ServiciosWebService } from 'src/app/servicios/servicios-web.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
  
  ticket: Ticket = new Ticket();
  vehiculo: Vehiculo = new Vehiculo();

  placa: string = '';
  marca: string = '';
  tipo: string = '';

  listadoVehiculosWS: any;

  constructor(private servicio: ServiciosWebService, 
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.ticket = new Ticket()
        this.ticket = params['ticket']
      }
    }

    ngOnInit(): void {
       this.servicio.getAll().subscribe(responde=>{
         this.listadoVehiculosWS=responde;
       })
     }

     guardarWS() {
    
      this.servicio.saveVehiculo(this.vehiculo).subscribe(data => {
        console.log(data);
  
        this.limpiarCampos();
  
        console.log(this.vehiculo);
        this.servicio.saveVehiculo(this.vehiculo);
        this.vehiculo = new Vehiculo();
  
      })
    }

    limpiarCampos() {
      this.placa = '';
      this.marca = '';
      this.tipo = '';
    }

    buscarVehiculo(vehiculo: Vehiculo){
      this.servicio.findVehiculo(vehiculo.placa).subscribe(data=>{
      console.log(data)
      return data
      })
    }
 
}
