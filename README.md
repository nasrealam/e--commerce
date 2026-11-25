# E-commerce

A small Angular 16 storefront: browse products, add them to a cart, adjust quantities and see the running total. The cart persists in `localStorage`.

## Structure

```
src/app
├── models/        Product / CartItem types
├── data/          Static product catalogue
├── services/      CartService (state + persistence)
├── header/        Toolbar with cart badge
├── product-list/  Catalogue page (/)
└── cart/          Cart page (/cart)
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Dev server at http://localhost:4200 |
| `npm test -- --watch=false --browsers=ChromeHeadlessCI` | Unit tests (headless) |
| `npm run build` | Production build into `docs/` for GitHub Pages |

Pushes to `main` run tests, build and deploy via GitHub Actions.
