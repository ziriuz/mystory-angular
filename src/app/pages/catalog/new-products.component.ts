import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.products$ = this.catalogService.getNewProducts();
  }
}
