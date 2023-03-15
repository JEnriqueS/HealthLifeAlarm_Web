import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eliminar_cuentaComponent } from './eliminar_cuenta.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [Eliminar_cuentaComponent],
  exports: [Eliminar_cuentaComponent]
})
export class Eliminar_cuentaModule { }
