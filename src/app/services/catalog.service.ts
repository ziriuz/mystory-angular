import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Group, CatalogResponse, CatalogItemResponse } from '../model/group';
import { Product, ProductResponse, ProductsResponse } from '../model/product';
import { tap, map, catchError } from 'rxjs/operators';
import { PRODUCTS } from '../data/mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private groupsUrl = 'assets/groups.json';
  private productsUrl: string = environment.apiBaseUrl + '/products';
  private catalogUrl: string = environment.apiBaseUrl + '/catalog';

  private selectedGroupId = new Subject<number>();
  selectedGroupId$ = this.selectedGroupId.asObservable();
  private selectedProduct: Product = null;

  selectGroup(id: number){
    this.selectedGroupId.next(id);
  }

  selectProduct(product: Product){
    this.selectedProduct = product;
  }

  getSelectedProduct():Product {
    return this.selectedProduct
  };
  
  constructor(
    private http: HttpClient
  ) { }

  getGroups (): Observable<Group[]> {
     return this.http.get<CatalogResponse>(this.catalogUrl).pipe(          
      tap( resp => {
        console.info(`Service response: ${resp.topic} success=${resp.success} message[${resp.message}]`);
        console.info(`data items#: ${resp.items.length}`);
      }),          
      map( resp => resp.items),
      catchError(this.handleError<Group[]>('getGroups', []))
    );
  }

  getGroup(id: number): Observable<Group> {    
    //return of(this.groups.find(group => group.id === id));
    return this.http.get<CatalogItemResponse>(`${this.catalogUrl}/${id}`).pipe(          
      tap( resp => {
        console.info(`Service response: ${resp.topic} success=${resp.success} message[${resp.message}]`);
        console.info(`data: ${resp.catalog}`);
      }),          
      map( resp => resp.catalog),
      catchError(this.handleError<Group>('getGroup', null))
    );
  }

  getProducts(groupId: number): Observable<Product[]> {
    return this.http.get<ProductsResponse>(`${this.productsUrl}?catalog=${groupId}`).pipe(
      tap( resp => {
        console.info(`Service response: ${resp.topic} success=${resp.success} message[${resp.message}]`);
        console.info(`data items#: ${resp.products.length}`);
      }),
      map( resp => resp.products),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }
  getProduct(id: number): Observable<Product> {    
    //return of(this.groups.find(group => group.id === id));
    return this.http.get<ProductResponse>(`${this.productsUrl}/${id}`).pipe(          
      tap( resp => {
        console.info(`Service response: ${resp.topic} success=${resp.success} message[${resp.message}]`);
        console.info(`data: ${resp.product}`);
      }),          
      map( resp => resp.product),
      catchError(this.handleError<Product>('getProduct', new Product()))
    );
  }  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNewProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the hero    
    return of(PRODUCTS.filter(product => product.isNew === true));
  }
}
