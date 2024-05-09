import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem, Product } from 'src/app/products';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  @Input() cartItems!: CartItem[];
  @Output() removeCartItem: EventEmitter<Product> = new EventEmitter();

  deleteItem(item: Product) {
    this.removeCartItem.emit(item);
  }
  // deleteItem(item: Product) {
  //   this.cartItems.find((x) => x.id == item.id);
  // }
}
