import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import Swal from 'sweetalert2'
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-form-nuevoproducto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-nuevoproducto.component.html',
  styleUrl: './form-nuevoproducto.component.css'
})
export class FormNuevoproductoComponent {
 id:any;
 nombre:any;
 precio:any;
 categoria:any;
 url:any;
isEnable=false;

  servicio = inject(ProductosService)
  
  guardar(datos:any){
 //   console.log(datos.value)
  this.servicio.postProducto(datos.value).subscribe()
    //recargar la pagina al guardar la informacion
    Swal.fire({
      title: "Guardado!",
      text: "Se ha añadido un nuevo producto",
      icon: "info"
    }).then((result) => {
      window.location.reload()
    })

    
 
 }
 toggleView(){
  this.isEnable=!this.isEnable
 }

 

}
