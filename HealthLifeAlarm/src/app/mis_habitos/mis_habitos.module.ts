import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Mis_habitosComponent } from './mis_habitos.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { EstadisticasModule } from '../estadisticas/estadisticas.module';


const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatChipsModule,
  MatTableModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatGridListModule
];

@NgModule({
  imports: [
    CommonModule,
    uiModules,
    AppRoutingModule,
    EstadisticasModule
  ],
  declarations: [Mis_habitosComponent],
  exports: [Mis_habitosComponent, uiModules, EstadisticasModule]
})
export class Mis_habitosModule { }

