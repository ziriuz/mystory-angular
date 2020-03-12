import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { MaterialModule } from '../../material.module';
import { ProductsComponent } from './products.component';
import { NewProductsComponent } from './new-products.component';
import { TopStoriesComponent } from './top-stories.component';
import { StoryUploaderComponent } from './story-uploader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/ui-components/ui.module';


@NgModule({
  declarations: [CatalogComponent, ProductsComponent, NewProductsComponent, TopStoriesComponent, StoryUploaderComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    UIModule
  ],
  exports: [CatalogComponent, NewProductsComponent, TopStoriesComponent],
  entryComponents: [NewProductsComponent, TopStoriesComponent]
})
export class CatalogModule { }
