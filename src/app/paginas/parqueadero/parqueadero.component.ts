import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.scss']
})
export class ParqueaderoComponent {
  constructor(private router: Router, private app: AppComponent){

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
}
