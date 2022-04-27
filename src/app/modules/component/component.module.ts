import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { ComponentComponent } from './component.component';
import { ComponentRoutingModule } from './component-routing.module';

@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    HighchartsChartModule,
    MatCardModule
  ]
})
export class ComponentModule { }
