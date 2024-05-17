import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { LoginService } from '../../services/login.service';

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

  prendas: any;

  ValorMaximo: any;
  ValorMinimo: any;
  findId: any;
  captureId: any;
  categoria = 'seleccione';
  rol: any;

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
  }
}
