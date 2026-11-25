import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Products | E-commerce' },
  { path: 'cart', component: CartComponent, title: 'Cart | E-commerce' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  // Hash routing keeps deep links working on GitHub Pages.
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
