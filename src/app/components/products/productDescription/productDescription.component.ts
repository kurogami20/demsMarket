import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../../../models/products';
import { ProductsService } from '../../../services/products/products.service';
import { AsyncPipe } from '@angular/common';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-description',
  templateUrl: `./productDescription.component.html`,
  imports: [AsyncPipe],
})
/**
 * Composant pour l'affichage de la description d'un produit.
 *
 * Ce composant récupère l'identifiant du produit depuis les paramètres de la route
 * et le stocke dans un signal pour une réactivité optimale.
 *
 * @example
 * // Utilisation dans un module de routage
 * const routes = [
 *   { path: 'product/:id', component: ProductDescriptionComponent }
 * ];
 *
 * @property {Signal<string>} productId - Signal contenant l'identifiant unique du produit
 * @property {ActivatedRoute} activatedRoute - Service injecté pour accéder aux paramètres de la route
 */
export class ProductDescriptionComponent {
  productId = signal('');
  private activatedRoute = inject(ActivatedRoute);
  constructor(private productsService: ProductsService) {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.productId.set(params['id']);
    });
  }

  product$!: Observable<IProduct>;

  ngOnInit() {
    this.product$ = this.productsService.getProductById(
      Number(this.productId()),
    );
  }
}
