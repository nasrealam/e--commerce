import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PRODUCTS } from '../data/products';
import { CartService } from '../services/cart.service';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let fixture: ComponentFixture<CartComponent>;
  let cart: CartService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [RouterTestingModule, NoopAnimationsModule, MatButtonModule, MatIconModule],
    });
    cart = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartComponent);
  });

  it('shows an empty state', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Your cart is empty');
  });

  it('lists items and the total', () => {
    cart.add(PRODUCTS[0]);
    cart.add(PRODUCTS[0]);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.line').length).toBe(1);
    expect(el.querySelector('.total')?.textContent).toContain('$5,198.00');
  });
});
