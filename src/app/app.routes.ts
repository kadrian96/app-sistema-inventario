import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { Error404Component } from './pages/error404/error404.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard, perfilGuard } from './guards/login.guard';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';

export const routes: Routes = [

    {path: 'home', component:HomeComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'nosotros', component:NosotrosComponent},
    {path: 'contactos', component:ContactosComponent},
    {path: 'productos/:idProducto', component:DetalleProductoComponent},
    { path: 'login', component: LoginComponent, canActivate:[loginGuard]},
    { path: 'perfil', component: PerfilComponent, canActivate:[perfilGuard] },
    { path: 'carrito', component: CarritoComponent, canActivate:[perfilGuard] },
    {path: 'formulario/:idProducto', component:FormularioProductoComponent},


    //redirecciones
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: '**', component:Error404Component},



];
