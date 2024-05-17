import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  ruta= inject(Router)
  servicio=inject(LoginService)
  usuario:any
  isEditing = false;
  password:any
  ngOnInit(): void {
  
    this.servicio.getCurrentUser(localStorage.getItem('userId')).subscribe(p=>{
      this.usuario=p
    })
    
    
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      // Aquí puedes agregar lógica para guardar los cambios si es necesario
    }
  }


  cerrar(){


    localStorage.removeItem('acceso')
    localStorage.removeItem('userId')
    //localStorage.setItem('acceso', 'false')
    //this.ruta.navigateByUrl('login')
    window.location.href = 'login'
    }
}
