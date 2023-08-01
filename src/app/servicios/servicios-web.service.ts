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
  saveFactura(factura: Factura,detalle: DetalleFactura,cliente: Cliente){
    const datosCompletos = {
      factura: factura,
      cliente: cliente,
      detalle: detalle
    };
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/factura/crear",datosCompletos)
      }
  getAllFactura(){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPF/rs/factura/all")
  }
  CREAR(factura:Factura,detalle: DetalleFactura){
    const datosCompletos = {
      factura: factura,
      detalle: detalle
    };
    return this.http.post<any>("http://localhost:8080/ParqueaderoPF/rs/factura/crearD",factura && detalle)
  }
}
