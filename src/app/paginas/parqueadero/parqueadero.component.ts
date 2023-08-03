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

  puestos: any[] = [
   
    {
      "nombre": " Puesto Libre N°:",
      "valor": 1
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 2
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 3
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 4
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 5
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 6
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 7
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 8
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 9
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 10
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 11
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 12
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 13
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 14
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 15
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 16
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 17
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 18
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 19
    },
    {
      "nombre": " Puesto Libre N°:",
      "valor": 20
    }

  ]

  constructor(private router: Router, private app: AppComponent,private servicio: ServiciosWebService){

  }
ngOnInit(){
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/parqueadero'){
      this.app.ocultarDiv()
    }
  }


  obtenerPuesto(puesto: number) {
    this.servicio.numeroPuesto=puesto;
  }

}
