import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

const STORAGE_KEY = 'ecommerce.cart.v1';

/** Single source of truth for the shopping cart; persists to localStorage. */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<readonly CartItem[]>(this.load());

  readonly items$: Observable<readonly CartItem[]> = this.itemsSubject.asObservable();
  readonly count$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((sum, i) => sum + i.qty, 0))
  );
  readonly total$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((sum, i) => sum + i.price * i.qty, 0))
  );

  add(product: Product): void {
    const items = this.itemsSubject.value;
    const exists = items.some((i) => i.id === product.id);
    this.update(
      exists
        ? items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...items, { ...product, qty: 1 }]
    );
  }

  /** Sets the quantity; a value below 1 removes the item. */
  setQty(id: number, qty: number): void {
    if (qty < 1) {
      this.remove(id);
      return;
    }
    this.update(this.itemsSubject.value.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  remove(id: number): void {
    this.update(this.itemsSubject.value.filter((i) => i.id !== id));
  }

  clear(): void {
    this.update([]);
  }

  private update(items: readonly CartItem[]): void {
    this.itemsSubject.next(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable (private mode / quota): keep the in-memory cart.
    }
  }

  private load(): CartItem[] {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
      return Array.isArray(parsed)
        ? parsed.filter(
            (i): i is CartItem =>
              typeof i?.id === 'number' &&
              typeof i?.price === 'number' &&
              Number.isInteger(i?.qty) &&
              i.qty > 0
          )
        : [];
    } catch {
      return [];
    }
  }
}
