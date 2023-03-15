import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mi_progresoComponent } from './mi_progreso.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
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
