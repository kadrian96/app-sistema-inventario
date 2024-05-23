import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  router= inject(Router)
  servicio=inject(LoginService)
  usuario:any
  isEditing = false;
  password:any
  id:any;
  servicio2=inject(CarritoService)
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


  cerrar():void{

    this.servicio2.deleteTodo().subscribe()
    localStorage.removeItem('acceso')
    localStorage.removeItem('admin')
    localStorage.removeItem('userId')
    //localStorage.setItem('acceso', 'false')
    //this.ruta.navigateByUrl('login')
    window.location.href = 'login'
    }

    editar(datos:any){
    
      this.servicio.putUsuarios(datos.value).subscribe()
      this.toggleEdit()
      window.location.reload()
    
     
    
    } 

    


}
