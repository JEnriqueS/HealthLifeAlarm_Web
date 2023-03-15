import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actualizar_datosComponent } from './actualizar_datos.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

const uiModules = [
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [Actualizar_datosComponent],
  exports: [Actualizar_datosComponent, uiModules]
})
export class Actualizar_datosModule { }
