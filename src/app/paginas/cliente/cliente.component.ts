import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cliente } from 'src/app/domain/cliente';
import { ServiciosWebService } from 'src/app/servicios/servicios-web.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
  cliente: Cliente = new Cliente();
  listadoClienteWS: any;
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular', 'Correo', 'Direccion'];
  dataSource = this.servicio.getAll();
  @ViewChild(MatTable)
  table!: MatTable<Cliente>;
  constructor(private servicio: ServiciosWebService,
    private router: Router, private app: AppComponent){
      this.listadoClienteWS= this.servicio.getAll();
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.cliente= new Cliente();
        this.cliente = params['cliente']
      }  
  }
ngOnInit(){
  this.listadoClienteWS= this.servicio.getAll();
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/cliente'){
      this.app.ocultarDiv()
    }
  }
guardarWS(){
  console.log(this.cliente)
  this.servicio.save(this.cliente).subscribe(data=>{
    if(data.codigo==99){
      alert("Codigo: "+data.codigo+" "+data.mensaje);   
    }
  });
  this.router.navigate(['paginas/cliente']);
  this.cliente= new Cliente();
}
}
