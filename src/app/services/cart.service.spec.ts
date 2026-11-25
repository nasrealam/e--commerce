import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { PRODUCTS } from '../data/products';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('adds a product and increments quantity on repeat adds', async () => {
    service.add(PRODUCTS[0]);
    service.add(PRODUCTS[0]);
    const items = await firstValueFrom(service.items$);
    expect(items.length).toBe(1);
    expect(items[0].qty).toBe(2);
  });

  it('computes count and total', async () => {
    service.add(PRODUCTS[0]);
    service.add(PRODUCTS[1]);
    service.setQty(PRODUCTS[1].id, 3);
    expect(await firstValueFrom(service.count$)).toBe(4);
    expect(await firstValueFrom(service.total$)).toBe(PRODUCTS[0].price + PRODUCTS[1].price * 3);
  });

  it('removes an item when quantity drops below 1', async () => {
    service.add(PRODUCTS[0]);
    service.setQty(PRODUCTS[0].id, 0);
    expect((await firstValueFrom(service.items$)).length).toBe(0);
  });

  it('ignores removal of unknown ids', async () => {
    service.add(PRODUCTS[0]);
    service.remove(999);
    expect((await firstValueFrom(service.items$)).length).toBe(1);
  });

  it('persists and restores the cart', async () => {
    service.add(PRODUCTS[2]);
    TestBed.resetTestingModule();
    const restored = TestBed.inject(CartService);
    const items = await firstValueFrom(restored.items$);
    expect(items.map((i) => i.id)).toEqual([PRODUCTS[2].id]);
  });

  it('survives corrupted storage', async () => {
    localStorage.setItem('ecommerce.cart.v1', '{not json');
    TestBed.resetTestingModule();
    const fresh = TestBed.inject(CartService);
    expect((await firstValueFrom(fresh.items$)).length).toBe(0);
  });
});
