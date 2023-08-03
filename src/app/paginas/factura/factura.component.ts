import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cliente } from 'src/app/domain/cliente';
import { DetalleFactura } from 'src/app/domain/detalleFactura';
import { Factura } from 'src/app/domain/factura';
import { ServiciosWebService } from 'src/app/servicios/servicios-web.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit{
  contadorFacturas: number = 1;
  factura: Factura = new Factura();
  cliente: Cliente = new Cliente();
  detalle: DetalleFactura = new DetalleFactura();
  inputCedula: string = '#588B8B';
  txtiva:number =0.12;
  txtnombre:string ='';
  txtapellido:string ='';
  txtcorreo:string ='';
  txtcelular:string ='';
  txtdireccion:string='';
  listadoFacturaWS:any;
  selectedFactura: Factura | null = null;
  displayedColumns: string[] = ['Numero','Cedula', 'Nombre', 'Apellido', 'Fecha', 'Detalle', 'Total', 'Accion'];
  dataSource = this.servicio.getAllFactura();
  @ViewChild(MatTable)
  table!: MatTable<Factura>;
  constructor(private router: Router, private app: AppComponent, private servicio: ServiciosWebService){
  this.listadoFacturaWS=this.servicio.getAllFactura();
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
  if(params){
    this.factura= new Factura();
    this.factura=params['factura']
  }
  }
ngOnInit(){
  this.listadoFacturaWS=this.servicio.getAllFactura();
  this.dataSource= this.listadoFacturaWS;
  this.factura.numeroFactura = `${this.contadorFacturas}`;
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
    this.app.modo()
  });
}
buscarF(factura: Factura) {
  this.servicio.buscarFactura(factura.numeroFactura).subscribe(data=>{
    console.log(data.cliente.nombre)
  })
  return factura.numeroFactura;
}
guardarWS(){
  if(this.cliente.cedula==""){
    this.inputCedula = '#e93c3c'; 
    alert("Error 98: Campos vacios")
  }else{
    console.log(this.factura)
  this.cliente.apellido=this.txtapellido
  this.cliente.nombre=this.txtnombre
  this.cliente.correo=this.txtcorreo
  this.cliente.celular=this.txtcelular
  this.cliente.direccion=this.txtdireccion
  this.factura.cliente=this.cliente; 
  this.factura.estado="Activo";
  this.factura.iva=0.12;
  this.detalle.costoTotal=this.factura.total
  this.detalle.cantidad=1;
  this.factura.detalles.push(this.detalle)
  this.factura.numeroFactura=this.contadorFacturas.toString();
  this.contadorFacturas++;
  console.log(this.factura.detalles)
  this.servicio.saveFactura(this.factura).subscribe(data=>{
    console.log("factura guardada: ", data)
    this.ngOnInit();
    this.factura=new Factura();
    this.detalle=new DetalleFactura();
    this.inputCedula= '#588B8B';
    this.cliente = new Cliente();
    this.limpiar();
    this.factura.numeroFactura = `${this.contadorFacturas}`;
  });
  
  }
  
}
  visualizar(){
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl=='/paginas/factura'){
      this.app.ocultarDiv()
    }
  }
  //obtiene un cliente y con la cedula busca con el web service y devuelve un cliente
  buscar(cliente: Cliente){
    this.servicio.buscar(cliente.cedula).subscribe(data=>{
      console.log(data)
      this.txtnombre=data.nombre;
      this.txtapellido=data.apellido;
      this.txtcorreo=data.correo;
      this.txtcelular=data.celular;
      this.txtdireccion=data.direccion;
      return data;
    })
  }
  limpiar(){
  this.txtnombre ='';
  this.txtapellido ='';
  this.txtcorreo ='';
  this.txtcelular ='';
  this.txtdireccion='';
  }
  
}
