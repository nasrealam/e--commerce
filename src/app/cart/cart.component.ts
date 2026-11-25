import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartItem } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private readonly cart = inject(CartService);
  readonly items$ = this.cart.items$;
  readonly total$ = this.cart.total$;

  setQty(item: CartItem, qty: number): void {
    this.cart.setQty(item.id, qty);
  }

  remove(item: CartItem): void {
    this.cart.remove(item.id);
  }

  clear(): void {
    this.cart.clear();
  }

  trackById(_: number, item: CartItem): number {
    return item.id;
  }
}
