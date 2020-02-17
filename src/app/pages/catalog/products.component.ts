import { Location } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Group } from '../../model/group';
import { CatalogService } from '../../services/catalog.service';
import { Product } from 'src/app/model/product';
import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Output() title = new EventEmitter<string>();
  private unsubscribe$ = new Subject<void>();
  group$: Observable<Group>;
  products$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catalogService: CatalogService  ) {
  }

  ngOnInit() {
    this.getGroup();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.catalogService.selectGroup(null);
  }
  getGroup(): void {
    this.group$ = this.route.paramMap.pipe(
      takeUntil(this.unsubscribe$),
      switchMap((params: ParamMap) =>{
        const id:number = +params.get('id');
        this.catalogService.selectGroup(id);
        this.products$ = this.catalogService.getProducts(id);
        return this.catalogService.getGroup(id);
      })
    );
    /*
    this.subsParam = this.route.paramMap.subscribe(params => {
      this.subsGroup = this.catalogService.getGroup(+params.get('id'))
          .subscribe(group => 
            {
              if (group != undefined){
                this.group = group;
                this.title.emit(this.group.name);
              }
            });
      this.subsProducts = this.catalogService.getProducts(+params.get('id'))
            .subscribe(products => this.products = products);
    
    });
    */
    //const id = +this.route.snapshot.paramMap.get('id');
    //this.catalogService.getGroup(id)
    //  .subscribe(group => this.group = group);
  }
  uploadStory(product){
    this.catalogService.selectProduct(product);
    this.router.navigate(['/upload', {productId: product.id}]);
  }
}
