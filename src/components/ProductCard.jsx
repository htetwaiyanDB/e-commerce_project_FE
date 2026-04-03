import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card hover:shadow-xl transition duration-300">
      <Link to={`/products/${product.id}`}>
        {/* Product Image */}
        <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image || 'https://via.placeholder.com/300'}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary-600">
              ${parseFloat(product.price).toFixed(2)}
            </span>
            
            {product.stock > 0 ? (
              <span className="text-green-600 text-sm font-medium">
                In Stock ({product.stock})
              </span>
            ) : (
              <span className="text-red-600 text-sm font-medium">
                Out of Stock
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
