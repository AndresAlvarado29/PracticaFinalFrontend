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
  factura: Factura = new Factura();
  cliente: Cliente = new Cliente();
  detalle: DetalleFactura = new DetalleFactura();
  txtiva:number =0.12;
  txtnombre:string ='';
  txtapellido:string ='';
  txtcorreo:string ='';
  txtcelular:string ='';
  txtdireccion:string='';
  listadoFacturaWS:any;
  selectedFactura: Factura | null = null;
  displayedColumns: string[] = ['N° de Factura', 'Nombre', 'Apellido', 'Fecha', 'Detalle', 'Total', 'Accion'];
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
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
guardarWS(factura: Factura,detalle: DetalleFactura){
  this.cliente.apellido=this.txtapellido
  this.cliente.nombre=this.txtnombre
  this.cliente.correo=this.txtcorreo
  this.cliente.celular=this.txtcelular
  this.cliente.direccion=this.txtdireccion
  factura.cliente=this.cliente; 
  this.factura.iva=0.12;
  factura.detalles.push(this.guardarDetalle(detalle))
  console.log(factura.detalles)
  this.servicio.saveFactura(factura).subscribe(data=>{
    console.log("esta es la data", data)
  });
  this.ngOnInit();
}
editarWS(factura: Factura){
  this.selectedFactura=factura
  this.txtcelular=factura.cliente.celular
  this.factura=Object.assign({},factura)
}
guardarDetalle(detalleFactura: DetalleFactura){
  console.log("entrastes al guardar detalle")
  detalleFactura.costoTotal=this.factura.total
  detalleFactura.cantidad=1;
  this.servicio.saveDetalleFactura(detalleFactura).subscribe(data=>{
    console.log("detalle: "+data);
  });
  return detalleFactura;
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
}
