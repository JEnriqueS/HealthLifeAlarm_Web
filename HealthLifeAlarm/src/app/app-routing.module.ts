import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Mis_habitosComponent } from './mis_habitos/mis_habitos.component';
import { Mi_progresoComponent } from './mi_progreso/mi_progreso.component';
import { RecuperarClaveComponent } from './recuperarClave/recuperarClave.component';
import { Eliminar_cuentaComponent } from './eliminar_cuenta/eliminar_cuenta.component';
import { Actualizar_datosComponent } from './actualizar_datos/actualizar_datos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'mis_habitos',
    component: Mis_habitosComponent,
    pathMatch: 'full'
  },
  {
    path: 'mi_progreso',
    component: Mi_progresoComponent,
    pathMatch: 'full'
  },
  {
    path: 'recuperar_clave',
    component: RecuperarClaveComponent,
    pathMatch: 'full'
  },
  {
    path: 'eliminar_cuenta',
    component: Eliminar_cuentaComponent,
    pathMatch: 'full'
  },
  {
    path: 'actualizar_datos',
    component: Actualizar_datosComponent,
    pathMatch: 'full'
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
