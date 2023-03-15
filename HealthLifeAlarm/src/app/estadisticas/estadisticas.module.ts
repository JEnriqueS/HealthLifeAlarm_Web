import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './pieChart/pieChart.component';

const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatChipsModule
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxChartsModule,
    uiModules
  ],
  declarations: [EstadisticasComponent, PieChartComponent],
  exports: [EstadisticasComponent, PieChartComponent, uiModules]
})
export class EstadisticasModule { }
