import { Component, OnInit } from '@angular/core';
import { CartItem, Product, products } from '../products';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  products?: Product[];
  cartItems: CartItem[] = [];

  ngOnInit(): void {
    this.products = products;
  }

  addToCart(item: Product) {
    let product = this.cartItems.find((x) => x.id === item.id);
    if (product) {
      product.qty++;
    } else {
      this.cartItems.push({ ...item, qty: 1 });
    }
  }

  removeCartItem(product: Product) {
    this.cartItems.splice(
      this.cartItems.findIndex((x) => x.id === product.id),
      1
    );
  }
}
