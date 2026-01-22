import { Component, Input } from '@angular/core';
import { IProduct } from '../../../models/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './cardProduct.component.html',
  imports: [RouterLink],
})
export class CardProductComponent {
  @Input() product!: IProduct;
}
