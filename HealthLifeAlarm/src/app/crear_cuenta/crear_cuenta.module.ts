import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crear_cuentaComponent } from './crear_cuenta.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const uiModules = [
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [Crear_cuentaComponent],
  exports: [Crear_cuentaComponent, uiModules]
})
export class Crear_cuentaModule { }
