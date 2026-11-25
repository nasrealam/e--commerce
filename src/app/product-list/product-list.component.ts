import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PRODUCTS } from '../data/products';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private readonly cart = inject(CartService);
  readonly products = PRODUCTS;

  addToCart(product: Product): void {
    this.cart.add(product);
  }

  trackById(_: number, product: Product): number {
    return product.id;
  }
}
