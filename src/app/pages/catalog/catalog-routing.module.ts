import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductsComponent } from './products.component';
import { StoryUploaderComponent } from './story-uploader.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ProductsComponent,data: { showFooter: false } },
  { path: 'upload', component: StoryUploaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
