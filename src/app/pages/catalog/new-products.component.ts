import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';
import { CloudService, SortBy } from 'src/app/services/cloud.service';
import { Story } from 'src/app/model/story';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  stories$: Observable<Story[]>;

  constructor(
    private catalogService: CatalogService,
    private cloudService: CloudService
  ) { }

  ngOnInit() {
    this.stories$ = this.cloudService.getStories(SortBy.New);
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.catalogService.getNewProducts();    
  }
}
