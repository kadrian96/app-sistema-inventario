import { Component, inject } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

 


}
