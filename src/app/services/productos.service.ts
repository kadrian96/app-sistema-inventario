import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PERSONAL="http://localhost:9090/productos"

   ////////// GUARDAR - POST //////////////
   postProducto(producto: JSON): Observable<any>{
    return this.http.post(this.API_PERSONAL,producto)
  } 


////////// TRAER DATOS UNICOS /////////////

getProductoUnico(id:any): Observable<any>{
  return this.http.get(`${this.API_PERSONAL}/${id}`)
}

/////////// LEER - GET /////////
  getPersonal(): Observable<any>{
    return this.http.get(this.API_PERSONAL)
  }

  ////////// EDITAR - PUT ////////////////

  putProducto(persona: any): Observable<any>{
    return this.http.put(`${this.API_PERSONAL}/${persona.id}`,persona)
  }

    ////////// ELIMINAR - DELETE //////////////
    deleteProductoID(id:any): Observable<any>{
      return this.http.delete(`${this.API_PERSONAL}/${id}`)
    }
  






}
