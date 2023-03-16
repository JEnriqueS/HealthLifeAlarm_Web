import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Eliminar_cuentaComponent } from './eliminar_cuenta.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';

const uiModules = [
  MatIconModule
]

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [Eliminar_cuentaComponent],
  exports: [Eliminar_cuentaComponent, uiModules]
})
export class Eliminar_cuentaModule { }
