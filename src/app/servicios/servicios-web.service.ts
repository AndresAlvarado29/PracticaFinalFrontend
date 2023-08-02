import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../domain/cliente';
import { Vehiculo } from '../domain/vehiculo';
import { Factura } from '../domain/factura';
import { DetalleFactura } from '../domain/detalleFactura';

@Injectable({
  providedIn: 'root'
})
export class ServiciosWebService {

  constructor(private http: HttpClient) { }
  save(cliente: Cliente){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/cliente/crear", cliente)
  }
  getAll(){
  return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/cliente/all")
  } 
  saveVehiculo(vehiculo: Vehiculo){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/vehiculos", vehiculo)
  }

  updateVehiculo(vehiculo: Vehiculo){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/vehiculos", vehiculo)
  }

  getAllVehiculo(){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/vehiculos/listarVehiculos")
  }

  /*
  deleteVehiculo(placa: string){
    //const url: string = `http://localhost:8080/ParqueaderoPF/rs/personas/${cedula}`
    return this.http.delete<HttpResponse<any>>(`http://localhost:8080/ParqueaderoPF/rs/vehiculos/${placa}`)
  }
  */
  delete(cedula: string) {
    return this.http.delete<any>("http://localhost:8080/ParqueaderoPF/rs/cliente/borrar/"+cedula);
  }
  buscar(cedula: string){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/cliente/buscar/"+cedula);
  }
  saveFactura(factura: Factura){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/factura/crear",factura)
      }
  getAllFactura(){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/factura/all")
  }
  saveDetalleFactura(detalleFactura: DetalleFactura){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/detalle/crear",detalleFactura)
  }
  getAllDetalleFactura(){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/detalle/all")
  }
}
