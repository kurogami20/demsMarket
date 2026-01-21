import { Component } from '@angular/core';
import { ProductListComponent } from '../components/products/productList/productList.component';

@Component({
  selector: 'main',
  imports: [ProductListComponent],
  template: `
    <section class="w-full flex flex-col items-center">
      <h1>Catalogue Page</h1>
      <product-list
        class="flex flex-col gap-5 w-full md:grid md:grid-cols-2 xl:grid-cols-3 "
      ></product-list>
    </section>
  `,
})
export class ProductPage {}
