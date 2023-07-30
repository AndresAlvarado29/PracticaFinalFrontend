import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular','Placa','Ticket','Total'];
  constructor(private router: Router, private app: AppComponent){
    //dataSource = ;
    //@ViewChild(MatTable)
    //table!: MatTable<Contacto>;
  }
ngOnInit(){
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/historial'){
      this.app.ocultarDiv()
    }
  }
}
