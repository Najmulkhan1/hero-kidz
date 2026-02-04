import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
      <figure className="relative h-48">
        <Image
        width={200}
        height={180}
          src={image}
          alt={title}
          className="object-cover"
        />
        {discount > 0 && (
          <span className="badge badge-error text-white absolute top-2 right-2">
            {discount}% OFF
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-sm line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-warning" />
          <span className="font-medium">{ratings}</span>
          <span className="text-gray-500">
            ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-500">
          Sold: {sold}+
        </p>

        <div className="card-actions mt-3">
          <button className="btn btn-primary btn-sm w-full">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
