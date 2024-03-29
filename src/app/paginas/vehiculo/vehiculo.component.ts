
import { Component, OnInit, ViewChild } from '@angular/core';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ServiciosWebService } from '../../servicios/servicios-web.service';
import { Router } from '@angular/router';
//import { Swal }from 'sweetalert2';
import { MatTable } from '@angular/material/table';
import { Subject } from 'rxjs';

import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})

export class VehiculoComponent implements OnInit{

  vehiculo: Vehiculo = new Vehiculo();

  placa: string = '';
  marca: string = '';
  tipo: string = '';

  listadoVehiculosWS: any;
  //listadoVehiculosWS = new Subject<any[]>()

  displayedColumns: string[] = ['Placa', 'Marca', 'Tipo'];
  dataSource = this.servicio.getAllVehiculo();
  @ViewChild(MatTable)
  table!: MatTable<Vehiculo>; 

  constructor(private servicio: ServiciosWebService, 
    private app: AppComponent,
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.vehiculo = new Vehiculo()
        this.vehiculo = params['vehiculo']
      }
    }

  //se ejecuta antes que la vista se cargue
  ngOnInit(): void {
    this.listadoVehiculosWS=this.servicio.getAllVehiculo();
    this.dataSource = this.listadoVehiculosWS;
    // this.listadoContactosWS.next (this.personasService.getAll())
     this.servicio.getAllVehiculo().subscribe(responde=>{
       this.listadoVehiculosWS=responde;
     })

     setTimeout(() => {
      this.visualizar() // Realizar el cambio de forma asincrónica
    });

     
   }

   visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/vehiculo'){
      this.app.ocultarDiv()
      this.app.modo()
    }
  }

  guardarWS() {
    
    this.servicio.saveVehiculo(this.vehiculo).subscribe(data => {
      console.log(data);

      this.limpiarCampos();

      console.log(this.vehiculo);
      this.servicio.saveVehiculo(this.vehiculo);
      this.vehiculo = new Vehiculo();

    })
  }

  guardarWSS() {

    const valores: Vehiculo = {
      placa: this.placa,
      marca: this.marca,
      tipo: this.tipo,
    };

    console.log(`${this.placa} ${this.marca} ${this.tipo}`);
    console.log(valores);

    let vehiculos = [];
    if (localStorage.getItem('vehiculos') === null) {
      vehiculos = [];
      vehiculos.push(valores);
      localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
    } else {
      vehiculos = JSON.parse(localStorage.getItem('vehiculos')!);
      vehiculos.push(valores);
      localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
    }

    
    this.servicio.saveVehiculo(valores).subscribe(data => {
      console.log("resultado WS save", data);
      if (data.codigo == 99) {
        //Swal.fire("ERROR", data.mensaje, "warning");
      }
    });

    
    this.limpiarCampos();

    console.log(this.vehiculo);
    this.servicio.saveVehiculo(this.vehiculo);
    this.vehiculo = new Vehiculo();
    
  }


  limpiarCampos() {
    this.placa = '';
    this.marca = '';
    this.tipo = '';
  }

  

}
