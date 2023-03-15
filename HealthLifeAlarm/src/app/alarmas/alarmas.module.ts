import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';


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
  MatInputModule
];

@NgModule({
  imports: [
    CommonModule,
    uiModules,
    AppRoutingModule
  ],
  declarations: [AlarmasComponent],
  exports: [AlarmasComponent, uiModules]
})
export class AlarmasModule { }
