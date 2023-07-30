import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../domain/cliente';

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
}
