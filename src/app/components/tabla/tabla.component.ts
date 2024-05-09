import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(ProductosService)

  
  

  prendas:any

  ValorMaximo:any
  ValorMinimo:any
  findId:any
  captureId:any
  categoria = 'seleccione'

  

  



  
  

  // //FUNCION QUE SE EJECUTA CUANDO SE CARGA UNA PAGINA 
  ngOnInit(): void {

    this.servicio.getPersonal().subscribe(p=>{
      this.prendas=p;
    })
    
  }


}
