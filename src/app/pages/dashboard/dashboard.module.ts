import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CatalogModule } from '../catalog/catalog.module';
import { MaterialModule } from 'src/app/material.module';
import { UIModule } from 'src/app/ui-components/ui.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,    
    DashboardRoutingModule,
    MaterialModule,
    UIModule,
    LayoutModule,
    CatalogModule
  ]
})
export class DashboardModule { }
