import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  ///// login - logear
  private API_USERS= 'http://localhost:3000/login'

  postLogin(usuario: JSON):Observable<any>{
    return this.http.post(this.API_USERS, usuario)
  }



  
   ///// get -- obtener
   private API_USERS2= 'http://localhost:3000/users'

   getUsuarios(): Observable<any>{
   return this.http.get(this.API_USERS2)
   }
 
    ////////// EDITAR - PUT ////////////////
 
    putUsuarios(usuario: any): Observable<any>{
     return this.http.put(`${this.API_USERS2}/${usuario.id}`,usuario)
   }
 
 
 
    ////////// ELIMINAR - DELETE //////////////
   deleteUsuarioID(id:any): Observable<any>{
     return this.http.delete(`${this.API_USERS2}/${id}`)
   }
 
   ////////// TRAER DATOS UNICOS /////////////
 
   getCurrentUser(id:any): Observable<any>{
     return this.http.get(`${this.API_USERS2}/${id}`)
   }
 


}
