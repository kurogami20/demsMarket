import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environement/environement';
import { IProduct } from '../../models/products';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // je défini l'URL de base de l'API des produits
  private apiUrl = environment.apiUrl + '/products';

  // je crée le constructeur du service en injectant HttpClient
  constructor(private http: HttpClient) {}

  // méthode pour récupérer tous les produits de l'API
  getAllProducts() {
    // je définie l'interface IProduct pour typer la réponse de l'API
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  // méthode pour récupérer un produit par son ID
  getProductById(id: number) {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }
}
