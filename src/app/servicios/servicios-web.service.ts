import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../domain/cliente';
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
  buscarFactura(numeroFactura: string){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/factura/buscarN/"+numeroFactura)
  }
  saveDetalleFactura(detalleFactura: DetalleFactura){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/detalle/crear",detalleFactura)
  }
  getAllDetalleFactura(){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/detalle/all")
  }
}
