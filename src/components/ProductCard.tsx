interface ProductInterface {
    title: string;
    price: number;
    rating: number;
}

const ProductCard: React.FC<ProductInterface> = ({ title, price, rating }) => {
    return (
        <div className="relative flex flex-col w-full max-w-xs mx-auto overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a
                className="relative flex h-60 overflow-hidden rounded-xl"
                href="#"
            >
                <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="product image"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    39% OFF
                </span>
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold text-gray-900">{title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p className="flex items-baseline">
                        <span className="text-3xl font-bold text-gray-900">${price}</span>
                        <span className="text-sm text-gray-900 line-through ml-2">${price + 50}</span>
                    </p>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                aria-hidden="true"
                                className={`h-5 w-5 ${i < rating ? 'text-yellow-300' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <a
                    href="#"
                    className="flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    Add to cart
                </a>
            </div>
        </div>
    );
}

export default ProductCard;
