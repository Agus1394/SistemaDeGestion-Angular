import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {
  //url q obtiene la lista de los empleados
  private baseURL= "http://localhost:8080/api-rest/empleados";

  constructor(private HttpClient : HttpClient){}

  //Método que trae una lista de empleados
  traerListaEmpleados():Observable<Empleado[]>{
    return this.HttpClient.get<Empleado[]>(`${this.baseURL}`)
  }

  //Método para editar los datos
  actualizarEmpleado(id:number ,empleado:Empleado): Observable<Object>{
    return this.HttpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  //Método que registra un empleado
  crearEmpleado(empleado:Empleado):Observable<Object>{
    return this.HttpClient.post(`${this.baseURL}`,empleado)
  }

  //Eliminar
  eliminarEmpleado(id:number):Observable<Object>{
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }

  //trae a un empleado por su ID
  traerPorId(id:number):Observable<Empleado>{
    return this.HttpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

}
