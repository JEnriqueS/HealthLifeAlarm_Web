import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agregar_ringtoneComponent } from './agregar_ringtone.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { Buscar_dispositivoComponent } from './buscar_dispositivo/buscar_dispositivo.component';

const uiModules = [
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatChipsModule
]

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [Agregar_ringtoneComponent, Buscar_dispositivoComponent],
  exports: [Agregar_ringtoneComponent, Buscar_dispositivoComponent, uiModules]
})
export class Agregar_ringtoneModule { }
