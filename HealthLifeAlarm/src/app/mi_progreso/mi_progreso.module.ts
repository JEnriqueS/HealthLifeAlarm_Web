import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mi_progresoComponent } from './mi_progreso.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

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
  MatGridListModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    CommonModule,
    uiModules,
    AppRoutingModule
  ],
  declarations: [Mi_progresoComponent],
  exports: [Mi_progresoComponent, uiModules]
})
export class Mi_progresoModule { }
