import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crear_habitoComponent } from './crear_habito.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

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
  declarations: [Crear_habitoComponent],
  exports: [Crear_habitoComponent, uiModules]
})
export class Crear_habitoModule { }
