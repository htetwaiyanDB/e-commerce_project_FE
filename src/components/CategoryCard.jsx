import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`} className="card hover:shadow-xl transition duration-300">
      <div className="text-center">
        {/* Category Icon/Image */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
          {category.image ? (
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <svg
              className="w-12 h-12 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          )}
        </div>

        {/* Category Name */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {category.name}
        </h3>

        {/* Category Description */}
        {category.description && (
          <p className="text-gray-600 text-sm">
            {category.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
