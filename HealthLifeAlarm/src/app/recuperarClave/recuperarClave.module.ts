import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarClaveComponent } from './recuperarClave.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const uiModules = [
  MatFormFieldModule,
  MatIconModule
]

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [RecuperarClaveComponent],
  exports: [RecuperarClaveComponent, uiModules]
})
export class RecuperarClaveModule { }
