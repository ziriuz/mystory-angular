import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { CatalogModule } from '../catalog/catalog.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { AudioPlayerModule } from '../audioplayer/audioplayer.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SnackbarComponent],
  entryComponents: [SnackbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CatalogModule,
    AudioPlayerModule    
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SnackbarComponent
  ]
})
export class LayoutModule { }
