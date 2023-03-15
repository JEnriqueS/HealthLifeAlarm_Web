import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarClaveComponent } from './recuperarClave.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

const uiModules = [
  MatFormFieldModule
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
