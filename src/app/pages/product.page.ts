import { Component } from '@angular/core';
import { ProductDescriptionComponent } from '../components/products/productDescription/productDescription.component';

@Component({
  selector: 'main',
  imports: [ProductDescriptionComponent],
  template: `
    <section class="w-full flex flex-col items-center gap-15">
      <product-description></product-description>
    </section>
  `,
})
export class ProductPage {}
