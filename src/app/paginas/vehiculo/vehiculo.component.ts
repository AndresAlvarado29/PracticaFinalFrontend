import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {
  constructor(private router: Router,private app: AppComponent){}
  ngOnInit(){
    setTimeout(() => {
      this.visualizar() // Realizar el cambio de forma asincrónica
    });
  }
    visualizar(){
      const currentUrl = this.router.url;
      console.log(currentUrl)
      if(currentUrl=='/paginas/vehiculo'){
        this.app.ocultarDiv()
      }
    }
  
}
