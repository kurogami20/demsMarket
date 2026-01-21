import { Component, Input } from '@angular/core';
import { IProduct } from '../../../models/products';

@Component({
  selector: 'product-card',
  templateUrl: './cardProduct.component.html',
})
export class CardProductComponent {
  @Input() product!: IProduct;
}
