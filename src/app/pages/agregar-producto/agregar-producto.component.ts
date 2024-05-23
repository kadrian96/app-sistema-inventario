import { Component } from '@angular/core';
import { FormNuevoproductoComponent } from '../../components/form-nuevoproducto/form-nuevoproducto.component';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormNuevoproductoComponent],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

}
