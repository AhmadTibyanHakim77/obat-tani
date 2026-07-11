# Arsitektur AgroNusa

## Flow

Client -> Next.js Frontend -> REST API -> Laravel Backend -> Redis Cache -> MySQL Database -> Cloud Storage -> CDN

## Layer

- Presentation Layer: halaman, komponen, motion, layout.
- Application Layer: service frontend, query hooks, form schema.
- Business Layer: Laravel service classes.
- Domain Layer: DTO, enum, rule domain.
- Repository Layer: query persistence.
- Database Layer: migration, seed, index.

## Modul

- Authentication
- Products
- Categories
- Orders
- Inventory
- Customers
- Reviews
- Analytics
- Notifications
- Payments
- Shipping
- Wishlist
- Coupons
- Blog
- FAQ
- Gallery
- Search
