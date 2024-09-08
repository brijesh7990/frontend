// ProductPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Review {
    user: string;
    comment: string;
    rating: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: number;
    reviews: Review[];
}

const SingleProductPage: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="container mx-auto px-4 py-6 mt-[70px]">
            <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
                    <p className="text-xl font-semibold text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                    <div className="flex items-center mb-4">
                        {/* Rating */}
                        <span className="text-yellow-500">
                            {'★'.repeat(Math.floor(product.rating))}
                            {'☆'.repeat(5 - Math.floor(product.rating))}
                        </span>
                        <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
                    </div>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    {product.reviews.map((review, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-800">{review.user}</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">
                                    {'★'.repeat(Math.floor(review.rating))}
                                    {'☆'.repeat(5 - Math.floor(review.rating))}
                                </span>
                                <span className="ml-2 text-gray-600">({review.rating.toFixed(1)})</span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sample related products */}
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://via.placeholder.com/300"
                                alt={`Related Product ${index + 1}`}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Related Product {index + 1}</h3>
                                <p className="text-gray-600">$99.99</p>
                                <Link to={`/product/${index + 1}`} className="text-blue-600 hover:underline">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProductPage;
