import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:any;
  password: String= '' 
 
  servicio = inject(LoginService)
  ruta= inject(Router)
 
  token:any;
 
 
  login( formulario:any){
   this.servicio.postLogin(formulario.value).subscribe(u =>{
     //console.log(u.accessToken);
     this.token = u.accessToken
     if(this.token != ''){
       localStorage.setItem("acceso", 'true')
       localStorage.setItem("userId", u.user.id )
       ///this.ruta.navigateByUrl('privado')
       window.location.href = 'productos'
     }
     
   })
  }
}
