import { Component, inject } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2'

declare var window: any;
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  modal:any
  servicio=inject(CarritoService)
  cartItems:any=[];
  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('checkoutModal')
    );

    this.servicio.getCarrito().subscribe((p)=>{
      this.cartItems=p
    })
    
  }

  getSubtotal(): number {
    let subtotal:number
    subtotal= this.cartItems.reduce((sum:any, item:any) => sum + item.precio * item.cantidad, 0)
    return parseFloat(subtotal.toFixed(2));
  }

  getTotal(): number {
    let total:number
   total=this.getSubtotal()*1.15
    return  parseFloat(total.toFixed(2));
  }

  eliminarProducto(id:any){
    this.servicio.deleteProductoID(id).subscribe()
    window.location.reload()
  }

  openModal() {
    this.modal.show();
  }

  generatePDF() {
    const data = document.getElementById('pdfContent');
    html2canvas(data!).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('detalle-compra.pdf');
    });
  }
  vaciarCarrito(){

    Swal.fire({
      title: "Estas seguro?",
      text: "Perderas tus productos selecionados!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar!",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.servicio.deleteTodo().subscribe()
        Swal.fire({
          title: "Borrado!",
          text: "El producto ha sido eliminado.",
          icon: "success"
        }).then((result) => {
          window.location.reload()
        })
      }
    });

    
   }

}
