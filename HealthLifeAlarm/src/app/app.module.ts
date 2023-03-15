import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RecuperarClaveModule } from './recuperarClave/recuperarClave.module';
import { Mis_habitosModule } from './mis_habitos/mis_habitos.module';
import { Mi_progresoModule } from './mi_progreso/mi_progreso.module';
import { Eliminar_cuentaModule } from './eliminar_cuenta/eliminar_cuenta.module';
import { Actualizar_datosModule } from './actualizar_datos/actualizar_datos.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EstadisticasModule } from './estadisticas/estadisticas.module';

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
    Eliminar_cuentaModule,
    Actualizar_datosModule,
    MatDialogModule,
    EstadisticasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
