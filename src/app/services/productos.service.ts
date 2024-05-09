import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PERSONAL="http://localhost:3000/prendas"

////////// TRAER DATOS UNICOS /////////////

getPersonaUnica(id:any): Observable<any>{
  return this.http.get(`${this.API_PERSONAL}/${id}`)
}

/////////// LEER - GET /////////
  getPersonal(): Observable<any>{
    return this.http.get(this.API_PERSONAL)
  }




}
