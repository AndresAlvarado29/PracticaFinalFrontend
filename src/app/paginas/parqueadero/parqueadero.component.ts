import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cliente } from 'src/app/domain/cliente';
import { ServiciosWebService } from 'src/app/servicios/servicios-web.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.scss']
})
export class ParqueaderoComponent {
  modoNocturno: boolean=false;
  
  constructor(private router: Router, private app: AppComponent,private servicio: ServiciosWebService){

  }
ngOnInit(){
  console.log(this.app.modoNocturno)
  if(this.modoNocturno==true){
    this.app.cambiarModo(this.app.modoNocturno);
  }
  setTimeout(() => {
    
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/parqueadero'){
      this.app.ocultarDiv()
      this.app.modo()
    }
  }
}
