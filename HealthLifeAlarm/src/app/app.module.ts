import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RecuperarClaveModule } from './recuperarClave/recuperarClave.module';
import { Mis_habitosModule } from './mis_habitos/mis_habitos.module';
import { Mi_progresoModule } from './mi_progreso/mi_progreso.module';
import { AlarmasModule } from './alarmas/alarmas.module';
import { Eliminar_cuentaModule } from './eliminar_cuenta/eliminar_cuenta.module';
import { Crear_cuentaModule } from './crear_cuenta/crear_cuenta.module';
import { Actualizar_datosModule } from './actualizar_datos/actualizar_datos.module';
import { MatDialogModule } from '@angular/material/dialog';
import { Crear_alarmaModule } from './crear_alarma/crear_alarma.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';
import { Agregar_ringtoneModule } from './agregar_ringtone/agregar_ringtone.module';
import { Modificar_alarmaModule } from './modificar_alarma/modificar_alarma.module';
import { Establecer_metaModule } from './establecer_meta/establecer_meta.module';
import { Crear_habitoModule } from './crear_habito/crear_habito.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RecuperarClaveModule,
    Mis_habitosModule,
    Mi_progresoModule,
    AlarmasModule,
    Eliminar_cuentaModule,
    Crear_cuentaModule,
    Actualizar_datosModule,
    MatDialogModule,
    EstadisticasModule,
    Agregar_ringtoneModule,
    Crear_alarmaModule,
    Modificar_alarmaModule,
    Establecer_metaModule,
    Crear_habitoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
