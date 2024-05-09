import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  ruta=inject(ActivatedRoute)
  servicio = inject(ProductosService)

  
  

  prenda:any


  id:any
  item:any
  ngOnInit(): void {
    this.ruta.params.subscribe(parametro =>{
      this.id=parametro['idProducto']
  
      this.servicio.getPersonaUnica(this.id).subscribe(e=>{
        this.prenda=e;
      })
    
    })
  }

}
