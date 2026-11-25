export interface Product {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly image: string;
}

export interface CartItem extends Product {
  readonly qty: number;
}
