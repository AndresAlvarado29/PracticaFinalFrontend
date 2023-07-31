import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cliente } from 'src/app/domain/cliente';
import { ServiciosWebService } from 'src/app/servicios/servicios-web.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  cliente: Cliente = new Cliente();
  txtnombre:string ='';
  txtapellido:string ='';
  txtcorreo:string ='';
  txtcelular:string ='';
  constructor(private router: Router, private app: AppComponent, private servicio: ServiciosWebService){

  }
ngOnInit(){
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/factura'){
      this.app.ocultarDiv()
    }
  }
  buscar(cliente: Cliente){
    this.servicio.buscar(cliente.cedula).subscribe(data=>{
      this.txtnombre=data.nombre;
      this.txtapellido=data.apellido;
      this.txtcorreo=data.correo;
      this.txtcelular=data.celular;
    })
  }
}
