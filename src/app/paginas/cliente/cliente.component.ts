import { Component, OnInit, ViewChild } from '@angular/core';
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
export class ClienteComponent implements OnInit {
  inputCedula: string ='#588B8B';
  inputNombre: string ='#588B8B';
  inputApellido: string ='#588B8B';
  inputDireccion: string ='#588B8B';
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
  this.dataSource = this.listadoClienteWS;
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
guardarWS(){
  this.vacio();
  if(this.vacio()==false){
    alert("Error 98: Campos vacios")
  }else{
  console.log(this.cliente)
  this.servicio.save(this.cliente).subscribe(data=>{
    if(data.codigo==99){
      alert("Codigo: "+data.codigo+" "+data.mensaje); 
      this.inputCedula='#e93c3c' 
    }else{
      this.colorOriginal();
      console.log("cliente/guardado" + this.cliente);
      this.ngOnInit();
    }
  });
  this.cliente= new Cliente();
}
}
visualizar(){
  const currentUrl = this.router.url;
  if(currentUrl=='/paginas/cliente'){
    this.app.ocultarDiv()
  }
}
colorOriginal(){
  this.inputCedula ='#588B8B';
  this.inputNombre ='#588B8B';
  this.inputApellido='#588B8B';
  this.inputDireccion='#588B8B';
}
vacio(){
  var bandera: Boolean;
  bandera=true;
  if(this.cliente.nombre==""){
    this.inputNombre='#e93c3c'
    bandera=false;
  }
  if(this.cliente.apellido==""){
    this.inputApellido='#e93c3c'
    bandera=false;
  }
  if(this.cliente.direccion==""){
    this.inputDireccion='#e93c3c'
    bandera=false;
  }
  if(this.cliente.nombre==""&&this.cliente.apellido==""&&this.cliente.direccion==""){
    this.inputNombre='#e93c3c'
    this.inputApellido='#e93c3c'
    this.inputDireccion='#e93c3c'
    bandera=false;
  }
  else{
    bandera=true;
    return bandera;
  }
  return bandera;
}
  

}
