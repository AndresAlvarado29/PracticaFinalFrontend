import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../domain/cliente';
import { Vehiculo } from '../domain/vehiculo';

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

  findVehiculo(placa: String){
   return this.http.get<any> ("http://localhost:8080/ParqueaderoPF/rs/vehiculos/buscarVehiculo/"+ placa)
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

  
}
