import { Product } from '../models/product.model';

/** Image paths are relative so they resolve against the document `<base href>`. */
export const PRODUCTS: readonly Product[] = [
  {
    id: 1,
    name: 'iPhone 6',
    price: 2599,
    description: '8MP primary camera with auto focus and 1.2MP front facing camera.',
    image: 'assets/images/Iphone6.jpg',
  },
  {
    id: 2,
    name: 'iPhone 10',
    price: 2599,
    description: '8MP primary camera with auto focus and 1.2MP front facing camera.',
    image: 'assets/images/Iphone10.jpg',
  },
  {
    id: 3,
    name: 'iPhone 11',
    price: 2599,
    description: 'iPhone 11 is one of the top selling smartphones.',
    image: 'assets/images/Iphone11.jpg',
  },
  {
    id: 4,
    name: 'iPhone 12',
    price: 2599,
    description: 'The iPhone 12 Pro has three cameras against the two in the iPhone 12.',
    image: 'assets/images/Iphone12.jpg',
  },
];
