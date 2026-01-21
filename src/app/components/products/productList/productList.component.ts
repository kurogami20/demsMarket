import { Component, computed, viewChild, viewChildren } from '@angular/core';
import { CardProductComponent } from '../cardProduct/cardProduct.component';
import { IProduct } from '../../../models/products';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from '../../../services/products/products.service';
import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'product-list',
  imports: [CardProductComponent, NgForOf, AsyncPipe],
  template: `<product-card
    class="flex flex-col items-center "
    *ngFor="let product of products$ | async"
    [product]="product"
  >
  </product-card>`,
})
export class ProductListComponent {
  products$!: Observable<IProduct[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }
}
