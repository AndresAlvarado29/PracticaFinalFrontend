import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  ticket: Ticket = new Ticket();
  vehiculo: Vehiculo = new Vehiculo();
  constructor(private router: Router,private app: AppComponent){}
  ngOnInit(){
    setTimeout(() => {
      this.visualizar() // Realizar el cambio de forma asincrónica
    });
  }
    visualizar(){
      const currentUrl = this.router.url;
      console.log(currentUrl)
      if(currentUrl=='/paginas/ticket'){
        this.app.ocultarDiv()
      }
    }
  
}
