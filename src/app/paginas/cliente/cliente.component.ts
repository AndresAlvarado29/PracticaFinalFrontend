import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {
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
    if(currentUrl=='/paginas/cliente'){
      this.app.ocultarDiv()
    }
  }
}
