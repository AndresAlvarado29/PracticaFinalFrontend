import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

import { format, addDays, formatISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { MatTable } from '@angular/material/table';
import { ITicket } from 'src/app/model/ITicket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  
})

export class TicketComponent implements OnInit{

  currentDate = new Date();

  formattedDate = format(this.currentDate, 'dd/MM/yyyy HH:mm:ss', {
    locale: es,
  });

  oculto: boolean = false
  
  ticket: Ticket = new Ticket();
  placaBuscada: string = "";

  fechaIngreso: any;


  vehiculo: Vehiculo = new Vehiculo();

  placa: string = '';
  marca: string = '';
  tipo: string = '';

  listadoTicketsWS: any[]=[];
  public evento: any = null;

  listadoVehiculosWS: any;

  displayedColumns: string[] = ['numeroTicket', 'puesto', 'fechaIngreso', 'fechaSalida','vehiculo'];
  dataSource:any[]=[];
  @ViewChild(MatTable)
  table!: MatTable<ITicket>; 

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

      this.listarTicketWS();

      if (this.servicio.numeroPuesto !== null) {
        this.evento = this.servicio.numeroPuesto;
        console.log(this.evento)
      } else {
        this.evento=1000;
      }

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
      this.placaBuscada=data.placa;
      if(data==null) 
      this.oculto=true;
      return data
      })
    }

    guardarTicketWS(){
      const tc: ITicket={
        numeroTicket: 100,
        puesto: this.evento,
        horaEntrada: this.formattedDate,
        horaSalida: this.formattedDate,
        vehiculo:{placa:this.placaBuscada}
      }
      console.log(tc)
      this.servicio.saveTicket(tc).subscribe(data => {
        console.log(data);
  
        this.limpiarCampos();
        this.listarTicketWS();
      })
    }

    listarTicketWS(){
      this.servicio.getAllTicket().subscribe(responde=>{
        this.listadoTicketsWS=responde;
        console.log(responde)
      })
    }

    convertirFecha(fecha:any):string{
      console.log(format(new Date(fecha), 'dd/MM/yyyy HH:mm:ss'))
      return formatISO(new Date(fecha), { representation: 'date' })
    }
 
  }