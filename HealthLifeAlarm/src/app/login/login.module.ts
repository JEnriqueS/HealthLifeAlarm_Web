import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
  declarations: [LoginComponent],
  exports: [LoginComponent, uiModules]
})
export class LoginModule { }
