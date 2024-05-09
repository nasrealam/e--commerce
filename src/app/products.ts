export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface CartItem extends Product {
  qty: number;
}

export const products = [
  {
    id: 1,
    name: 'Iphone 6',
    price: 2599,
    description:
      '8MP primary camera with auto focus and 1.2MP front facing camera ',
    image: '/assets/images/Iphone6.jpg',
  },
  {
    id: 2,
    name: 'Iphone 10',
    price: 2599,
    description:
      '8MP primary camera with auto focus and 1.2MP front facing camera',
    image: '/assets/images/Iphone10.jpg',
  },
  {
    id: 3,
    name: 'Iphone 11',
    price: 2599,
    description: 'iPhone 11 is one of the top selling smartphones',
    image: '/assets/images/Iphone11.jpg',
  },

  {
    id: 4,
    name: 'Iphone 12',
    price: 2599,
    description:
      'The iPhone 12 Pro has three cameras against the two in the iPhone 12',
    image: '/assets/images/Iphone12.jpg',
  },
];
