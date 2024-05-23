import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2'
import { CarritoService } from '../../services/carrito.service';
import { jsDocComment } from '@angular/compiler';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  servicio = inject(ProductosService);

  servicio2 = inject(LoginService);

  servicio3 = inject(CarritoService)
  prendas: any;

  ValorMaximo: any;
  ValorMinimo: any;
  findId: any;
  captureId: any;
  categoria = 'seleccione';
  rol: any;
  carrito:any=[]
 acceso=localStorage.getItem('acceso')

  // //FUNCION QUE SE EJECUTA CUANDO SE CARGA UNA PAGINA
  ngOnInit(): void {
    this.servicio.getPersonal().subscribe((p) => {
      this.prendas = p;
    });
    this.servicio2
      .getCurrentUser(localStorage.getItem('userId'))
      .subscribe((p) => {
        this.rol = p.type;
      });
      
      this.servicio3.getCarrito().subscribe((p) => {
        this.carrito = p;
        console.log(this.carrito)
      });
  }

  addtoCart(item:any){
   
    let isAlredyinCart=false;
    let alredycantidad
    for (let index = 0; index < this.carrito.length; index++) {
      if(this.carrito[index].id==item.id){
        isAlredyinCart=true;
        alredycantidad=this.carrito[index].cantidad
      }
      
      
    }
    /*for (let element of this.carrito) {
      if(element.id==item.id){
        isAlredyinCart=true;
        alredycantidad=element.cantidad
      }
      
    }*/
    console.log(isAlredyinCart)
    const payload = {
      id:item.id,
      nombre:item.nombre,
      precio:item.precio,
      categoria:item.categoria,
      url:item.url,
      cantidad:isAlredyinCart?alredycantidad+1:1
    }
    if(isAlredyinCart==true){
      this.servicio3.putProducto(payload).subscribe()
    }else{
      this.servicio3.postProducto(payload).subscribe()

    }

   
    
    Swal.fire({
      title: "Listo!",
      text: "Producto añadido al carrito!",
      icon: "success"
    });
  }

  eliminar(id:any){

    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.servicio.deleteProductoID(id).subscribe()
        Swal.fire({
          title: "Borrado!",
          text: "El producto ha sido eliminado.",
          icon: "success"
        }).then((result) => {
          window.location.reload()
        })
      }
    });

    

    
  
  //alert("Esta seguro de que desea eliminar?")
   
  
  }
  

}




