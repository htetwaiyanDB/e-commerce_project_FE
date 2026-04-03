# Quick Start Guide - E-Commerce Frontend

## 🚀 Getting Started

Your modern e-commerce frontend is now ready! Here's how to use it:

### Starting the Application

The development server is already running at **http://localhost:3000**

If you need to restart it:
```bash
cd ecommerce-frontend
npm run dev
```

### Backend Requirements

Make sure your Laravel backend is running at **http://localhost:8000** with the following API endpoints:

```
POST      api/auth/login
POST      api/auth/logout
GET|HEAD  api/auth/me
POST      api/auth/register
GET|HEAD  api/categories
POST      api/categories
GET|HEAD  api/categories/{category}
PUT       api/categories/{category}
PATCH     api/categories/{category}
DELETE    api/categories/{category}
GET|HEAD  api/orders
POST      api/orders
GET|HEAD  api/orders/{order}
PUT       api/orders/{order}
PATCH     api/orders/{order}
DELETE    api/orders/{order}
GET|HEAD  api/products
POST      api/products
GET|HEAD  api/products/{product}
PUT       api/products/{product}
PATCH     api/products/{product}
DELETE    api/products/{product}
```

## 📱 Features Overview

### For Customers

1. **Browse Products**
   - Visit http://localhost:3000/products
   - Search and filter products
   - View product details

2. **Shopping Cart**
   - Add products to cart
   - Update quantities
   - View cart total

3. **Checkout**
   - Must be logged in
   - Enter shipping information
   - Place orders

4. **Order History**
   - View all your orders
   - Track order status

### For Admins

Admin users have access to additional features:

1. **Product Management**
   - URL: http://localhost:3000/admin/products
   - Create, edit, delete products
   - Manage product inventory

2. **Category Management**
   - URL: http://localhost:3000/admin/categories
   - Create, edit, delete categories
   - Organize product categories

## 🔐 Testing the Application

### Create a Customer Account

1. Go to http://localhost:3000/register
2. Fill in the registration form
3. You'll be automatically logged in

### Test Admin Features

To access admin features, you need an admin account:

1. Login with admin credentials (if available in your backend)
2. Navigate to admin panel via navbar links

## 🎨 Key Pages

- **Home**: http://localhost:3000/
- **Products**: http://localhost:3000/products
- **Categories**: http://localhost:3000/categories
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Cart**: http://localhost:3000/cart
- **Admin Products**: http://localhost:3000/admin/products (admin only)
- **Admin Categories**: http://localhost:3000/admin/categories (admin only)

## 🛠️ Common Issues

### CORS Errors

If you encounter CORS errors, make sure your Laravel backend has proper CORS configuration in `config/cors.php`:

```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => ['http://localhost:3000'],
'allowed_methods' => ['*'],
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => false,
```

### Authentication Issues

- Make sure your backend is running
- Check that JWT authentication is properly configured
- Verify tokens are being stored in localStorage

### Proxy Issues

If the API proxy isn't working, you can directly set the API URL in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:8000/api';
```

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
npm run preview  # Test production build locally
```

## 🎯 Next Steps

1. **Customize Styling**
   - Edit `tailwind.config.js` to change colors
   - Modify `src/index.css` for custom styles

2. **Add Features**
   - Product reviews
   - Wishlist functionality
   - Payment integration
   - Image upload

3. **Improve Performance**
   - Implement lazy loading
   - Add pagination
   - Optimize images

## 📞 Support

If you encounter any issues:

1. Check browser console for errors
2. Verify backend is running
3. Check network tab for API requests
4. Review the README.md for detailed documentation

Happy coding! 🎉
