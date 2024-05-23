import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {

  id:any;
  
  producto: any
  isEnable=false
  servicio = inject(ProductosService)
  router=inject(Router)
  ruta=inject(ActivatedRoute)
  
  ngOnInit(): void {
    this.ruta.params.subscribe(parametro =>{
      this.id=parametro['idProducto']
  
      this.servicio.getProductoUnico(this.id).subscribe(e=>{
        this.producto=e;
      })
    
    })
  }
  
  editar(datos:any){
    
    this.servicio.putProducto(datos.value).subscribe()
    window.location.href = 'productos'
  
   
  
  }  

  toggleView() {
    this.isEnable = !this.isEnable;
    if (!this.isEnable) {
      // Aquí puedes agregar lógica para guardar los cambios si es necesario
    }
  }
  

}
