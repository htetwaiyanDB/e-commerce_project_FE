# Modern E-Commerce Frontend

A full-featured e-commerce application built with React, Vite, and Tailwind CSS.

## Features

### Customer Features
- 🛍️ Browse products by category
- 🔍 Search and filter products
- 🛒 Shopping cart functionality
- ✅ Secure checkout process
- 📦 Order tracking
- 👤 User authentication (Login/Register)

### Admin Features
- 📊 Product management (CRUD operations)
- 🏷️ Category management (CRUD operations)
- 🔐 Admin-only protected routes

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: React Context API

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Laravel backend running on `http://localhost:8000`

## Installation

1. Navigate to the project directory:
```bash
cd ecommerce-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── CategoryCard.jsx
│   └── ProtectedRoute.jsx
├── context/            # React Context for state management
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── pages/              # Page components
│   ├── admin/
│   │   ├── AdminProducts.jsx
│   │   └── AdminCategories.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Categories.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Orders.jsx
├── services/           # API service layer
│   ├── api.js
│   ├── authService.js
│   ├── productService.js
│   ├── categoryService.js
│   └── orderService.js
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## API Configuration

The application expects a Laravel backend API running at `http://localhost:8000`. You can change this in `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
    },
  },
}
```

## API Endpoints Used

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/{id}` - Get single category
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/{id}` - Update category (admin)
- `DELETE /api/categories/{id}` - Delete category (admin)

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/{id}` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/{id}` - Update order (admin)
- `DELETE /api/orders/{id}` - Delete order (admin)

## Available Scripts

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory if you need to customize settings:

```
VITE_API_URL=http://localhost:8000/api
```

## Key Features Explained

### Authentication
- JWT-based authentication
- Token stored in localStorage
- Automatic token refresh on 401 errors
- Protected routes for authenticated users only

### Shopping Cart
- Persistent cart using localStorage
- Add/remove items
- Update quantities
- Real-time total calculation

### Admin Dashboard
- Protected admin routes
- Product CRUD operations with modal forms
- Category CRUD operations
- Real-time data updates

## Responsive Design

The application is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Vite team for the blazing fast build tool
