import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { LoginComponent } from './login/login.component';
import { Mis_habitosComponent } from './mis_habitos/mis_habitos.component';
import { Mi_progresoComponent } from './mi_progreso/mi_progreso.component';
import { Crear_cuentaComponent } from './crear_cuenta/crear_cuenta.component';
import { RecuperarClaveComponent } from './recuperarClave/recuperarClave.component';
import { Eliminar_cuentaComponent } from './eliminar_cuenta/eliminar_cuenta.component';
import { Actualizar_datosComponent } from './actualizar_datos/actualizar_datos.component';
import { Crear_alarmaComponent } from './crear_alarma/crear_alarma.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { Agregar_ringtoneComponent } from './agregar_ringtone/agregar_ringtone.component';
import { Buscar_dispositivoComponent } from './agregar_ringtone/buscar_dispositivo/buscar_dispositivo.component';
import { Modificar_alarmaComponent } from './modificar_alarma/modificar_alarma.component';
import { Establecer_metaComponent } from './establecer_meta/establecer_meta.component';
import { Crear_habitoComponent } from './crear_habito/crear_habito.component';

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
    path: 'alarmas',
    component: AlarmasComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear_cuenta',
    component: Crear_cuentaComponent,
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
    path: 'crear_alarma',
    component: Crear_alarmaComponent,
    pathMatch: 'full'
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
    pathMatch: 'full'
  },
  {
    path: 'agregar_ringtone',
    component: Agregar_ringtoneComponent,
    pathMatch: 'full'
  },
  {
    path: 'modificar_alarma',
    component: Modificar_alarmaComponent,
    pathMatch: 'full'
  }
  ,
  {
    path: 'establecer_meta',
    component: Establecer_metaComponent,
    pathMatch: 'full'
  },
  {
    path: 'buscar_dispositivo',
    component: Buscar_dispositivoComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear_habito',
    component: Crear_habitoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
