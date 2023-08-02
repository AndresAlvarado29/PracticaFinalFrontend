import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ServiciosWebService } from 'src/app/servicios/servicios-web.service';

import { AppComponent } from 'src/app/app.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  
})

export class TicketComponent implements OnInit{


  oculto: boolean = false
  
  ticket: Ticket = new Ticket();

  fechaIngreso: any;


  vehiculo: Vehiculo = new Vehiculo();

  placa: string = '';
  marca: string = '';
  tipo: string = '';

  listadoVehiculosWS: any;

  constructor(private servicio: ServiciosWebService, 
    private app: AppComponent,
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.ticket = new Ticket()
        this.ticket = params['ticket']
      }
    }

    ngOnInit(): void {

      this.fechaIngreso = new Date();

       this.servicio.getAll().subscribe(responde=>{
         this.listadoVehiculosWS=responde;
       })
     }

     visualizar(){
      const currentUrl = this.router.url;
      console.log(currentUrl)
      if(currentUrl=='/paginas/ticket'){
        this.app.ocultarDiv()
      }
    }

     guardarWS() {
    
      this.servicio.saveVehiculo(this.vehiculo).subscribe(data => {
        console.log(data);
  
        this.limpiarCampos();

        this.oculto=false;
        console.log(this.oculto);
  
      })
    }

    cancelarVehiculo(){
      this.oculto=false;
        console.log(this.oculto);
    }

    limpiarCampos() {
      this.placa = '';
      this.marca = '';
      this.tipo = '';
    }

    buscarVehiculo(vehiculo: Vehiculo){
      this.servicio.findVehiculo(vehiculo.placa).subscribe(data=>{
      console.log(data)
      if(data==null) this.oculto=true;
      return data
      })
    }
  }