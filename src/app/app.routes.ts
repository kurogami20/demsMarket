import { Routes } from '@angular/router';
import { AllProductsPage } from './pages/allProducts.page';
import { ProductPage } from './pages/product.page';

export const routes: Routes = [
  {
    path: 'products',
    component: AllProductsPage,
    title: 'Products',
  },
  {
    path: 'product/:id',
    component: ProductPage,
    title: 'Product Details',
  },
];
